import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    className="input"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email">
                    {(err) => <span className="error-message">{err}</span>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password">
                    {(err) => <span className="error-message">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <button
                className="btn btn-add"
                disabled={!props.isValid || props.isSubmitting}
              >
                {props.isSubmitting ? 'Please Wait' : 'Login'}
              </button>
              <span className="text-sm">
                Belum punya akun? <Link to={'/register'}>Register</Link>
              </span>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
