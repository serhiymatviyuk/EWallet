import React from "react";

const RecoveryForm = () => {
  function recoverSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className="login-block">
      <form onSubmit={recoverSubmit}>
        <div className="mb-3">
          <h1 className="display-5">Password Recovery</h1>
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

export default RecoveryForm;
