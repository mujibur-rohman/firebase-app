import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div className="col">
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
        </div>
        <button className="btn btn-add">Login</button>
        <span className="text-sm">
          Belum punya akun? <Link to={'register'}>Register</Link>
        </span>
      </form>
    </>
  );
};

export default Login;
