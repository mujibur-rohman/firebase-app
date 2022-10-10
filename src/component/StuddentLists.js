import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../config';

const UserLists = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'students'));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setStudents(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(students);

  return (
    <>
      <h1>Daftar Mahasiswa</h1>
      <Link to={'/add'} className="btn btn-add">
        Tambah
      </Link>
      <table className="customTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jurusan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="no">1</td>
              <td>{student.nama}</td>
              <td>{student.address}</td>
              <td>{student.jurusan}</td>
              <td className="action">
                <button className="btn btn-delete">Delete</button>
                <button className="btn btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserLists;
