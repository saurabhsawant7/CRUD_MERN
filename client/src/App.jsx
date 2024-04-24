import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User'
import Create_User from './components/Create_User'
import Update_User from './components/Update_User'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<User/>}/>
            <Route path="/create" element={<Create_User/>}/>
            <Route path="/update/:id" element={<Update_User/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
