import HomeCards from "../cards/HomeCards";

export default function Sections() {
  return (
    <>
    <div className="container mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
        <div><HomeCards /></div>
        <div><HomeCards /></div>
      </div></div>
    </>
  );
}
