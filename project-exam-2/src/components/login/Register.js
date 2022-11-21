import React from "react";
import Heading from "../layout/Heading";
import RegisterForm from "./RegisterForm";
function Register() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Register" />
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;
