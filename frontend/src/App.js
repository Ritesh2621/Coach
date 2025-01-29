import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseDetail from './components/CourseDetail.jsx';
import Login from './components/Login.jsx';
import AllCourse from './components/AllCourse.jsx';
import Footer from './components/Footer.jsx';
import SuccessStories from './components/SuccessStories.jsx';

function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/course/:id" element={<CourseDetail/>} />
      <Route path="allCourses" element={<AllCourse/>} />
      <Route path="successStories" element={<SuccessStories/>} />
    </Routes>
    <Footer/>
   </Router>
    </>
  );
}

export default App;
