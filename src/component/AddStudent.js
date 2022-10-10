import React from 'react';
import { Link } from 'react-router-dom';

const AddStudent = () => {
  return (
    <>
      <h1>Add Student</h1>
      <form autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">Nama</label>
          <input
            id="name"
            className="input"
            name="name"
            type="text"
            placeholder="Nama"
          />
        </div>
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
          </div>
          <div className="form-group">
            <label htmlFor="telp">No Hp</label>
            <input
              id="telp"
              className="input"
              name="telp"
              type="text"
              placeholder="No Hp"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Alamat</label>
          <textarea
            id="address"
            className="input"
            name="address"
            type="text"
            placeholder="Alamat"
          />
        </div>
        <div className="form-group">
          <label>Alamat</label>
          <select className="input" name="prodi">
            <option>--Pilih Jurusan--</option>
            <option>Informatika</option>
            <option>Kimia</option>
            <option>Industri</option>
            <option>Psikologi</option>
          </select>
        </div>
        <div className="form-group">
          <label>Foto</label>
          <input type="file" className="input" name="photo" />
        </div>
        <button className="btn btn-add-form">Tambahkan</button>
        <Link to={'/'} className="btn btn-back-form">
          Kembali
        </Link>
      </form>
    </>
  );
};

export default AddStudent;
