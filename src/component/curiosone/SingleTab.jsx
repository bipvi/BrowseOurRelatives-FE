import { Breadcrumb, Flowbite } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import CuriosoneHeading from "./CuriosoneHeading";

export default function SingleTab({ tipo }) {
    const customTheme = {
            item: {
              base: "flex items-center text-sm font-medium text-red hover:text-blue-600",
            }
      }


  const renderContent = () => {
    switch (tipo) {
      case "Regno":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome} className="text-txt">Regno</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Phylum":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Classe":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
            <Breadcrumb.Item>Classe</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Ordine":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
            <Breadcrumb.Item>Classe</Breadcrumb.Item>
            <Breadcrumb.Item>Ordine</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Famiglia":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
            <Breadcrumb.Item>Classe</Breadcrumb.Item>
            <Breadcrumb.Item>Ordine</Breadcrumb.Item>
            <Breadcrumb.Item>Famiglia</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Genere":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
            <Breadcrumb.Item>Classe</Breadcrumb.Item>
            <Breadcrumb.Item>Ordine</Breadcrumb.Item>
            <Breadcrumb.Item>Famiglia</Breadcrumb.Item>
            <Breadcrumb.Item>Genere</Breadcrumb.Item>
          </Breadcrumb>
        );
      case "Specie":
        return (
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
            <Breadcrumb.Item>Phylum</Breadcrumb.Item>
            <Breadcrumb.Item>Classe</Breadcrumb.Item>
            <Breadcrumb.Item>Ordine</Breadcrumb.Item>
            <Breadcrumb.Item>Famiglia</Breadcrumb.Item>
            <Breadcrumb.Item>Genere</Breadcrumb.Item>
            <Breadcrumb.Item>Specie</Breadcrumb.Item>
          </Breadcrumb>
        );
      default:
        return (
            <Flowbite theme={{ theme: customTheme }}>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>Regno</Breadcrumb.Item>
          </Breadcrumb>
          </Flowbite>
        );
    }
  };

  return (
    <>
      <div className="hidden sm:block">{renderContent()}</div>
      
    </>
  );
}
