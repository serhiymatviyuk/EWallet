import React from "react";



export type ConfirmationFormProps = {
  email: string,
}

const ConfirmationForm = (props: ConfirmationFormProps) => {

  function recoverSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className="login-block">
      <form onSubmit={recoverSubmit}>
        <div className="mb-3">
          <h1 className="display-5">Enter your code</h1>
          <h6 className="display-5">
            We send six-digit code on your email {props.email}
          </h6>
        </div>
        <div className="mb-3">
          <label>Type your registration email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="d-grid gap-2">
          <input type="submit" className="btn btn-primary" value="Send code" />
        </div>
      </form>
    </div>
  )
};

export default ConfirmationForm;
