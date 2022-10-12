import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <form autoComplete="off">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            name="email"
            type="text"
            placeholder="Email"
          />
          <span className="error-message">Error</span>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input"
              name="password"
              type="text"
              placeholder="Password"
            />
            <span className="error-message">Error</span>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="input"
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
            <span className="error-message">Error</span>
          </div>
        </div>
        <button className="btn btn-add">Register</button>
        <span className="text-sm">
          Sudah punya akun? <Link to={'register'}>Login</Link>
        </span>
      </form>
    </>
  );
};

export default Register;
