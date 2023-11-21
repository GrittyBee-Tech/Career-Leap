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
import RegisterEmployee from './Pages/Register/RegisterEmployee';
import SignIn from './Pages/Register/SignIn';
import PersistLogin from './Auth/PersistLogin';
import AlreadyLoggedIn from './Auth/AlreadyLoggedIn';
import RequireAuth from './Auth/RequireAuth';
import CoursesInfo from './Pages/Dashboard/Courses/CoursesInfo';
import CourseContent from './Pages/Dashboard/Courses/CourseContent';
import ErrorPage from './Pages/ErrorPage';
 
function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path='*' Component={ErrorPage} />
      <Route element={<PersistLogin />}>
        <Route element={<AlreadyLoggedIn />}>
          <Route path='/admin/register' Component={RegisterAdmin} />
          <Route path='/employee/register' Component={RegisterEmployee} />
          <Route path='/signin' Component={SignIn} />
        </Route>

        <Route element={<RequireAuth />}>
          <Route path='dashboard' Component={Dashboard}>
            <Route index Component={Overview} />
            <Route path='learn/courses' Component={Courses} />
            <Route path='learn/courses/:courseId/home' Component={CoursesInfo} />
            <Route path='learn/courses/:courseId/lecture/:lectureId' Component={CourseContent} />
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
