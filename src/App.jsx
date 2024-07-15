import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Pro_listing from './Pages/Pro_listing'
import Form from './Pages/Form'

function App() {
  

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path='/propertylisting' element={<Pro_listing/>}></Route> 
        <Route path='/login' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
