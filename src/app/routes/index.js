import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStudent from '../../component/AddStudent';
import Login from '../../component/auth/Login';
import Register from '../../component/auth/Register';
import UserLists from '../../component/StuddentLists';
import UpdateStudent from '../../component/UpdateStudent';
import PrivateRoutes from './PrivateRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const SetupRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<UserLists />} />
        <Route path="add" element={<AddStudent />} />
        <Route path="/update/:id" element={<UpdateStudent />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default SetupRoutes;
