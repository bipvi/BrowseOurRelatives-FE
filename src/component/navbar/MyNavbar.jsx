import { Navbar } from "flowbite-react";
import NavbarList from "./NavbarList";
import { useState } from "react";

const MyNavbar = () => {
  const [hover, setHover] =useState(false)

  return (
    <>
      <Navbar fluid className="rounded-none bg-bg py-2 w-screen fixed z-50 top-0 shadow-xxs nav:shadow-micro">
        <Navbar.Brand className="justify-center" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <img src="/favicon.svg" className={`nav:mx-5 ${hover ? 'logo-hover ' : ' '}logo-shadow h-14 sm:h-16`} alt="Logo" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
          <span className={`${hover ? 'logo-hover ' : ''}self-center title whitespace-nowrap text-2xl text-shadow font-semibold text-white xxs:inline`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            Browse our relatives
          </span>
        </Navbar.Brand>
        <div className="flex items-center justify-between gap-5 list-none">
          <div className="hidden nav:contents">
            <NavbarList key={1}/>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default MyNavbar;
