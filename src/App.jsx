import { useState } from 'react'
import './App.css'
import MyNavbar from './component/navbar/MyNavbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <MyNavbar />
    </header>
  )
}

export default App
