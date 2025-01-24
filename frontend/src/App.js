import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CourseDetail from './components/CourseDetail.jsx';
import Card from './components/Card.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route exact path="/" element={<Card/>} />
      <Route path="/course/:id" element={<CourseDetail/>} />
    </Routes>
   </Router>
    </>
  );
}

export default App;
