import { Badge, Card, Dropdown } from "flowbite-react";
import ButtonMyS from "../buttons/ButtonMyS";
import ButtonBg from "../buttons/ButtonBg";
import ButtonAc from "../buttons/ButtonAc";
import ButtonMyP from "../buttons/ButtonMyP";
import ButtonOutlineMyS from "../buttons/ButtonOutlineMyS";
import { useEffect, useState } from "react";
import Details from "../detail/Details";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  ADD_FAVOURITE,
  addFavourite,
  GET_FAVOURITE,
  getFavourite,
  REMOVE_FAVOURITE,
  removeFavourite,
} from "../../redux/actions";

export default function HomeCards({ item, change, num }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const closeOpen = () => {
    setOpen(false);
  };
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
    dispatch(addFavourite(item.id, me.token), ADD_FAVOURITE);
    dispatch(getFavourite(me.token), GET_FAVOURITE);
  };

  const handleRemoveFavourite = () => {
    dispatch(removeFavourite(item.id, me.token), REMOVE_FAVOURITE);
    dispatch(getFavourite(me.token), GET_FAVOURITE);
  };

  return (
    <>
      <Details
        item={item}
        handleOpen={handleOpen}
        closeModal={closeOpen}
        open={open}
      />
      <Card className="w-full bg-myP popup shadow-sm border-none rounded-lg">
        <div className="flex justify-end px-4 pt-4">
          {!isFav ? (
            <div
              className="badge bg-transparent border-none"
              onClick={handleAddFavourite}
            >
              <GoHeart className="w-8 h-10 text-bg" />
            </div>
          ) : (
            <div
              className="badge bg-transparent border-none"
              onClick={handleRemoveFavourite}
            >
              <GoHeartFill className="w-8 h-10 fill-bg" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            src={
              item
                ? item.img
                : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            }
            className="mb-3 rounded-full shadow-md shadow-gray-800 object-cover h-32 w-32"
          />
          <h5 className="mb-1 text-xl font-medium text-myS">
            {item && item.nome}
          </h5>
          <span className="text-sm text-gray-600">{item && item.tipo}</span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <ButtonMyS txt="Dettaglio" onclick={handleOpen} />
            <ButtonOutlineMyS
              txt="Vedine un altro"
              onclick={change}
              num={num}
            />
          </div>
        </div>
      </Card>
    </>
  );
}
