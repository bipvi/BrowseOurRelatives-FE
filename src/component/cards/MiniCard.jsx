import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Button } from "flowbite-react";
import { HiOutlinePencil } from "react-icons/hi2";

export default function MiniCard({ classe }) {
  return (
    <>
      <Card className={`${classe} overflow-hidden bg-myP shadow-sm popup`}>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none max-h-fit"
        >
          <img
            className="object-cover"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
          <Typography
            variant="h5"
            className="z-40 text-txt relative bottom-10 md:bottom-14 home-text-shadow"
          >
            UI/UX Review Check
          </Typography>
        </CardHeader>
        <CardBody className="!py-4">
          <Typography variant="lead" className="font-normal text-txt">
            Because it&apos;s about motivating the doers. Because I&apos;m here
            to follow my dreams and inspire others. <code>...</code>
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Button
              variant="outlined"
              size="2xs"
              className="flex items-center gap-2 text-bg"
            >
              Read More {"\u00A0"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
            <HiOutlinePencil className="h-8 w-8 text-bg"/>
        </CardFooter>
      </Card>
    </>
  );
}
