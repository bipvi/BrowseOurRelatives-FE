import { useEffect, useState } from "react";
import { baseUrl } from "../../redux/actions";
import { useSelector } from "react-redux";
import { Alert } from "@material-tailwind/react";

export default function FormNew({ closeDrawer }) {
  const me = useSelector((s) => s.user);
  const [isNew, setIsNew] = useState(false);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [storia, setStoria] = useState("");
  const [immagine, setImmagine] = useState("");
  const [relazioni, setRelazioni] = useState([]);
  const [relazione, setRelazione] = useState({});
  const [nome_scientifico, setNomeScientifico] = useState("");
  const [numEsemplari, setNumEsemplari] = useState(1000);
  const [isLoaded, setIsloaded] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleIsNew = (boolean) => setIsNew(boolean);

  const handleRelazione = (nome) => {
    setRelazione(relazioni.filter((r) => r.nome !== nome)[0]);
    console.log("relazione", relazione);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const relType = relazione.tipo;
    const payload = {
      nome: nome,
      descrizione: descrizione,
      storia: storia,
      img: immagine,
      [`${relType.toLowerCase()}_id`]: relazione.id,
      nome_scientifico: nome_scientifico,
      esemplari_rimasti: numEsemplari,
    };
    fetch(`${baseUrl}/${tipo.toLowerCase()}`, {
      headers: {
        Authorization: `Bearer ${me.token}`,
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((r) => {
        if (r.ok) {
          setIsWrong(false);
          setIsloaded(true);
        } else throw new Error(r.statusText);
      })
      .catch((e) => setIsWrong(true));
  };

  useEffect(() => {
    setIsWrong(false)
    setIsloaded(false)
  },[])

  const handleRelationship = () => {
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

    fetch(`${baseUrl}/${rel}`, {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((r) => {
        if (r.ok) return r.json();
        else throw new Error(r.statusText);
      })
      .then((d) => {
        setRelazioni(d);
        setRelazione(relazioni[0]);
      })
      .catch((er) => console.error(er));
  };

  useEffect(() => {
    if (tipo != "") handleRelationship();
  }, [tipo]);

  return (
    <>
      <form
        className="container px-6 w-full my-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="label">
          <span className="label-text">Seleziona tipo</span>
        </div>
        <select
          onChange={(e) => setTipo(e.target.value)}
          value={tipo}
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
            <span className="label-text">
              {tipo != "" ? `Nome ${tipo}` : "Nome Item"}
            </span>
          </div>
          <input
            type="text"
            maxLength={255}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={
              tipo != ""
                ? `Scrivi qui il nome del ${tipo.toLowerCase()}`
                : "Scrivi qui il nome dell'item"
            }
            className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
          />
        </label>
        {tipo.toLowerCase() === "specie" && (
          <>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">
                  {tipo != ""
                    ? `Numero esemplari ${tipo}`
                    : "Numero esemplari specie"}
                </span>
              </div>
              <input
                type="number"
                maxLength={255}
                value={numEsemplari}
                onChange={(e) => setNumEsemplari(e.target.value)}
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">
                  {tipo != ""
                    ? `Nome scientifico ${tipo}`
                    : "Nome scientifico Item"}
                </span>
              </div>
              <input
                type="text"
                maxLength={255}
                value={nome_scientifico}
                onChange={(e) => setNomeScientifico(e.target.value)}
                placeholder={
                  tipo != ""
                    ? `Scrivi qui il nome del ${tipo.toLowerCase()}`
                    : "Scrivi qui il nome scientifico dell'item"
                }
                className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
              />
            </label>
          </>
        )}
        <label className="form-control w-full mb-4">
          <div className="label">
            <span className="label-text">
              {tipo != "" ? `Immagine ${tipo.toLowerCase()}` : "Immagine Item"}
            </span>
          </div>
          <input
            type="text"
            value={immagine}
            onChange={(e) => setImmagine(e.target.value)}
            placeholder="Inserisci link immagine"
            className="input input-md bg-transparent placeholder:text-gray-400 border border-gray-400"
          />
        </label>
        <label className="form-control mb-4">
          <div className="label">
            <span className="label-text">
              {tipo != ""
                ? `Inserisci la descrizione del tuo ${tipo.toLowerCase()}`
                : "Inserisci la descrizione del tuo item"}
            </span>
            <span className="label-text-alt">max 800 caratteri</span>
          </div>
          <textarea
            maxLength={800}
            value={descrizione}
            onChange={(e) => setDescrizione(e.target.value)}
            className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
            placeholder="Inserisci descrizione ..."
          ></textarea>
        </label>
        <label className="form-control mb-4">
          <div className="label">
            <span className="label-text">
              {tipo != ""
                ? `Inserisci la storia del tuo ${tipo.toLowerCase()}`
                : "Inserisci la storia del tuo item"}
            </span>
            <span className="label-text-alt">max 800 caratteri</span>
          </div>
          <textarea
            maxLength={800}
            value={storia}
            onChange={(e) => setStoria(e.target.value)}
            className="textarea textarea-md h-28 bg-transparent placeholder:text-gray-400 border border-gray-400"
            placeholder="Inserisci storia ..."
          ></textarea>
        </label>
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
                      <option
                        key={r.id}
                        value={r.id}
                        onClick={(e) => setRelazione(e)}
                      >
                        {r.nome}
                      </option>
                    );
                  })}
                </>
              ) : (
                <option>Inserisci il tipo prima</option>
              )}
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
          </>
        )}
        <div className="flex justify-between items-center">
          <button type="submit" className="btn btn-ghost" onClick={closeDrawer}>
            Annulla
          </button>
          <button className="btn bg-bg hover:bg-bg hover:border hover:border-myP text-txt">
            Invia
          </button>
        </div>
      </form>
      {isLoaded && <Alert color="green">Elemento aggiunto con successo</Alert>}
      {isWrong && (
        <Alert color="red">Errore durante l'aggiunta dell'elemento</Alert>
      )}
      {isNew && <FormNew />}
    </>
  );
}
