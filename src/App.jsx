

import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterAdmin from './Pages/Register/RegisterAdmin';
import Sidebar from './Components/Dashboard-Layout/Sidebar';




function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/admin/register' Component={RegisterAdmin} />
      <Route path='/dashboard' Component={Sidebar} />
    </Routes>


  )
}

export default App
