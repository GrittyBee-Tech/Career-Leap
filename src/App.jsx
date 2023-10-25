

import './App.css'

import { Routes, Route } from 'react-router-dom';
import home from './Pages/Home';



function App() {


  return (

    <Routes>

      <Route path="/" component={home} />

    </Routes>


  )
}

export default App
