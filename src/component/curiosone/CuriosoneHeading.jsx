import ButtonMyP from "../buttons/ButtonMyP";
import { ExCard } from "../cards/ExCard";
import MiniCard from "../cards/MiniCard";

export default function CuriosoneHeading() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-evenly my-7 mx-auto px-7 md:px-4 lg:px-16 w-screen">
        <div className="min-w-0 flex-1 flex-nowrap">
          <div className="flex items-center justify-between sm:me-6 lg:me-0">
            <h2 className="text-2xl/7 font-bold text-start text-txt sm:truncate sm:text-3xl sm:tracking-tight">
              Regno
            </h2>
            <ButtonMyP txt={"mostra altro"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 nav:grid-cols-5 mx-auto py-3 px-7 md:px-4 lg:px-16 w-screen gap-7">
        <div className="nav:col-span-3">
          <ExCard />
        </div>
        <div className="nav:col-span-2">
          <div className="flex flex-col items-center gap-4">
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </div>
        </div>
      </div>
    </>
  );
}
