
import './App.css';
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Content from "./components/Content";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Content>
          <Routes>         
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Content>  
      </Router>  
    </div>
  );
}

export default App;
