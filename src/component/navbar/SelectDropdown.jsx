import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Badge,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

export default function SelectDropdown({textColor}) {
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen ? (
        <div
          className="relative"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === "13") {
              e.preventDefault();
              setIsOpen(false);
            }
          }}
        >
          <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
            <HiOutlineSearch className="text-gray-900" />
          </div>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.keyCode === "13") {
                e.preventDefault();
                setIsOpen(false);
              }
            }}
            ref={inputRef}
            id="email-address-icon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
            placeholder="es. gatto"
          />
        </div>
      ) : (
        <p onClick={handleDropdownToggle} className="text-txt p-2 rounded">
          <span className={`${textColor} flex h-min flex-nowrap justify-evenly hover:text-ac`}>
            Esplora {"\u00A0"}
            <HiOutlineSearch />
          </span>
        </p>
      )}

      {isOpen && (
        <>
          <Card className="absolute top-20 right-64 bg-bg border border-txt text-txt w-56">
            <List>
              <Badge
                onClick={() => setIsOpen(false)}
                content={
                  <AiOutlineClose
                    className="h-4 w-4 text-white"
                    strokeWidth={2.5}
                  />
                }
                className="selectpopup bg-transparent click"
              >
                <ListItem className="p-0 border-b-txt border-b rounded-none">
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center px-3 py-2"
                  >
                    <ListItemPrefix className="mr-3">
                      <Checkbox
                        id="vertical-list-react"
                        ripple={false}
                        className="hover:before:opacity-0 checked:bg-myP"
                        containerProps={{
                          className: "p-0",
                        }}
                      />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="font-medium">
                      React.js
                    </Typography>
                  </label>
                </ListItem>
              </Badge>
              <ListItem className="p-0 border-b-txt border-b rounded-none">
                <label
                  htmlFor="vertical-list-vue"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-vue"
                      ripple={false}
                      className="hover:before:opacity-0 checked:bg-myP"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Vue.js
                  </Typography>
                </label>
              </ListItem>
              <ListItem className="p-0">
                <label
                  htmlFor="vertical-list-svelte"
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3">
                    <Checkbox
                      id="vertical-list-svelte"
                      ripple={false}
                      className="hover:before:opacity-0 checked:bg-myP"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="font-medium">
                    Svelte.js
                  </Typography>
                </label>
              </ListItem>
            </List>
          </Card>
        </>
      )}
    </>
  );
}
