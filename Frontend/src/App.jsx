import { useState } from 'react'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from 'react-router'
import Branches from '../src/pages/Branches'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/Branches" element={<Branches />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
