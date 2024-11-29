import React from 'react';
import { useState } from "react";
import "./App.css";
import MyNavbar from "./component/navbar/MyNavbar.jsx";
import MyHero from "./component/hero/MyHero.jsx";
import { Navbar } from "flowbite-react";
import LoginPage from './component/login/LoginPage.jsx';
import RegisterPage from './component/login/RegisterPage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
          <MyNavbar />
      </header>
      <main>
        <RegisterPage />
        <LoginPage />
      </main>
    </>
  );
}

export default App;
