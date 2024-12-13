import { useEffect, useState } from "react";
import Details from "../detail/Details";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVOURITE,
  addFavourite,
  GET_FAVOURITE,
  getFavourite,
  REMOVE_FAVOURITE,
  removeFavourite,
} from "../../redux/actions";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function MicroCard({ classe = "", item }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user);
  const favs = useSelector((s) => s.user.favourites);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (Array.isArray(favs)) {
      setIsFav(false);
      favs.forEach((f) => {
        if (f?.id === item?.id) setIsFav(true);
      });
    }
  }, [item, favs]);

  const handleAddFavourite = () => {
    console.log("ciao");
    dispatch(addFavourite(item?.id, me.token), ADD_FAVOURITE);
    dispatch(getFavourite(me.token), GET_FAVOURITE);
  };

  const handleRemoveFavourite = () => {
    dispatch(removeFavourite(item?.id, me.token), REMOVE_FAVOURITE);
    dispatch(getFavourite(me.token), GET_FAVOURITE);
  };

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
      <div className={`${classe} bg-myP rounded-lg shadow-lg popup`}>
        <div className="px-4 py-2 h-20">
          <h1 className="text-xl font-bold text-txt">
            {item != undefined ? item.nome : ""}
          </h1>
          <p className="mt-1 text-sm text-txt">
            {item != undefined ? item.descrizione.slice(0, 58) : "Ciao"}...
          </p>
          <button
            className="btn relative -bottom-12 z-[48] btn-success text-txt border shadow-xs hover:shadow-sm hover:bg-bg hover:text-txt"
            onClick={handleOpen}
          >
            Dettagli
          </button>
        </div>
          <div className="relative">
          <img
            className="object-cover overflow-hidden w-full h-60 rounded-t-none rounded-b-lg"
            src={item != undefined && item.img}
            alt="animal"
          />
          {!isFav ? (
            <div
              className="absolute top-2 right-2 bg-transparent border-none cursor-pointer"
              onClick={handleAddFavourite}
            >
              <GoHeart className="w-8 h-10 text-myP" />
            </div>
          ) : (
            <div
              className="absolute top-2 right-2 bg-transparent border-none cursor-pointer"
              onClick={handleRemoveFavourite}
            >
              <GoHeartFill className="w-8 h-10 fill-myP" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
