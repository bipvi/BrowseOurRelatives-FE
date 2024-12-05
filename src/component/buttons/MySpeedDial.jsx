import { HomeIcon, Square3Stack3DIcon } from "@heroicons/react/16/solid";
import {
  SpeedDial,
  SpeedDialAction,
  IconButton,
  SpeedDialContent,
  SpeedDialHandler,
} from "@material-tailwind/react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { FiUserPlus, FiUserX } from "react-icons/fi";
import { HiOutlinePencil, HiOutlineSearch } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import MyDrawer from "../admin/MyDrawer";
import { useEffect, useState } from "react";

export default function MySpeedDial() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);
  useEffect(() => {}, []);

  return (
    <>
      {open ? <MyDrawer closeDrawer={() => closeDrawer()} open={open} /> : <></>}
      <div className="fixed bottom-24 nav:bottom-5 z-40 logo-shadow right-6">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton className="nav:size-16 size-12 rounded-full bg-bg border-txt">
              <FiUserX className="h-5 w-5 nav:h-8 nav:w-8 hidden group-hover:block" />
              <FiUserPlus className="block h-5 w-5 nav:h-8 nav:w-8 transition-transform group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-col-reverse">
            <SpeedDialAction className="bg-transparent flex justify-end">
              <BsDatabaseFillAdd
                className="h-5 w-5 nav:h-8 nav:w-8 text-txt"
                onClick={toggleDrawer}
              />
            </SpeedDialAction>
            <SpeedDialAction className="bg-transparent relative flex-row-reverse">
              <HiOutlinePencil className="h-5 w-5 nav:h-8 nav:w-8 text-txt " />
            </SpeedDialAction>
            <SpeedDialAction className="bg-transparent">
              <Square3Stack3DIcon className="h-5 w-5 nav:h-8 nav:w-8 fill-txt" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
}
