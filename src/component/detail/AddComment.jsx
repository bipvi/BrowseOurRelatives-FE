import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl, GET_ME, getMe } from "../../redux/actions";
import { Alert } from "@material-tailwind/react";

export default function AddComment({ itemId }) {
  const [cont, setCont] = useState("");
  const me = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [isErr, setIsErr] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseUrl}/commenti`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${me.token}`,
      },
      body: JSON.stringify({
        contenuto: cont,
        user_id: me.id,
        item_id: itemId,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("prenotazione salvata");
          setLoad(true);
          setIsErr(false);
          setCont("");
        } else {
          setIsErr(true);
        }
      })
      .catch((err) => {
        setIsErr(true);
      });
  };

  useEffect(() => {
    dispatch(getMe, GET_ME);
  }, [itemId]);

  return (
    <>
      {isErr && <Alert color="red" className="absolute">Errore</Alert>}
      {load && <Alert color="green" className="absolute ">Commento aggiunto</Alert>}
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.keyCode === "13") {
            handleSubmit(e);
          }
        }}
        onChange={(e) => setCont(e.target.value)}
        value={cont}
        type="text"
        placeholder="Scrivi il tuo commento"
        className="input input-bordered border-txt w-full bg-transparent placeholder:text-txt text-txt"
      />
    </>
  );
}
