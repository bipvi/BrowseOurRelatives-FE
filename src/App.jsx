import React from 'react';
import { useState } from "react";
import "./App.css";
import MyNavbar from "./component/navbar/MyNavbar.jsx";
import MyHero from "./component/hero/MyHero.jsx";
import { Navbar } from "flowbite-react";
import LoginPage from './component/login/LoginPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
          <MyNavbar />
      </header>
      <main>
        <LoginPage />
      </main>
    </>
  );
}

export default App;
