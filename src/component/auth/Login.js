import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { auth } from '../../config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/user/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  });

  const onSubmit = async (values, props) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user));
        navigate('/', { replace: true });
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found')
          alert('Email belum terdaftar');
        if (error.code === 'auth/wrong-password') alert('Password Salah');
      });
    props.setSubmitting(false);
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
                type="submit"
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
