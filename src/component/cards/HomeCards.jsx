import { Card, Dropdown } from "flowbite-react";
import img from '../../../public/favicon.svg'
import ButtonMyS from "../buttons/ButtonMyS";
import ButtonBg from "../buttons/ButtonBg";

export default function HomeCards() {
  return (
    <>
      <Card className="w-full bg-myP border-bg shadow-lg shadow-gray-800">
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
            height="96"
            src={img}
            width="96"
            className="mb-3 rounded-full shadow-md shadow-gray-800"
          />
          <h5 className="mb-1 text-xl font-medium text-myS">
           Nome Item
          </h5>
          <span className="text-sm text-gray-600">
            tipo Item
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <ButtonMyS txt='Vai al dettaglio' />
            <ButtonBg txt="Vedine un altro" />
          </div>
        </div>
      </Card>
    </>
  );
}
