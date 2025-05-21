import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './Header'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import SigninForm from './components/SigninForm'
import SignupForm from './components/SignupForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter >
      <Header
            title = "Blog"
            home = "Home"
            about = "About"
            contact = "contact"
            signup="Inscription"
            signin = "Connection"
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SigninForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App;
