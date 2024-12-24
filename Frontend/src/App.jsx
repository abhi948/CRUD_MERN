import React from "react";
import User from './components/User.jsx';
import {Route, Routes} from 'react-router-dom';
import AddUser from "./components/AddUser.jsx";
import Update from "./components/Update.jsx";

function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<User/>}/>

      <Route path="/add" element={<AddUser/>}/>

      <Route path="/update/:id" element={<Update/>} />
      
    </Routes>
    {/* <User/> */}
    </>
  )
}

export default App