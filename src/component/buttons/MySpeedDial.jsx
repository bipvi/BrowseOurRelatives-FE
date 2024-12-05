import { HomeIcon, Square3Stack3DIcon } from "@heroicons/react/16/solid";
import { SpeedDial, SpeedDialAction, IconButton, SpeedDialContent } from "@material-tailwind/react";
import { HiOutlineSearch } from "react-icons/hi";

export default function MySpeedDial(){
    return (
        <>
        <div className="fixed bottom-24 nav:bottom-5 z-50 logo-shadow right-6">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton className="md:size-16 size-14 rounded-full bg-bg border-txt">
              <HiOutlineSearch className="h-8 w-8 transition-transform group-hover:rotate-90" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="">
            <SpeedDialAction className="bg-transparent flex justify-end">
              <HomeIcon className="h-8 w-8 fill-txt " />
            </SpeedDialAction>
            <SpeedDialAction className="bg-transparent relative flex-row-reverse">
              <IoSearch className="h-8 w-8 fill-txt" />
              <input
                type="text"
                id="email-address-icon2"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-52"
                placeholder="name@flowbite.com"
              />
            </SpeedDialAction>
            <SpeedDialAction className="bg-transparent">
              <Square3Stack3DIcon className="h-8 w-8 fill-txt" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
        </>
    )
}