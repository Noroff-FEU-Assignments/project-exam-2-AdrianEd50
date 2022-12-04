import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter an Email address")
    .email("Please enter a valid Email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {}

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Enter your first name" />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <input {...register("email")} placeholder="Enter your email" />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <textarea {...register("message")} placeholder="Enter your message" />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
        <button className="contact-cta">Send</button>
      </form>
    </>
  );
}

export default FormValidation;
