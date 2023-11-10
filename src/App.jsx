import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterAdmin from './Pages/Register/RegisterAdmin';
import Dashboard from './Components/Dashboard-Layout/Dashboard';
import Overview from './Pages/Dashboard/Overview';
import Learning from './Pages/Dashboard/Learning';

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/admin/register' Component={RegisterAdmin} />
      <Route path='/dashboard' Component={Dashboard}>
        <Route index Component={Overview} />
        <Route path='/dashboard/learn' Component={Learning} />
      </Route>
    </Routes>


  )
}

export default App
