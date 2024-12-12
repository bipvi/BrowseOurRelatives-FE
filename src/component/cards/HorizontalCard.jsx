import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Details from "../detail/Details";

export function HorizontalCard({ classe = "max-w-full", it }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const closeOpen = () => {
    setOpen(false);
  };


  return (
    <>
      <Details
        open={open}
        handleOpen={handleOpen}
        closeModal={closeOpen}
        item={it}
      />
      <Card
        className={`${classe} max-h-[21rem] flex-row bg-myP shadow-xs hover:shadow-sm`}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={it ? it.img : "https://via.placeholder.com/300x200"}
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" className="mb-2 text-txt">
            {it != undefined && it.nome}
          </Typography>
          <p className="mb-8 font-normal text-txt line-clamp-6">
            {it != undefined && it.storia} ...
          </p>
          <a className="inline-block">
            <Button
              variant="text"
              className="flex text-bg items-center gap-2"
              onClick={() => setOpen(true)}
            >
              Dettaglio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    </>
  );
}
