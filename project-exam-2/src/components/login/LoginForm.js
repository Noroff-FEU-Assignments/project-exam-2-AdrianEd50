import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../constants/api";
import FormError from "../../common/FormError";

const schema = yup.object().shape({
  name: yup.string().required("Please enteryour username"),
  email: yup.string().required("Please enter a valid noroff student email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(9, "password must be at least 9 characters"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

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
    const login_url = BASE_URL + "social/auth/login";
    setLoginError(null);
    console.log(data);

    try {
      const response = await axios.post(login_url, data);
      console.log(response.data);
      if (response.ok) {
        navigate(`/login`, { replace: true });
      } else {
        setLoginError();
      }
    } catch (error) {
      console.log(error);
      setLoginError();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control
            {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="login-input"
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
            className="login-input"
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
            className="login-input"
          />
          <Form.Text className="text-muted">Enter your password</Form.Text>
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </Form.Group>
        <Button type="submit" className="login-cta">
          {submitting ? "Logging in..." : "Login"}
        </Button>
        <div>
          <p>Do you not have an account?</p>
          <Link to="/register">Register here</Link>
        </div>
      </Form>
    </>
  );
}
