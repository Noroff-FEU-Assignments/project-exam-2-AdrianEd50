import React from "react";
import Heading from "../layout/Heading";
//import ContactForm from "./ContactForm";
import FormValidation from "./FormValidation";

function Contact() {
  return (
    <>
      <div className="white-background-container">
        <Heading content="Contact" />
        <FormValidation />
      </div>
    </>
  );
}

export default Contact;
