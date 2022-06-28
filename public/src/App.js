import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Add from './components/Crud/Add';
import Edit from './components/Crud/Edit';
import User from './components/Crud/User';
function App() {
  return (
    <div className="App">
      <center>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/Crud/Add' element={<Add/>}/>
       <Route path='/components/crud/edit/:id' element={<Edit/>}/>
       <Route path='/Crud/:id'element={<User/>}/>
     </Routes>
     </BrowserRouter>
     </center>
    </div>
  );
};

export default App;
