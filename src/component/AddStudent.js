import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config';

const AddStudent = () => {
  const navigate = useNavigate();
  const initialValues = {
    nama: '',
    email: '',
    telp: '',
    address: '',
    jurusan: '',
  };

  const validationSchema = yup.object({
    nama: yup.string().required(),
    email: yup.string().required().email(),
    telp: yup
      .string()
      .matches(/^[0-9]+$/, 'Nomor telepon tidak valid')
      .required(),
    address: yup.string().required(),
    jurusan: yup.string().required(),
  });

  const onSubmit = async (values, props) => {
    await addDoc(collection(db, 'students'), {
      nama: values.nama,
      email: values.email,
      telp: values.telp,
      address: values.address,
      jurusan: values.jurusan,
    });
    navigate('/');
    props.setSubmiting(false);
  };

  return (
    <>
      <h1>Add Student</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <Form autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <Field
                  id="name"
                  className="input"
                  name="nama"
                  type="text"
                  placeholder="Nama"
                />
                <ErrorMessage name="nama">
                  {(err) => <span className="error-message">{err}</span>}
                </ErrorMessage>
              </div>
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
                  <label htmlFor="telp">No Hp</label>
                  <Field
                    id="telp"
                    className="input"
                    name="telp"
                    type="text"
                    placeholder="No Hp"
                  />
                  <ErrorMessage name="telp">
                    {(err) => <span className="error-message">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Alamat</label>
                <Field
                  as="textarea"
                  id="address"
                  className="input"
                  name="address"
                  type="text"
                  placeholder="Alamat"
                />
                <ErrorMessage name="address">
                  {(err) => <span className="error-message">{err}</span>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Alamat</label>
                <Field as="select" className="input" name="jurusan">
                  <option value="">--Pilih Jurusan--</option>
                  <option value="Informatika">Informatika</option>
                  <option value="Kimia">Kimia</option>
                  <option value="Industri">Industri</option>
                  <option value="Psikologi">Psikologi</option>
                </Field>
                <ErrorMessage name="jurusan">
                  {(err) => <span className="error-message">{err}</span>}
                </ErrorMessage>
              </div>
              {/* <div className="form-group">
            <label>Foto</label>
            <input type="file" className="input" name="photo" />
          </div> */}
              <button
                disabled={!props.isValid || props.isSubmitting}
                className="btn btn-add-form"
              >
                {props.isSubmitting ? 'Please Wait' : 'Tambahkan'}
              </button>
              <Link to={'/'} className="btn btn-back-form">
                Kembali
              </Link>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default AddStudent;
