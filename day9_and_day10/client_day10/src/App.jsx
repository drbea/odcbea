import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import './App.css'
import UserForm from './components/UserForm';
import SendDataToBackend from './components/SendDataToBackend';
import Navbar from './components/Navbar';

function App() {

  return (
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/register' element={<UserForm />}></Route>
        <Route path='/navbar' element={<Navbar />}></Route>
        <Route path='/api/data' element={<SendDataToBackend />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;



