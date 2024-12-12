import { useState } from "react";
import Details from "../detail/Details";

export default function MicroCard({ classe = "", item }) {
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
        closeOpen={closeOpen}
        item={item}
      />
      <div
        className={`${classe} bg-myP rounded-lg shadow-lg popup`}
      >
        <div className="px-4 py-2 h-20">
          <h1 className="text-xl font-bold text-txt">
            {item != undefined ? item.nome : ""}
          </h1>
          <p className="mt-1 text-sm text-txt">
            {item != undefined ? item.descrizione.slice(0, 58) : "Ciao"}...
          </p>
        <button className="btn relative top-[35px] btn-success text-txt border shadow-xs hover:shadow-sm hover:bg-myP hover:text-txt" onClick={handleOpen} >Dettagli</button>
        </div>

        <img
          className="object-cover overflow-hidden w-full h-52 rounded-t-none rounded-b-lg"
          src={item != undefined && item.img}
          alt="animal"
        />
      </div>
    </>
  );
}
