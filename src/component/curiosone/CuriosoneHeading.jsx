import {
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import ButtonMyP from "../buttons/ButtonMyP";
import { ExCard } from "../cards/ExCard";
import MiniCard from "../cards/MiniCard";
import {
  CogIcon,
  HomeIcon,
  PlusIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/16/solid";
import { IoSearch } from "react-icons/io5";
import { HiOutlineSearch } from "react-icons/hi";
import { HorizontalCard } from "../cards/HorizontalCard";
import MicroCard from "../cards/MicroCard";

export default function CuriosoneHeading() {
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
  };

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-evenly my-7 mx-auto px-8 sm:px-14 md:px-4 lg:px-16 w-screen">
        <div className="min-w-0 flex-1 flex-nowrap">
          <div className="flex items-center justify-between sm:me-6 lg:me-0">
            <h2 className="text-2xl/7 font-bold text-start text-txt sm:truncate sm:text-3xl sm:tracking-tight">
              Nome Specie
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mx-auto py-3 px-8 sm:px-14 md:px-4 lg:px-16 w-screen gap-7">
        <div className="lg:col-span-4 col-span-3">
          <HorizontalCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 min-w-full gap-4 mt-6">
            <MicroCard />
            <MicroCard />
            <MicroCard />
            <MicroCard />
            <MicroCard />
            <MicroCard />
          </div>
        </div>
        <div className="lg:col-span-1 hidden md:contents">
          <div className="flex flex-col items-center gap-7">
            <Typography as={'h2'} className="self-start text-lg font-semibold text-txt">Altre specie:</Typography>
            <MicroCard />
            <MicroCard />
            <MicroCard />
            <MicroCard classe={'hideLastCard'}/>
          </div>
        </div>
      </div>
      
    </>
  );
}
