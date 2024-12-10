import { Card } from "flowbite-react";
import Sections from "./Sections";
import ButtonMyP from "../buttons/ButtonMyP";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  baseUrl,
  GET_ME,
  getMe,
  LOCAL_STORAGE_KEY,
  localStorageKey,
} from "../../redux/actions";

export default function MyHero() {
  const dispatch = useDispatch();
  const [whatItem, setWhatItem] = useState(null);
  const navigate = useNavigate();
  const me = useSelector((s) => s.user);
  const [item1, setItem1] = useState({});
  const [item2, setItem2] = useState({});

  const change = (item) => {
    if (item === "item1" || item === "item2") {
      setWhatItem(item);
    }
  };

  useEffect(() => {
    if (me.token) {
      dispatch(getMe(me.token), GET_ME);
      getRand(setItem1);
      getRand(setItem2);
    }
    if (!me.token) {
      if (!localStorage.getItem("tokenKey")) navigate("/login");
      else
        dispatch(
          localStorageKey(localStorage.getItem("tokenKey"), LOCAL_STORAGE_KEY)
        );
    }
  }, [me.token]);

  useEffect(() => {
    if (whatItem) {
      switch (whatItem) {
        case "item1":
          getRand(setItem1);break
        case "item2":
          getRand(setItem2);break
      }
    }
    setWhatItem(null)
  }, [whatItem]);

  const getRand = (func) => {
    fetch(baseUrl + "/item/exploreRandomly", {
      headers: { Authorization: `Bearer ${me.token}` },
    })
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error(resp.statusText);
      })
      .then((data) => {
        console.log(data);
        func(data);
        return data;
      })
      .catch((er) => {
        navigate("/login")
        console.log(er)
      });
  };

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
          <ButtonMyP txt="Vai alla home" />
        </div>
      </div>
      <Sections item1={item1} item2={item2} change={change} />
    </>
  );
}
