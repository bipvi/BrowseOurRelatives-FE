import React, { useEffect } from "react";
import './style/App.css'
import { useState } from "react";
import MyNavbar from "./component/navbar/MyNavbar.jsx";
import MyFooter from "./component/footer/MyFooter.jsx";
import MyHero from "./component/hero/MyHero.jsx";
import LoginPage from "./component/login/LoginPage.jsx";
import RegisterPage from "./component/login/RegisterPage.jsx";
import MySpeedDial from "./component/buttons/MySpeedDial.jsx";
import CuriosonePage from "./component/curiosone/CuriosonePage.jsx";
import BottomNavigation from "./component/navbar/BottomNavigation.jsx";
import ExplorePage from "./component/esplora/ExplorePage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { LOCAL_STORAGE_KEY, localStorageKey } from "./redux/actions/index.js";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();


  return (
    <BrowserRouter>
      <div className="pb-20 nav:pb-0">
        <header>
          <MyNavbar />
        </header>
        <main className="mt-28">
          <Routes>
            <Route path="/curiosone" element={<CuriosonePage />} />
            <Route path="/esplora" element={<ExplorePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MyHero />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
          <MySpeedDial />
          <BottomNavigation />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
