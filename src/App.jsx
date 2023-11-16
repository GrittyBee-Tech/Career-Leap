import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterAdmin from './Pages/Register/RegisterAdmin';
import Dashboard from './Components/Dashboard-Layout/Dashboard';
import Overview from './Pages/Dashboard/Overview';
import Learning from './Pages/Dashboard/Learning';
import Mentorship from './Pages/Dashboard/Mentorship';
import Health from './Pages/Dashboard/Health';
import Appraisal from './Pages/Dashboard/Appraisal';
import Settings from "./Pages/Dashboard/Settings"; 

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='/admin/register' Component={RegisterAdmin} />
      <Route path='/dashboard' Component={Dashboard}>
        <Route index Component={Overview} />
        <Route path='/dashboard/learn' Component={Learning} />
        <Route path='/dashboard/Mentorship' Component={Mentorship} />
        <Route path='/dashboard/Health' Component={Health} />
        < Route path='/dashboard/Appraisal' Component={Appraisal} />
        < Route path='/dashboard/Settings' Component={Settings} />
        < Route path='/dashboard/health' Component={Health} />

      </Route>
    </Routes>


  )
}

export default App
