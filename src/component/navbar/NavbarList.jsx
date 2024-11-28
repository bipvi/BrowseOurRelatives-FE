import { Navbar } from "flowbite-react"
import AvatarDropdown from "./AvatarDropdown"

export default function NavbarList(){
    return(
        <>
        <Navbar.Link className="text-myS" active>
              Home
            </Navbar.Link>
            <Navbar.Link className="text-txt border-none">About</Navbar.Link>
            <Navbar.Link className="text-txt border-none">Services</Navbar.Link>
            <Navbar.Link className="text-txt border-none">Contact</Navbar.Link>
            <Navbar.Link className="border-none">
              <AvatarDropdown />
            </Navbar.Link>
        </>
    )
}