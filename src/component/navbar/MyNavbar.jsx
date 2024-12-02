import { Navbar } from "flowbite-react";
import NavbarList from "./NavbarList";

const MyNavbar = () => {
  return (
    <>
      <Navbar fluid className="rounded-none bg-bg py-2 w-screen">
        <Navbar.Brand className="">
          <img src="/favicon.svg" className="mr-3 h-14 sm:h-16" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white xxs:inline">
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
