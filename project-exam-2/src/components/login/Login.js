import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
//import RegisterForm from "./Register";

function LoginPage() {
  return (
    <>
      <Heading content="Login" />
      <LoginForm />
    </>
  );
}

export default LoginPage;
