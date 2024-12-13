import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl, GET_ME, getMe } from "../../redux/actions";

export default function AddComment({ itemId }) {
  const [cont, setCont] = useState("");
  const me = useSelector((s) => s.user);
  const dispatch = useDispatch();

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
          alert("grazie!");
          setCont("");
        } else {
          alert("riprova più tardi");
          throw new Error("errore!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    dispatch(getMe, GET_ME);
  }, [itemId]);

  return (
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
      className="input input-bordered w-full bg-transparent placeholder:text-txt text-txt"
    />
  );
}
