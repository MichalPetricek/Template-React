
import React from "react";
import { BrowserRouter as Router,Redirect,Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return(
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
      </Router>  
    </div>

  );
}


export default App;
