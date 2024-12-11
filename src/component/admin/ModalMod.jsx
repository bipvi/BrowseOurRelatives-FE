import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import SelectDropdown from "../navbar/SelectDropdown";
import FormNew from "./FormNew";
import { useSelector } from "react-redux";
import { baseUrl } from "../../redux/actions";
import FileImg from "./FileImg";

export default function ModalMod({ open, handleOpen, closeModal }) {
  const me = useSelector((s) => s.user);
  const [fileImg, setFileImg] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [modItem, setModItem] = useState({
    nome: "",
    desc: "",
    storia: "",
    img: "",
    nome_scientifico: "",
    numEsemplari: 1000,
  });
  const [tipo, setTipo] = useState("");
  const [relazioni, setRelazioni] = useState([]);
  const [relazione, setRelazione] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const relType = relazione.tipo;
    const payload = {
      nome: modItem.nome,
      descrizione: modItem.desc,
      storia: modItem.storia,
      img: modItem.img,
      [`${relType.toLowerCase()}_id`]: relazione.id,
      nome_scientifico: modItem.nome_scientifico,
      esemplari_rimasti: modItem.numEsemplari,
    };
    fetch(`${baseUrl}/${tipo.toLowerCase()}/${item.id}`, {
      headers: {
        Authorization: `Bearer ${me.token}`,
        "Content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(payload),
    })
      .then((r) => {
        if (r.ok) console.log(r);
        else throw new Error(r.statusText);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    if (tipo != "") handleRelationship();
  }, [tipo]);

  const changeItem = (e) => {
    const selectedId = e.target.value.split(" ")[0]; // Estrai l'UUID
    console.log("Selected ID:", selectedId);
    console.log("Items:", items);
    const selectedItem = items.find((i) => i.id === selectedId); // Cerca l'item con l'UUID
    if (selectedItem) {
      console.log("Selected Item:", selectedItem);
      setItem(selectedItem); // Aggiorna lo stato
      setItemtoMod(selectedItem); // Passa direttamente l'oggetto selezionato
    } else {
      console.error("Elemento non trovato per ID:", selectedId);
    }
  };

  useEffect(() => {}, [item, modItem]);

  const setItemtoMod = (it) => {
    let relType = "";
    switch (tipo.toLowerCase()) {
      case "phylum":
        relType = "regno";
        break;
      case "classe":
        relType = "phylum";
        break;
      case "ordine":
        relType = "classe";
        break;
      case "famiglia":
        relType = "ordine";
        break;
      case "genere":
        relType = "famiglia";
        break;
      case "specie":
        relType = "genere";
        break;
    }
    if (it.nome) {
      if (it.tipo === "Specie") {
        setModItem({ ...modItem, nome_scientifico: it.nome_scientifico });
      }
      setModItem({
        nome: it.nome,
        desc: it.descrizione,
        storia: it.storia,
        img: it.img,
      });
      setRelazione(it[`${relType}_id`]);
    }
  };

  useEffect(() => {
    if (open) document.getElementById("root").classList.add("blur");
    if (!open) document.getElementById("root").classList.remove("blur");
  }, [open]);

  const handleRelazione = (value) => {
    const id = value.split(" ")[0];
    console.log("id", id);
    const sel = relazioni.find((r) => r.id === id);
    console.log("sel", sel);
    setRelazione({ ...sel });
    console.log("relazione", relazione);
  };

  async function handleRelationship() {
    let rel = "";
    switch (tipo.toLowerCase()) {
      case "phylum":
        rel = "regno";
        break;
      case "classe":
        rel = "phylum";
        break;
      case "ordine":
        rel = "classe";
        break;
      case "famiglia":
        rel = "ordine";
        break;
      case "genere":
        rel = "famiglia";
        break;
      case "specie":
        rel = "genere";
        break;
    }

    await fetch(`${baseUrl}/${rel}`, {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error(r.statusText);
      })
      .then((d) => {
        setRelazioni(d);
      })
      .catch((er) => console.error(er));

    await fetch(`${baseUrl}/${tipo.toLowerCase()}`, {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error(r.statusText);
      })
      .then((d) => {
        setItems(d);
        setItem(items[0]);
      })
      .catch((er) => console.error(er));
  }

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
          <form
            className="grid grid-cols-2 gap-4 px-6 w-full"
            onSubmit={handleSubmit}
          >
            <label className="form-control w-full mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">Seleziona tipo</span>
              </div>
              <select
                onChange={(e) => setTipo(e.target.value)}
                value={tipo}
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
            <label className="form-control w-full mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">Item</span>
              </div>
              <select
                onChange={(e) => {
                  changeItem(e);
                }}
                className="select-md border-gray-400 rounded-lg w-full bg-transparent mb-4"
                id="selOption"
              >
                <option>
                  {items.length > 0
                    ? `Selaziona un ${items[0].tipo}`
                    : "Selaziona un oggetto"}
                </option>
                {items.length > 0 ? (
                  <>
                    {items.map((r) => {
                      return (
                        <option
                          key={r.id}
                          value={r.id}
                          onClick={(e) => changeItem(e)}
                        >
                          {r.id} - {r.nome}
                        </option>
                      );
                    })}
                  </>
                ) : (
                  <option>Inserisci il tipo prima</option>
                )}
              </select>
            </label>

            <label className="form-control mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">
                  Inserisci la descrizione del tuo item
                </span>
                <span className="label-text-alt">max 800 caratteri</span>
              </div>
              <textarea
                maxLength={800}
                value={modItem.desc}
                onChange={(e) =>
                  setModItem({ ...modItem, desc: e.target.value })
                }
                className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
                placeholder="Inserisci descrizione ..."
              ></textarea>
            </label>
            <label className="form-control mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">
                  Inserisci la storia del tuo item
                </span>
                <span className="label-text-alt">max 800 caratteri</span>
              </div>
              <textarea
                maxLength={800}
                value={modItem.storia}
                onChange={(e) =>
                  setModItem({ ...modItem, storia: e.target.value })
                }
                className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
                placeholder="Inserisci storia ..."
              ></textarea>
            </label>
            <label className="form-control w-full mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">Nome Item</span>
              </div>
              <input
                type="text"
                value={modItem.nome}
                onChange={(e) =>
                  setModItem({ ...modItem, nome: e.target.value })
                }
                placeholder="Scrivi qui il nome dell'item"
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
            <label className="form-control w-full mb-4 col-span-2 md:col-span-1">
              <div className="label">
                <span className="label-text">Immagine Item</span>
              </div>
              <input
                value={modItem.img}
                onChange={(e) =>
                  setModItem({ ...modItem, img: e.target.value })
                }
                type="text"
                placeholder="Inserisci link immagine"
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
            <label className=" col-span-2">
              {tipo !== "Regno" && (
                <>
                  <div className="label">
                    <span className="label-text">Seleziona relazione</span>
                  </div>
                  <select
                    onChange={(e) => handleRelazione(e.target.value)}
                    className="select-md border-gray-400 rounded-lg w-full bg-transparent mb-6"
                    id="selOption2"
                  >
                    <option value="">Seleziona un'opzione</option>
                    {relazioni.length > 0 ? (
                      <>
                        {relazioni.map((r) => {
                          return (
                            <option key={r.id} value={r.id}>
                              {r.id} - {r.nome}
                            </option>
                          );
                        })}
                      </>
                    ) : (
                      <option>Inserisci il tipo prima</option>
                    )}
                  </select>
                </>
              )}
            </label>
            <div className="col-span-2">
              <div className="flex justify-between items-center w-full">
                <button className="btn btn-ghost" onClick={closeModal}>
                  Annulla
                </button>
                <button className="btn bg-bg hover:bg-bg hover:border hover:border-myP text-txt">
                  Invia
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <span className="label-text">
                Vuoi cambiare immagine tramite file?
              </span>
              <input
                type="checkbox"
                id="myInput"
                className="toggle toggle-succes myInput"
                value={fileImg}
                onChange={(e) => {
                  setFileImg(false);
                  document
                    .getElementById("myInput")
                    .addEventListener("click", function () {
                      this.blur();
                    });
                }}
              />
            </div>
            {fileImg && (
            <FileImg it={item} />
            )}
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
