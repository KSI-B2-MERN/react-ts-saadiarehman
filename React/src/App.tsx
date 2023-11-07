import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
