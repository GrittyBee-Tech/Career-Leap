import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import RegisterAdmin from './Pages/Register/RegisterAdmin';
import Dashboard from './Components/Dashboard-Layout/Dashboard';
import Overview from './Pages/Dashboard/Overview';
import Courses from './Pages/Dashboard/LearningCourses';
import Ebooks from './Pages/Dashboard/LearningEbooks';
import Mentorship from './Pages/Dashboard/Mentorship';
import Health from './Pages/Dashboard/Health';
import Appraisal from './Pages/Dashboard/Appraisal';
import Settings from "./Pages/Dashboard/Settings"; 
import PersistLogin from './Auth/PersistLogin';
// import AlreadyLoggedIn from './Auth/AlreadyLoggedIn';
import RequireAuth from './Auth/RequireAuth';

function App() {

  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route path="/" Component={Home} />
        <Route path='/admin/register' Component={RegisterAdmin} />

        <Route element={<RequireAuth />}>
          <Route path='dashboard' Component={Dashboard}>
            <Route index Component={Overview} />
            <Route path='learn/courses' Component={Courses} />
            <Route path='learn/ebooks' Component={Ebooks} />
            <Route path='mentorship' Component={Mentorship} />
            <Route path='health' Component={Health} />
            <Route path='appraisal' Component={Appraisal} />
            <Route path='settings' Component={Settings} />
            <Route path='health' Component={Health} />
          </Route>
        </Route>

      </Route>
    </Routes>
  )
}

export default App
