import {
  Avatar,
  Button,
  Dialog,
  DialogFooter,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import ModalMod from "../admin/ModalMod";
import { useSelector } from "react-redux";

export default function Details({ open, handleOpen, closeModal, item }) {
  const [openSubDialog, setOpenSubDialog] = useState(false);
  const [nextItem, setNextItem] = useState(null);
  const openSubDialogHandler = () => setOpenSubDialog(!openSubDialog);
  const closeSubDialogHandler = () => setOpenSubDialog(false);
  const [openAdmin, setOpenAdmin] = useState(false);
  const handleOpenAdmin = () => setOpenAdmin(!openAdmin);
  const closeOpenAdmin = () => setOpenAdmin(false);
  const me = useSelector(s => s.user)

  const renderHierarchyList = (levels) => {
    if (!levels || levels.length === 0) return null;

    return (
      <List>
        {levels.map((level, index) => (
          <ListItem
            key={index}
            className="flex justify-start items-center gap-3 hover:border"
            onClick={() => {
              setNextItem(level);
              openSubDialogHandler();
            }}
          >
            <ListItemPrefix>
              <Avatar
                className="rounded-full"
                alt={level?.nome || "Immagine"}
                src={level?.img || ""}
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" className="text-txt inline">
                {level?.nome || "Sconosciuto"}
                <Typography className="font-normal text-xs text-gray-400 inline">
                  {" "}
                  - {level?.tipo || "N/A"}
                </Typography>
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    );
  };

  const handleTypeItem = () => {
    if (!item) return null;

    const hierarchy = [];
    switch (item.tipo?.toLowerCase()) {
      case "specie":
        hierarchy.push(
          item.genere,
          item.genere?.famiglia,
          item.genere?.famiglia?.ordine,
          item.genere?.famiglia?.ordine?.classe,
          item.genere?.famiglia?.ordine?.classe?.phylum,
          item.genere?.famiglia?.ordine?.classe?.phylum?.regno
        );
        break;

      case "genere":
        hierarchy.push(
          item.famiglia,
          item.famiglia?.ordine,
          item.famiglia?.ordine?.classe,
          item.famiglia?.ordine?.classe?.phylum,
          item.famiglia?.ordine?.classe?.phylum?.regno
        );
        break;

      case "famiglia":
        hierarchy.push(
          item.ordine,
          item.ordine?.classe,
          item.ordine?.classe?.phylum,
          item.ordine?.classe?.phylum?.regno
        );
        break;

      case "ordine":
        hierarchy.push(
          item.classe,
          item.classe?.phylum,
          item.classe?.phylum?.regno
        );
        break;

      case "classe":
        hierarchy.push(item.phylum, item.phylum?.regno);
        break;

      case "phylum":
        hierarchy.push(item.regno);
        break;

      default:
        return null;
    }

    return renderHierarchyList(hierarchy);
  };

  return (
    <>
      {/* Sub Dialog */}
      {nextItem && (
        <Details
          open={openSubDialog}
          handleOpen={openSubDialogHandler}
          closeModal={closeSubDialogHandler}
          item={nextItem}
        />
      )}

      {/* Main Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-custom-gradient w-screen h-screen p-8 m-auto border-ac overflow-y-scroll"
      >
        <div className="mx-auto p-6 flex flex-col-reverse md:flex-row gap-6">
          {/* Immagine principale */}
          <div className="flex-shrink-0">
            <img
              src={item?.img}
              alt={item?.nome || "Elemento"}
              className="w-full md:w-96 h-auto object-cover rounded-lg shadow-md"
            />
            {handleTypeItem()}
          </div>

          {/* Testo */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-txt mb-4">{item?.nome}</h1>
            <div className="space-y-6">
              {/* Descrizione */}
              <section>
                <h2 className="text-xl font-semibold text-txt pb-1 mb-2">
                  Descrizione
                </h2>
                <p className="text-txt leading-relaxed">{item?.descrizione}</p>
              </section>

              {/* Storia */}
              <section>
                <h2 className="text-xl font-semibold text-txt pb-1 mb-2">
                  Storia
                </h2>
                <p className="text-txt leading-relaxed">{item?.storia}</p>
              </section>
            </div>
          </div>
        </div>
        <DialogFooter>
          <div className="flex justify-end gap-8 pt-3">
            <Button
              onClick={handleOpen}
              className="btn bg-transparent glass shadow-xs hover:shadow-sm hover:border-none"
            >
              <span>Annulla</span>
            </Button>
            {me?.role != "USER" && (
              <Button
                onClick={() => {
                  handleOpenAdmin()
                  closeModal()
                }}
                className="mr-1 bg-myP shadow-xs hover:shadow-sm hover:border-none"
              >
                <span>Modifica</span>
              </Button>
            )}
          </div>
        </DialogFooter>
      </Dialog>
      <ModalMod
        open={openAdmin}
        handleOpen={handleOpenAdmin}
        closeModal={closeOpenAdmin}
        itemPassed={item}
      />
    </>
  );
}
