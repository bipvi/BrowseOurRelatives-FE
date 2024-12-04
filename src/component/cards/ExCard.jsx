"use client";

import { Typography } from "@material-tailwind/react";
import { Avatar, Button, Card } from "flowbite-react";

export function ExCard() {
  return (
    <Card className="bg-myP shadow-xs popup p-3 rounded-xl">
      <div className="relative">
        <img
          className="min-h-48 mx-auto object-cover rounded-lg shadow-sm"
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        />
        <Typography
          variant="h5"
          className="mb-2 z-40 text-txt relative bottom-10 md:bottom-14 home-text-shadow"
        >
          UI/UX Review Check
        </Typography>
      </div>
      <p className="font-normal text-xl text-txt">
        Descrizione Item !! Lorem ipsum dolor, sit amet consectetur adipiqwjf
        x3roweoef la dksicing elit praesentium iste illo reru figa doloribus
        blanditiis rec <code>...</code>{" "}
      </p>
      <Button size="lg" className="text-bg hover:text-ac hover:border-ac text-xl">
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
      <p className="font-normal text-xl text-txt">
        Storia Item!! Lorem ipsum dolor sit amqiehrdqob defhik2 et nwqg qwhkdg
        wkduconsectetur adipisicing elit. Eius quod dignissimos obcaecati a{" "}
        <code>...</code>
      </p>
      <Button size="lg" className="text-bg text-xl hover:text-ac pb-3">
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
