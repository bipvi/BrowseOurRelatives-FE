import { SiNotepadplusplus } from "react-icons/si";
import AvatarDropdown from "./AvatarDropdown";
import { BsPlus } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { IoSearch, IoSearchCircleOutline } from "react-icons/io5";
import SelectDropdown from "./SelectDropdown";
import { useNavigate } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import BottomQuery from "./BottomQuery";
import { FaPhone } from "react-icons/fa6";
import { MdPhoneEnabled } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";

export default function BottomNavigation() {
  const navigate = useNavigate()
  return (
    <>
      <div className="fixed z-50 nav:hidden w-98% h-16 max-w-lg -translate-x-1/2 bg-myP border border-bg shadow-sm rounded-full bottom-3 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
          onClick={() => navigate('/')}
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-txt group-hover:text-bg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-wallet"
            type="button"
            onClick={() => navigate('/curiosone')}
            className="inline-flex flex-col items-center justify-center relative px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <div
              className="badge absolute top-2 end-4 bg-transparent border-none"
            >
              <AiFillFire className="w-6 h-6 text-bg" />
            </div>
            <GiWorld  className="w-8 h-8"/>
            <span className="sr-only">Curiosone</span>
          </button>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Curiosone
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center">
          <BottomQuery/>

                <span className="sr-only">New item</span>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <RiContactsFill className="w-8 h-8" />
            <span className="sr-only">Contatti</span>
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Contatti
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          
            <AvatarDropdown />
            
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </>
  );
}
