import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormSucces from "./SignupFormSucces";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <SignupFormSucces />
      )}
    </div>
  );
};

export default Form;
