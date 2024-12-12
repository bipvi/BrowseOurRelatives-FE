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
import ModalMod from "../admin/ModalMod";
import Icon from "./Icon";

export default function MySpeedDial() {
  const [open, setOpen] = useState(false);
  const [modalOpen, setOpenModal] = useState(false);

  const openDrawer = () => setOpen(true);
  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);
  const openModal = () => setOpenModal(true);
  const toggleModal = () => setOpenModal(!open);
  const closeModal = () => setOpenModal(false);
  useEffect(() => {}, []);

  return (
    <>
      <MyDrawer closeDrawer={() => closeDrawer()} open={open} />
      <ModalMod open={modalOpen} handleOpen={setOpenModal} closeModal={closeModal}/>
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
              <Icon toggleModal={toggleModal} />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
}
