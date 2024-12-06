import { useEffect, useState } from "react";

export default function FormNew({ closeDrawer }) {
  const [isNew, setIsNew] = useState(false);

  const handleIsNew = (boolean) => setIsNew(boolean);

  useEffect(() => {}, []);

  return (
    <>
      <form className="container px-6 w-full">
        <div className="label">
          <span className="label-text">Seleziona tipo</span>
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
            <span className="label-text">Inserisci la storia del tuo item</span>
            <span className="label-text-alt">max 800 caratteri</span>
          </div>
          <textarea
            className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
            placeholder="Inserisci storia ..."
          ></textarea>
        </label>
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
        <div className="flex justify-between items-center">
          <button className="btn btn-ghost" onClick={closeDrawer}>
            Annulla
          </button>
          <button className="btn bg-bg hover:bg-bg hover:border hover:border-myP text-txt">
            Invia
          </button>
        </div>
      </form>
      {isNew && <FormNew />}
    </>
  );
}
