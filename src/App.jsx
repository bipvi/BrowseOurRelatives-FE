import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import { Button } from 'flowbite-react'
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
