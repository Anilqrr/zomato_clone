import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import './responsive.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Foods from './components/Foods';



function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/Anilqrr/zomato_clone' element={<><Navbar/><Main/></>}/>
        <Route path='/bestfoods' element={<Foods/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
