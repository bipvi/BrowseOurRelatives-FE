import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import SelectDropdown from "../navbar/SelectDropdown";
import FormNew from "./FormNew,";

export default function ModalMod({ open, handleOpen, closeModal }) {
  const [isNew, setIsNew] = useState(false);

  const handleIsNew = (boolean) => setIsNew(boolean);

  useEffect(() => {
    if (open) document.getElementById("root").classList.add("blur");
    if (!open) document.getElementById("root").classList.remove("blur");
  }, [open]);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-custom-gradient h-3/4 w-3/4 m-auto border-2 border-ac p-3 overflow-y-scroll"
      >
        <DialogHeader>Browse our relatives</DialogHeader>
        <DialogBody>
          <form className="grid grid-cols-2 gap-4 px-6 w-full">
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Nome Item</span>
              </div>
              <select
                defaultValue={"Seleziona tipo"}
                className="select-md border-gray-400 rounded-lg w-full bg-transparent mb-4"
                id="selOption"
              >
                <option disabled>Seleziona tipo</option>
                <option>Regno</option>
                <option>Phylum</option>
                <option>Classe</option>
                <option>Ordine</option>
                <option>Famiglia</option>
                <option>Genere</option>
                <option>Specie</option>
              </select>
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Nome Item</span>
              </div>
              <input
                type="text"
                placeholder="Scrivi qui il nome dell'item"
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
            <label className="form-control mb-4">
              <div className="label">
                <span className="label-text">
                  Inserisci la descrizione del tuo item
                </span>
                <span className="label-text-alt">max 800 caratteri</span>
              </div>
              <textarea
                className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
                placeholder="Inserisci descrizione ..."
              ></textarea>
            </label>
            <label className="form-control mb-4">
              <div className="label">
                <span className="label-text">
                  Inserisci la storia del tuo item
                </span>
                <span className="label-text-alt">max 800 caratteri</span>
              </div>
              <textarea
                className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
                placeholder="Inserisci storia ..."
              ></textarea>
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Immagine Item</span>
              </div>
              <input
                type="text"
                placeholder="Inserisci link immagine"
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
            <label>
              <div className="label">
                <span className="label-text">Seleziona relazione</span>
              </div>
              <select
                defaultValue={"Seleziona tipo"}
                className="select-md border-gray-400 rounded-lg w-full bg-transparent mb-6"
                id="selOption2"
              >
                <option disabled>Seleziona relazione</option>
                <option>Regno</option>
                <option>Phylum</option>
                <option>Classe</option>
                <option>Ordine</option>
                <option>Famiglia</option>
                <option>Genere</option>
                <option>Specie</option>
              </select>
            </label><div className="col-span-2">
            <div className="flex justify-between mb-8">
              <span className="label-text">Relazione item nuova?</span>
              <input
                type="checkbox"
                id="myInput"
                className="toggle toggle-succes myInput"
                value={isNew}
                onChange={(e) => {
                  handleIsNew(e.target.checked);
                  document
                    .getElementById("myInput")
                    .addEventListener("click", function () {
                      this.blur();
                    });
                }}
              />
            </div>
            
            <div className="flex justify-between items-center w-full">
              <button className="btn btn-ghost" onClick={closeModal}>
                Annulla
              </button>
              <button className="btn bg-bg hover:bg-bg hover:border hover:border-myP text-txt">
                Invia
              </button>
            </div></div>
          </form>
          {isNew && <FormNew closeDrawer={closeModal}/>}
        </DialogBody>
      </Dialog>
    </>
  );
}
