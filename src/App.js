import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import Upload from './components/Upload';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <Header />
          <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/videos' element={ <Video />}/>
        <Route path='/upload' element={ <Upload /> }/>
        <Route path='/logIn' element={ <LogIn /> }/>
        <Route path='/signUp' element={ <SignUp /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
