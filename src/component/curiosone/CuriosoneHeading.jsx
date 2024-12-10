import {
  Button,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import ButtonMyP from "../buttons/ButtonMyP";
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
import { useEffect, useState } from "react";
import { baseUrl } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CuriosoneHeading() {
  const me = useSelector((s) => s.user);
  const navigate = useNavigate();
  const [item, setItem] = useState(undefined);
  const [other, setOther] = useState(undefined);

  const getRandomSpecie = (f) => {
    fetch(baseUrl + "/specie/getRandomly", {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error(resp.statusText);
      })
      .then((d) => {
        console.log(d);
        f(d);
      })
      .catch((er) => alert(er));
  };

  useEffect(() => {
    getRandomSpecie(setItem);
    getRandomSpecie(setOther);
  }, []);

  useEffect(() => {
    if (!me.token){
      navigate("/")
    } 
  }, [me])

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-evenly my-7 mx-auto px-8 sm:px-14 md:px-4 lg:px-16 w-screen">
        <div className="min-w-0 flex-1 flex-nowrap">
          <div className="flex items-center justify-between sm:me-6 lg:me-0">
            <h2 className="text-2xl/7 font-bold text-start text-txt sm:truncate sm:text-3xl sm:tracking-tight">
              {item != undefined && item.nome}
            </h2>
            <Button
              size="lg"
              className="flex items-center gap-2 text-tx bg-myP popup"
              onClick={(e) => {
                e.preventDefault();
                getRandomSpecie(setItem);
                getRandomSpecie(setOther);
              }}
            >
              Vedi altro
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 mx-auto py-3 px-8 sm:px-14 md:px-4 lg:px-16 w-screen gap-11">
        <div className="lg:col-span-4 col-span-3">
          <HorizontalCard it={item} />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 min-w-full gap-4 mt-6">
            {item != undefined ? <MicroCard item={item.genere} /> : null}
            {item != undefined ? (
              <MicroCard item={item.genere.famiglia} />
            ) : null}
            {item != undefined ? (
              <MicroCard item={item.genere.famiglia.ordine} />
            ) : null}
            {item != undefined ? (
              <MicroCard item={item.genere.famiglia.ordine.classe} />
            ) : null}
            {item != undefined ? (
              <MicroCard item={item.genere.famiglia.ordine.classe.phylum} />
            ) : null}
            {item != undefined ? (
              <MicroCard
                item={item.genere.famiglia.ordine.classe.phylum.regno}
              />
            ) : null}
          </div>
        </div>
        <div className="lg:col-span-1 hidden md:contents">
          <div className="flex flex-col items-center gap-7">
            <Typography
              as={"h2"}
              className="self-start text-lg font-semibold text-txt"
            >
              Altre specie:
            </Typography>
            {other != undefined ? <MicroCard item={other} /> : null}
            {other != undefined ? <MicroCard item={other.genere} /> : null}
            {other != undefined ? (
              <MicroCard
                item={other.genere.famiglia.ordine}
                classe="hideLastCard"
              />
            ) : null}
            {other != undefined ? (
              <MicroCard
                item={other.genere.famiglia.ordine.classe.phylum}
                classe="hideLastCard"
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
