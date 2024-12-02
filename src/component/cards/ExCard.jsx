"use client";

import { Avatar, Button, Card } from "flowbite-react";

export function ExCard() {
  return (
    <Card className="w-50vh md:w-70vh lg:w-50vh bg-myP shadow-2xl shadow-gray-900">
      <div className="flex items-center justify-between">
        <h5 className="text-2xl font-bold tracking-tight text-bg">
          Item name
        </h5>
        <Avatar
          img="https://www.imglobal.com/images/library/the-img-advantage---svg-graphics/img-adv--doctor-network.svg"/>
      </div>
      <p className="font-normal text-txt">
        Descrizione Item !! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui praesentium iste illo rerum. Odio fuga doloribus blanditiis recusandae magni temporibus iste et non eaque ducimus. Autem quae odio doloribus cumque!
      </p>
      <Button className="text-bg hover:text-ac hover:border-ac">
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <p className="font-normal text-txt">
        Storia Item!! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate optio commodi temporibus exercitationem saepe modi animi incidunt eaque impedit sequi? Earum aperiam id error numquam possimus accusantium nemo rem consectetur?
      </p>
      <Button className="text-bg hover:text-ac pb-3">
        Read more
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
  );
}
