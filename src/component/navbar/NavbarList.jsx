import { AiFillFire } from "react-icons/ai";
import { Badge, Navbar } from "flowbite-react";
import AvatarDropdown from "./AvatarDropdown";
import SelectDropdown from "./SelectDropdown";

export default function NavbarList() {
  return (
    <>
      <Navbar.Link className="text-bg border-none hover:text-ac" active>
        Home
      </Navbar.Link>
      <Navbar.Link className="text-txt border-none hover:text-ac">
        <SelectDropdown />
      </Navbar.Link>
      <Navbar.Link className="text-txt border-none hover:text-ac">
        <div className="static">
          Curiosone
          <Badge className="fixed firebadge shadow-md text-bg" size="xs" color="gray" icon={AiFillFire} />
        </div>
      </Navbar.Link>
      <Navbar.Link className="text-txt border-none hover:text-ac">
        Contact
      </Navbar.Link>
      <Navbar.Link className="border-none">
        <AvatarDropdown />
      </Navbar.Link>
    </>
  );
}
