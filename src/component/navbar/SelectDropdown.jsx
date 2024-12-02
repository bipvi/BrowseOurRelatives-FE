import { Dropdown } from "flowbite-react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function SelectDropdown() {
  return (
    <>
      <Dropdown
        label=""
        className="bg-bg border-black hover:border-black"
        dismissOnClick={false}
        renderTrigger={() => <span className="flex flex-nowrap justify-evenly">Dropdown<RiArrowDownSLine className="pt-1"/></span>}
      >
        <Dropdown.Item className="text-txt hover:text-ac rounded-none">Dashboard</Dropdown.Item>
        <Dropdown.Item className="text-txt hover:text-ac rounded-none">Settings</Dropdown.Item>
        <Dropdown.Item className="text-txt hover:text-ac rounded-none">Earnings</Dropdown.Item>
        <Dropdown.Item className="text-txt hover:text-ac rounded-none">Sign out</Dropdown.Item>
      </Dropdown>
    </>
  );
}
