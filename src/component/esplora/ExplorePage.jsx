import { useEffect, useState } from "react";
import MyCarousel from "./MyCarousel";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../redux/actions";
import { useSelector } from "react-redux";

export default function ExplorePage() {
  const params = useParams();
  const me = useSelector((s) => s.user);
  const [item, setItem] = useState({});
  const [activeRegno, setActiveRegno] = useState({});
  const [activePhylum, setActivePhylum] = useState({});
  const changePhylum = (phylum) => {
    setActivePhylum(phylum);
  };
  const [activeClasse, setActiveClasse] = useState({});
  const changeClasse = (classe) => {
    setActiveClasse(classe);
  };
  const [activeOrdine, setActiveOrdine] = useState({});
  const changeOrdine = (ordine) => {
    setActiveOrdine(ordine);
  };
  const [activeFamiglia, setActiveFamiglia] = useState({});
  const changeFamiglia = (famiglia) => {
    setActiveFamiglia(famiglia);
  };
  const [activeGenere, setActiveGenere] = useState({});
  const changeGenere = (genere) => {
    setActiveGenere(genere);
  };
  const [activeSpecie, setActiveSpecie] = useState({});
  const changeSpecie = (specie) => {
    setActiveSpecie(specie);
  };

  const elaborateExplore = () => {
    if (item && item?.tipo) {
      switch (item.tipo) {
        case "Phylum":
          setActiveRegno(item?.regno);
          setActivePhylum(item);
          break;
        case "Classe":
          setActiveRegno(item?.phylum?.regno);
          setActivePhylum(item?.phylum);
          setActiveClasse(item);
          break;
        case "Ordine":
          setActiveRegno(item?.classe?.phylum?.regno);
          setActivePhylum(item?.classe?.phylum);
          setActiveClasse(item?.classe);
          setActiveOrdine(item);
          break;
        case "Famiglia":
          setActiveRegno(item?.ordine?.classe?.phylum?.regno);
          setActivePhylum(item.ordine?.classe?.phylum);
          setActiveClasse(item?.ordine?.classe);
          setActiveOrdine(item?.ordine);
          setActiveFamiglia(item);
          break;
        case "Genere":
          setActiveRegno(item?.famiglia?.ordine?.classe?.phylum?.regno);
          setActivePhylum(item?.famiglia?.ordine?.classe?.phylum);
          setActiveClasse(item?.famiglia?.ordine?.classe);
          setActiveOrdine(item?.famiglia?.ordine);
          setActiveFamiglia(item?.famiglia);
          setActiveGenere(item);
          break;
        case "Specie":
          setActiveRegno(item?.genere?.famiglia?.ordine?.classe?.phylum?.regno);
          setActivePhylum(item?.genere?.famiglia?.ordine?.classe?.phylum);
          setActiveClasse(item?.genere?.famiglia?.ordine?.classe);
          setActiveOrdine(item?.genere?.famiglia?.ordine);
          setActiveFamiglia(item?.genere?.famiglia);
          setActiveGenere(item?.genere);
          setActiveSpecie(item);
          break;
        default:
          console.error("Tipo non riconosciuto:", item.tipo);
      }
    }
  };
  
  useEffect(() => {
    if (item && item.tipo) {
      elaborateExplore();
    }
  }, [item]);
  

  const itemFetch = () => {
    fetch(`${baseUrl}/item/${params.itemId}`, {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((resp) => {
        if (!resp.ok) throw new Error(`Errore nella prima fetch: ${resp.status}`);
        return resp.json();
      })
      .then((data) => {
        if (!data.tipo || !data.id) throw new Error("Dati incompleti dalla prima fetch");
        return fetch(`${baseUrl}/${data.tipo.toLowerCase()}/${data.id}`, {
          headers: { Authorization: `Bearer ${me.token}` },
        });
      })
      .then((resp) => {
        if (!resp.ok) throw new Error(`Errore nella seconda fetch: ${resp.status}`);
        return resp.json();
      })
      .then((d) => {
        console.log(d);
        setItem(d);
      })
      .catch((e) => alert(`Errore: ${e.message}`));
  };
  

  useEffect(() => {
    itemFetch();
    console.log("params", item);
  }, [params]);

  return (
    <>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Phylum</p>
        <MyCarousel
          active={activePhylum}
          setActive={changePhylum}
          prevItem={activeRegno}
          key={activePhylum.id}
        />
      </div>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Classe</p>
        <MyCarousel
          active={activeClasse}
          setActive={changeClasse}
          prevItem={activePhylum}
          key={activeClasse.id}
        />
      </div>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Ordine</p>
        <MyCarousel
          active={activeOrdine}
          setActive={changeOrdine}
          prevItem={activeClasse}
          key={activeOrdine.id}
        />
      </div>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Famiglia</p>
        <MyCarousel
          active={activeFamiglia}
          setActive={changeFamiglia}
          prevItem={activeOrdine}
          key={activeFamiglia.id}
        />
      </div>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Genere</p>
        <MyCarousel
          active={activeGenere}
          setActive={changeGenere}
          prevItem={activeFamiglia}
          key={activeGenere.id}
        />
      </div>
      <div className="container w-screen mt-5">
        <p className="text-3xl text-start px-6 font-semibold">Specie</p>
        <MyCarousel
          active={activeSpecie}
          setActive={changeSpecie}
          prevItem={activeGenere}
          key={activeSpecie.id}
        />
      </div>
    </>
  );
}
