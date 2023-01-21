import React, {useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import CreateTodo from "./CreateTodo";
import ShowTodo from "./ShowTodo";

function App() {
  
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Register  />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/home" element={<Home  />} />
          <Route path="/Createtodo" element={<CreateTodo />} />
          <Route path="/showtodo" element={<ShowTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
