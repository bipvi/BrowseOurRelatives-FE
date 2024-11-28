import React from 'react';
import { useState } from "react";
import "./App.css";
import MyNavbar from "./component/navbar/MyNavbar.jsx";
import MyHero from "./component/hero/MyHero.jsx";
import { Navbar } from "flowbite-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
          <MyNavbar />
      </header>
      <main>
        <MyHero />
      </main>
    </>
  );
}

export default App;
