import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Login" />
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
