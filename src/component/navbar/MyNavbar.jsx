import { Avatar, Dropdown, Navbar } from "flowbite-react";

const MyNavbar = () => {
    return (
        <>
            <Navbar fluid rounded className="bg-lime-900 text-slate-950">
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-black text-xl font-semibold">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                    className="border-lime-950 bg-lime-900"
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm text-slate-900">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium text-slate-900">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item className="text-slate-900">Dashboard</Dropdown.Item>
                        <Dropdown.Item className="text-slate-900">Settings</Dropdown.Item>
                        <Dropdown.Item className="text-slate-900">Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-slate-900">Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle className="bg-lime-950 ml-5" />
                </div>
                <Navbar.Collapse>
                        <Navbar.Link className="text-slate-900" href="#" active>
                            Home
                        </Navbar.Link>
                        <Navbar.Link className="text-slate-900" href="#">About</Navbar.Link>
                        <Navbar.Link className="text-slate-900" href="#">Services</Navbar.Link>
                        <Navbar.Link className="text-slate-900" href="#">Pricing</Navbar.Link>
                        <Navbar.Link className="text-slate-900" href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyNavbar