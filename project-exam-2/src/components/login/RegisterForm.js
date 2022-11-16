import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import FormError from "../../common/FormError";

let emailRegex = new RegExp("[a-z0-9]+@stud.noroff.no");

const schema = yup.object().shape({
  name: yup.string().required("Please enteryour username"),
  email: yup
    .string()
    .required("Please enter a valid noroff student email")
    .matches(emailRegex, "the email is not valid, please enter a valid email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(9, "password must be at least 9 characters"),
});

export default function RegisterForm() {
  const [submitting, setSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function onSubmit(data) {
    setSubmitting(true);
    const REGISTER_URL = BASE_URL + "social/auth/register";
    setRegisterError(null);
    console.log(data);

    try {
      const response = await axios.post(REGISTER_URL, data);
      console.log(response.data);
      if (response.ok) {
        navigate(`/login`, { replace: true });
      } else {
        setRegisterError();
      }
    } catch (error) {
      console.log(error);
      setRegisterError();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {registerError && <FormError>{registerError}</FormError>}
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="register-input"
          />
          <Form.Text className="text-muted"></Form.Text>
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Enter a noroff student email"
            className="register-input"
          />
          <Form.Text className="text-muted">
            Enter a valid noroff student email
          </Form.Text>
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="register-input"
          />
          <Form.Text className="text-muted">
            Please make a strong password, must be more than 9 characters
          </Form.Text>
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </Form.Group>
        <Button type="submit" className="register-cta">
          {submitting ? "Registering in..." : "Register"}
        </Button>
      </Form>
    </>
  );
}
