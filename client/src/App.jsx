import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./signup";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
