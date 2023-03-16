import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Components/main"
import NavBar from "./Components/navBar"
import Register from "./Components/register";
import './App.css';

function App() {
  const [students, setStudents] = useState([])
  const [registered, setRegistered] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3001/showAll")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [registered])
  // console.log(people, "<<<<<<<<<")
  const reRenderFetch = () => {
    setRegistered(!registered)
  }
  console.log(registered)
  console.log(students)
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main students={students} setRegistered={reRenderFetch} />} />
          <Route path="/registerNewStudent" element={<Register setRegistered={reRenderFetch} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
