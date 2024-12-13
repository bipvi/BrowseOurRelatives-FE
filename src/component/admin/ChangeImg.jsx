import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GET_ME, getMe } from "../../redux/actions";

export default function ChangeImg({ me, close, open, handler }) {
  const [file, setFile] = useState(null);
    const dispatch = useDispatch();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene il comportamento predefinito del form

    if (!file) {
      alert("Seleziona un'immagine da caricare.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(`URL_DEL_TUO_BACKEND/user/${userId}/avatar`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${me?.token}`,
        },
        body: formData,
    });

      if (response.ok) {
        const data = await response.json();
        console.log("Immagine caricata con successo:", data);
        dispatch(getMe(me?.token), GET_ME)
        close(); 
      } else {
        console.error("Errore nel caricamento dell'immagine:", response.statusText);
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <>
      <Dialog className="w-2/3 p-5 m-auto bg-myP border-2 border-bg rounded-xl" size="sm" open={open} handler={handler}>
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4">
            Cambia il tuo avatar
          </Typography>
        </DialogHeader>
        <DialogBody>
          <form onSubmit={handleSubmit} className="flex items-center justify-between">
            <input type="file" name="image" onChange={handleFileChange} className="text-gray-800"/>  
            <button type="submit" className="btn bg-bg">Invia</button> 
          </form>
        </DialogBody>
        <DialogFooter>
            <button className="btn glass text-gray-800" onClick={handler}>Chiudi</button>
        </DialogFooter>
      </Dialog>
    </>
  );
}