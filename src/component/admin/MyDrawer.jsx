import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect } from "react";
import FormNew from "./FormNew,";

export default function MyDrawer({ open, closeDrawer }) {
  useEffect(() => {}, []);
  return (
    <>
        <Drawer open={open} onClose={closeDrawer} className="p-4 pb-24 nav:pb-8 z-50 bg-custom-gradient overflow-y-scroll shadow-xs hover:shadow-sm" size={480}>
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Browse our relatives
            </Typography>
            <IconButton variant="text" color="blue-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
                onClick={(e) => {
                    e.preventDefault()
                    closeDrawer()}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <FormNew key={1}/>
        </Drawer>
    </>
  );
}
