

import './App.css'

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterAdmin from './Pages/Register/RegisterAdmin';




function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/admin/register' Component={RegisterAdmin} />
    </Routes>


  )
}

export default App
