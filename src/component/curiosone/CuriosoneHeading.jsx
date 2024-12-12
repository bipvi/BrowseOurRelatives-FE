import {
  Alert,
  Button,
  IconButton,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Spinner,
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
  const [open, setOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
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
        setIsloading(false);
        setIsWrong(false);
        f(d);
      })
      .catch((er) => alert(er));
  };

  useEffect(() => {
    getRandomSpecie(setItem);
    getRandomSpecie(setOther);
    setIsWrong(false);
    setIsloading(false);
  }, []);

  useEffect(() => {
    if (!me.token) {
      navigate("/");
    }
  }, [me]);

  return (
    <>
      {isWrong && (
        <Alert
          variant="gradient"
          open={open}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          }
          action={
            <Button
              variant="text"
              color="white"
              size="sm"
              className="!absolute top-3 right-3"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          }
        >
          Sorry, something went wrong please try again.
        </Alert>
      )}
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
                setIsloading(true);
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
          {isLoading ? <Spinner className="h-12 w-12" /> : <HorizontalCard it={item} />}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 min-w-full gap-4 mt-6">
            {item != undefined && isLoading == false ? <MicroCard item={item.genere} /> : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {item != undefined && isLoading == false ? (
              <MicroCard item={item.genere.famiglia} />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {item != undefined && isLoading == false ? (
              <MicroCard item={item.genere.famiglia.ordine} />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {item != undefined && isLoading == false ? (
              <MicroCard item={item.genere.famiglia.ordine.classe} />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {item != undefined && isLoading == false ? (
              <MicroCard item={item.genere.famiglia.ordine.classe.phylum} />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {item != undefined && isLoading == false ? (
              <MicroCard
                item={item.genere.famiglia.ordine.classe.phylum.regno}
              />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
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
            {other != undefined  && isLoading == false ? <MicroCard item={other} /> : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {other != undefined  && isLoading == false ? <MicroCard item={other.genere} /> : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {other != undefined  && isLoading == false ? (
              <MicroCard
                item={other.genere.famiglia.ordine}
                classe="hideLastCard"
              />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
            {other != undefined  && isLoading == false ? (
              <MicroCard
                item={other.genere.famiglia.ordine.classe.phylum}
                classe="hideLastCard"
              />
            ) : null}
            {isLoading && <Spinner className="h-12 w-12" />}
          </div>
        </div>
      </div>
    </>
  );
}
