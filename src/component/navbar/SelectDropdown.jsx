import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Badge,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { baseUrl } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SelectDropdown({ textColor }) {
  const inputRef = useRef(null);
  const navigate = useNavigate()
  const me = useSelector((s) => s.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState({
    nome: [],
    desc: [],
    storia: [],
  });
  const [specie, setSpecie] = useState({ nome: [], desc: [], storia: [] });
  const [genere, setGenere] = useState({ nome: [], desc: [], storia: [] });
  const [famiglia, setFamiglia] = useState({ nome: [], desc: [], storia: [] });
  const [ordine, setOrdine] = useState({ nome: [], desc: [], storia: [] });
  const [classe, setClasse] = useState({ nome: [], desc: [], storia: [] });
  const [phylum, setPhylum] = useState({ nome: [], desc: [], storia: [] });
  const [regno, setRegno] = useState({ nome: [], desc: [], storia: [] });
  const [selQuery, setSelQuery] = useState({
    nome: false,
    descrizione: false,
    storia: false,
  });
  const [selected, setSelected] = useState({
    regno: false,
    phylum: false,
    classe: false,
    ordine: false,
    famiglia: false,
    genere: false,
    specie: false,
  });

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  async function handleSearch() {
    setSpecie({ nome: [], desc: [], storia: [] });
    setGenere({ nome: [], desc: [], storia: [] });
    setFamiglia({ nome: [], desc: [], storia: [] });
    setOrdine({ nome: [], desc: [], storia: [] });
    setClasse({ nome: [], desc: [], storia: [] });
    setPhylum({ nome: [], desc: [], storia: [] });
    setRegno({ nome: [], desc: [], storia: [] });
    for (const [k, v] of Object.entries(selected)) {
      if (v) {
        console.log("entra", k, v);
        // Se il valore è "vero"
        if (selQuery.nome) {
          await queryName(searchQuery, k); // Attende che queryName termini prima di passare alla successiva
        }
        if (selQuery.descrizione) {
          await queryDesc(searchQuery, k); // Attende che queryDesc termini prima di passare alla successiva
        }
        if (selQuery.storia) {
          await queryStoria(searchQuery, k); // Attende che queryStoria termini prima di passare alla successiva
        }
      }
    }
    createQueryArray();
  }

  useEffect(() => {}, [isOpen2, searchQuery, selected, searchResults]);

  const typeQuerySwitch = (q, func, d, v) => {
    switch (q) {
      case "nome":
        func({ ...v, nome: d });
        break;
      case "desc":
        func({ ...v, desc: d });
        break;
      case "storia":
        func({ ...v, storia: d });
        break;
      default:
        alert("scusate so n coglione nn funziona ");
        break;
    }
  };

  const querySwitch = (d, tipo, q) => {
    switch (tipo) {
      case "specie":
        typeQuerySwitch(q, setSpecie, d, specie);
        break;
      case "genere":
        typeQuerySwitch(q, setGenere, d, genere);
        break;
      case "famiglia":
        typeQuerySwitch(q, setFamiglia, d, famiglia);
        break;
      case "ordine":
        typeQuerySwitch(q, setOrdine, d, ordine);
        break;
      case "classe":
        typeQuerySwitch(q, setClasse, d, classe);
        break;
      case "phylum":
        typeQuerySwitch(q, setPhylum, d, phylum);
        break;
      case "regno":
        typeQuerySwitch(q, setRegno, d, regno);
        break;
      default:
        alert("scusate so n coglione nn funziona ");
        break;
    }
  };

  const queryName = async (query, tipo) => {
    fetch(`${baseUrl}/${tipo}/nomeQuery?nomeQuery=${query}`, {
      headers: { Authorization: "Bearer " + me.token },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error(resp.statusText);
      })
      .then((d) => {
        querySwitch(d, tipo, "nome");
      })
      .catch((er) => alert(er));
  };

  const queryDesc = async (query, tipo) => {
    fetch(`${baseUrl}/${tipo}/descQuery?descQuery=${query}`, {
      headers: { Authorization: "Bearer " + me.token },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error(resp.statusText);
      })
      .then((d) => {
        querySwitch(d, tipo, "desc");
      })
      .catch((er) => alert(er));
  };

  const queryStoria = async (query, tipo) => {
    fetch(`${baseUrl}/${tipo}/storiaQuery?storiaQuery=${query}`, {
      headers: { Authorization: "Bearer " + me.token },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error(resp.statusText);
      })
      .then((d) => {
        querySwitch(d, tipo, "storia");
      })
      .catch((er) => alert(er));
  };

  const createQueryArray = () => {
    setSearchResults({ nome: [], desc: [], storia: [] });
    console.log("SEARCHED BEFORE", searchResults);

    const query = {
      nome: [],
      desc: [],
      storia: [],
    };

    const addQ = (tipo, array) => {
      if (!tipo.nome.length <= 0) {
        for (let i = 0; i < tipo.nome.length; i++) {
          array.nome.push(tipo.nome[i]);
        }
      }
      if (!tipo.desc.length <= 0) {
        for (let i = 0; i < tipo.desc.length; i++) {
          array.desc.push(tipo.desc[i]);
        }
      }
      if (!tipo.storia.length <= 0) {
        for (let i = 0; i < tipo.storia.length; i++) {
          array.storia.push(tipo.storia[i]);
        }
      }
    };

    addQ(specie, query);
    addQ(genere, query);
    addQ(famiglia, query);
    addQ(ordine, query);
    addQ(classe, query);
    addQ(phylum, query);
    addQ(regno, query);

    setSearchResults({ ...query });
    console.log(searchResults);
  };

  return (
    <>
      {isOpen ? (
        <div className="relative">
          <div className="absolute inset-y-0 end-2 flex items-center ps-3.5">
            <HiOutlineSearch
              className="text-gray-900 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleSearch();
                setIsOpen(false);
              }}
            />
          </div>
          <input
            type="text"
            onChange={(e) => {
              e.preventDefault();
              if (e.target.value.length > 1) {
                setIsOpen2(true);
              }
              setSearchQuery(e.target.value);
              setSearchResults({ nome: [], desc: [], storia: [] });
              console.log(("SEARCHED BEFORE", searchResults));
              handleSearch();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.keyCode === "13") {
                e.preventDefault();
                handleSearch();
              }
            }}
            value={searchQuery}
            ref={inputRef}
            id="email-address-icon"
            className="bg-transparent border border-gray-300 text-txt text-sm rounded-lg w-full"
            placeholder="es. gatto"
          />
        </div>
      ) : (
        <p onClick={handleDropdownToggle} className="text-txt p-2 rounded">
          <span
            className={`${textColor} flex h-min flex-nowrap justify-evenly hover:text-ac`}
          >
            Esplora {"\u00A0"}
            <HiOutlineSearch />
          </span>
        </p>
      )}

      {isOpen && (
        <>
          <Card
            className={`absolute top-20 right-64 bg-bg border border-txt text-txt grid ${
              isOpen2 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"
            }`}
          >
            <div
              className={`col-span-2 w-full text-txt max-h-[25rem] border-l border-l-txt  lg:border-l lg:border-l-txt overflow-scroll ${
                isOpen2 ? "" : "hidden"
              }`}
            >
              <List className="grid grid-cols-3">
                <div>
                  <List.Item>Nome</List.Item>
                  {searchResults != null &&
                    searchResults.nome.map((n, i) => {
                      return (
                        <List.Item
                        onClick={() => navigate(`/${n.id}`)}
                          key={i}
                          className="flex justify-between items-center hover:border gap-2"
                        >
                          <div className="flex flex-col items-start">
                            <span>{n.nome}</span>
                            <span className="text-2xs text-gray-400">{n.tipo}</span>
                          </div>
                          <img
                            src={n.img}
                            alt={n.img}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </List.Item>
                      );
                    })}
                </div>
                <div>
                  <List.Item>Descrizione</List.Item>
                  {searchResults != null &&
                    searchResults.desc.map((d, i) => {
                      return (
                        <List.Item
                          key={i}
                          onClick={() => navigate(`/${d.id}`)}
                          className="flex justify-between items-center hover:border gap-2"
                        >
                          <div className="flex flex-col  items-start">
                            <span>{d.nome}</span>
                            <span className="text-2xs text-gray-400">{d.tipo}</span>
                          </div>
                          <img
                            src={d.img}
                            alt={d.img}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </List.Item>
                      );
                    })}
                </div>
                <div>
                  <List.Item>Storia</List.Item>
                  {searchResults != null &&
                    searchResults.storia.map((s, i) => {
                      return (
                        <List.Item
                        onClick={() => navigate(`/${s.id}`)}
                          key={i}
                          className="flex justify-between items-center hover:border gap-2"
                        >
                          <div className="flex flex-col  items-start">
                            <span>{s.nome}</span>
                            <span className="text-2xs text-gray-400">{s.tipo}</span>
                          </div>
                          <img
                            src={s.img}
                            alt={s.img}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        </List.Item>
                      );
                    })}
                </div>
              </List>
            </div>
            <List>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Regno</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_regno"
                      checked={selected.regno}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_regno")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, regno: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Phylum</span>
                    <input
                      type="checkbox"
                      id="toogle_phylum"
                      className="toggle"
                      checked={selected.phylum}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_phylum")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, phylum: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Classe</span>
                    <input
                      type="checkbox"
                      id="toogle_classe"
                      className="toggle"
                      checked={selected.classe}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_classe")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, classe: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Ordine</span>
                    <input
                      type="checkbox"
                      id="toogle_ordine"
                      className="toggle"
                      checked={selected.ordine}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_ordine")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, ordine: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Famiglia</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_famiglia"
                      checked={selected.famiglia}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_famiglia")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({
                          ...selected,
                          famiglia: e.target.checked,
                        });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Genere</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_genere"
                      checked={selected.genere}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_genere")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, genere: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Specie</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_specie"
                      checked={selected.specie}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_specie")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelected({ ...selected, specie: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
            </List>
            <List>
              <Badge
                onClick={() => {
                  setIsOpen2(false);
                  setIsOpen(false);
                }}
                content={
                  <AiOutlineClose
                    className="h-4 w-4 text-white"
                    strokeWidth={2.5}
                  />
                }
                className="selectpopup bg-transparent click"
              >
                <ListItem className="p-0">
                  <div className="form-control">
                    <label className="label cursor-pointer grid grid-cols-2 gap-4">
                      <span className="label-text">Nome</span>
                      <input
                        type="checkbox"
                        className="toggle"
                        checked={selQuery.nome}
                        id="toogle_nome"
                        onClick={(e) =>
                          document
                            .getElementById("toogle_nome")
                            .addEventListener("click", function () {
                              this.blur();
                            })
                        }
                        onChange={(e) => {
                          setSelQuery({ ...selQuery, nome: e.target.checked });
                        }}
                      />
                    </label>
                  </div>
                </ListItem>
              </Badge>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Descrizione</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_desc"
                      checked={selQuery.descrizione}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_desc")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelQuery({
                          ...selQuery,
                          descrizione: e.target.checked,
                        });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
              <ListItem className="p-0">
                <div className="form-control">
                  <label className="label cursor-pointer grid grid-cols-2 gap-4">
                    <span className="label-text">Storia</span>
                    <input
                      type="checkbox"
                      className="toggle"
                      id="toogle_storia"
                      checked={selQuery.storia}
                      onClick={(e) =>
                        document
                          .getElementById("toogle_storia")
                          .addEventListener("click", function () {
                            this.blur();
                          })
                      }
                      onChange={(e) => {
                        setSelQuery({ ...selQuery, storia: e.target.checked });
                      }}
                    />
                  </label>
                </div>
              </ListItem>
            </List>
          </Card>
        </>
      )}
    </>
  );
}
