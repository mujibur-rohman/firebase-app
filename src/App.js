import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './component/AddStudent';
import Login from './component/auth/Login';
import Register from './component/auth/Register';
import UserLists from './component/StuddentLists';
import UpdateStudent from './component/UpdateStudent';

function App() {
  return (
    <BrowserRouter>
      <main className="card">
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
