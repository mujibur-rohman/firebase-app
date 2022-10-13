import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SetupRoutes from './app/routes';

function App() {
  return (
    <BrowserRouter>
      <main className="card">
        <SetupRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
