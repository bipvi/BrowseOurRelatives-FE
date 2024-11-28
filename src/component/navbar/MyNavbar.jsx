import { Navbar } from "flowbite-react";
import NavbarList from "./NavbarList";

const MyNavbar = () => {
  return (
    <>
      <Navbar fluid className="rounded-none py-2 bg-myP">
        <Navbar.Brand>
          <img src="/favicon.svg" className="mr-3 h-14 sm:h-16" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-black hidden xxs:inline">
            Browse our relatives
          </span>
        </Navbar.Brand>
        <div className="flex items-center justify-between gap-5 list-none">
          <div className="hidden md:contents">
            <NavbarList />
          </div>
          <Navbar.Toggle className="bg-myP text-bg hover:bg-bg hover:text-myP after:border-bg after:bg-myP" />
        </div>
        <Navbar.Collapse className="lg:hidden">
          <NavbarList />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
