import { Dropdown, Avatar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ME, removeMe } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ChangeImg from "../admin/ChangeImg";

export default function AvatarDropdown({ classe }) {
  const me = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const [openImg, setOpenImg] = useState(false);
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem("tokenKey");
    dispatch(removeMe(), REMOVE_ME);
    navigate("/login");
  };
  const closeImg = () => setOpenImg(false);
  const handlerImg = () => setOpenImg(!openImg);
  return (
    <>
      <ChangeImg open={openImg} close={closeImg} handler={handlerImg} me={me} />
      <Dropdown
        className={`${classe} bg-bg rounded-lg border border-txt`}
        arrowIcon={false}
        inline
        label={
          me.avatar ? (
            <img
              className="object-contain w-10 h-10 ring-2 ring-txt rounded-full"
              alt="profile"
              src={me.avatar}
            />
          ) : (
            <img
              src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
              alt="profile"
              className="object-contain w-10 h-10 ring-2 ring-txt rounded-full"
            />
          )
        }
      >
        <Dropdown.Header className="text-txt hover:bg-myP hover:text-bg rounded-none">
          <span className="block text-sm">{me.username}</span>
        </Dropdown.Header>
        <Dropdown.Item className="text-txt text-nowrap hover:bg-myP hover:text-ac rounded-none">
          Cambia password
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setOpenImg(true)} className="text-txt hover:bg-myP hover:text-ac rounded-none">
          Cambia avatar
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={exit}
          className="text-txt hover:bg-myP hover:text-ac rounded-none"
        >
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}
