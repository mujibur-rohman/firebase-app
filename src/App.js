import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudent from './component/AddStudent';
import UserLists from './component/StuddentLists';

function App() {
  return (
    <BrowserRouter>
      <main className="card">
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="add" element={<AddStudent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
