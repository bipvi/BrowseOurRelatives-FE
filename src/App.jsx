import React from 'react';
import { useState } from "react";
import "./style/App.css";
import MyNavbar from "./component/navbar/MyNavbar.jsx";
import MyFooter from "./component/footer/MyFooter.jsx";
import MyHero from "./component/hero/MyHero.jsx";
import { Navbar } from "flowbite-react";
import LoginPage from './component/login/LoginPage.jsx';
import RegisterPage from './component/login/RegisterPage.jsx';
import MySpeedDial from './component/buttons/MySpeedDial.jsx';
import CuriosonePage from './component/curiosone/CuriosonePage.jsx';
import BottomNavigation from './component/navbar/BottomNavigation.jsx';
import ExplorePage from './component/esplora/ExplorePage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='pb-20 nav:pb-0'>
      <header>
          <MyNavbar />
      </header>
      <main className='mt-28'>
        <CuriosonePage />
      </main>
      <footer>
      <MyFooter />
      <MySpeedDial />
      <BottomNavigation />
      </footer>
    </div>
  );
}

export default App;
