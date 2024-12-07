import { Card, Dropdown } from "flowbite-react";
import ButtonMyS from "../buttons/ButtonMyS";
import ButtonBg from "../buttons/ButtonBg";
import ButtonAc from "../buttons/ButtonAc";
import ButtonMyP from "../buttons/ButtonMyP";
import ButtonOutlineMyS from "../buttons/ButtonOutlineMyS";
import { useEffect } from "react";

export default function HomeCards({item, change, num}) {

  useEffect(()=>{},[item])

  return (
    <>
      <Card className="w-full bg-myP popup shadow-sm border-none rounded-lg">
        <div className="flex justify-end px-4 pt-4">
          <Dropdown className="bg-bg border-myP" inline label="">
            <Dropdown.Item className="hover:bg-myP">
              <a
                className="block px-4 py-2 text-sm text-txt"
              >
                Edit
              </a>
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-myP">
              <a
                className="block px-4 py-2 text-sm text-txt"
              >
                Export Data
              </a>
            </Dropdown.Item>
            <Dropdown.Item className="hover:bg-myP">
              <a
                className="block px-4 py-2 text-sm text-myP"
              >
                Delete
              </a>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Bonnie image"
            src={item ? item.img : "https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
            className="mb-3 rounded-full shadow-md shadow-gray-800 h-32 w-32"
          />
          <h5 className="mb-1 text-xl font-medium text-myS">
           {item && item.nome}
          </h5>
          <span className="text-sm text-gray-600">
            {item && item.tipo}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <ButtonMyS txt='Vai al dettaglio' />
            <ButtonOutlineMyS txt="Vedine un altro" onclick={change} num={num}/>
          </div>
        </div>
      </Card>
    </>
  );
}
