import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../config';
import StudentItem from './StudentItem';

const UserLists = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, 'students'));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setStudents(list);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchData();
    const unsub = onSnapshot(
      collection(db, 'students'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setStudents(list);
      },
      (error) => console.log(error)
    );

    return () => {
      unsub();
    };
  }, []);

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
            <StudentItem student={student} key={student.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserLists;
