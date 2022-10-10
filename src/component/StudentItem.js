import React from 'react';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config';

const StudentItem = ({ student }) => {
  const deleteItem = async () => {
    await deleteDoc(doc(db, 'students', student.id));
  };
  return (
    <tr>
      <td className="no">1</td>
      <td>{student.nama}</td>
      <td>{student.address}</td>
      <td>{student.jurusan}</td>
      <td className="action">
        <button onClick={deleteItem} className="btn btn-delete">
          Delete
        </button>
        <button className="btn btn-edit">Edit</button>
      </td>
    </tr>
  );
};

export default StudentItem;
