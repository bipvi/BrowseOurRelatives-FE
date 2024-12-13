import { HiOutlinePencil } from "react-icons/hi2";

export default function Icon({toggleModal}) {
  return (
    <>
      <HiOutlinePencil
        className="h-5 w-5 nav:h-8 nav:w-8 text-txt"
        onClick={() => toggleModal()}
      />
    </>
  );
}
