import { Card } from "flowbite-react";
import Sections from "./Sections";
import ButtonMyP from "../buttons/ButtonMyP";

export default function MyHero() {
  return (
    <>
      <div className="flex items-center justify-center my-14 md:my-16 mx-20 bg-gradient-to-r text-txt text-wrap">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl text-myP home-text-shadow text-hover font-bold mb-4">
            Benvenuto in Browse our relatives
          </h1>
          <p className="text-lg mb-8 home-text-shadow">
            Scopri tutte le funzionalità che abbiamo da offrire e inizia a
            utilizzare la nostra applicazione oggi stesso.
          </p>
          <ButtonMyP txt='Vai alla home' />
        </div>
      </div>
        <Sections />
    </>
  );
}
