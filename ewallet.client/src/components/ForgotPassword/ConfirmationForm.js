import React from "react";
import PropTypes from "prop-types";

function RecoverSubmit(event) {
  event.preventDefault();
}

const ConfirmationForm = (props) => (
  <div className="login-block">
    <form onSubmit={RecoverSubmit}>
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
);

ConfirmationForm.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ConfirmationForm;
