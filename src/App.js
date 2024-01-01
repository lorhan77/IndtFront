
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Cadastrar from './Pages/Cadastrar';
import Editar from './Pages/Editar';

function App() {
  return (
    <Router>

      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/editar/:id" element={<Editar />} />
         



      </Routes>



    </Router>
  );
}

export default App;
