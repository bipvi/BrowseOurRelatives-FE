import { useEffect, useState } from "react";
import HomeCards from "../cards/HomeCards";

export default function Sections({ item1, item2 ,change}) {
  const [item11, setItem11] = useState();
  const [item22, setItem22] = useState();

  useEffect(() => {
    setItem11(item1);
    setItem22(item2);
  }, [item1, item2, change]);

  return (
    <>
      <div className="container mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-10 py-8 px-6 2xl:px-14">
          <div>
            <HomeCards item={item11} change={change} num={'item1'} key={1}/>
          </div>
          <div>
            <HomeCards item={item22} change={change} num={'item2'} key={2}/>
          </div>
        </div>
      </div>
    </>
  );
}
