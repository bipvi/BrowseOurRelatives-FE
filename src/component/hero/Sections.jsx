import HomeCards from "../cards/HomeCards";

export default function Sections() {
  return (
    <>
    <div className="container mx-auto pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 py-8 px-6 2xl:px-14">
        <div><HomeCards /></div>
        <div><HomeCards /></div>
      </div></div>
    </>
  );
}
