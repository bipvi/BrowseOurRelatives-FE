import { useEffect, useState } from "react";
import logo from "../../../public/favicon.svg";
import ButtonMyP from "../buttons/ButtonMyP";
import {
  baseUrl,
  GET_ME,
  getMe,
  LOCAL_STORAGE_KEY,
  localStorageKey,
  LOG_IN,
  logUser,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.user);
  const [me, setMe] = useState({
    username: "",
    password: "",
  });

  const sendMe = () => {
    dispatch(logUser(me.username, me.password), LOG_IN);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (me.username != "" && me.password != "") {
      sendMe();
    }
  };

  useEffect(() => {
    if (user.token) {
      if (user.username === "") {
        dispatch(getMe(user.token));
      } else {
        localStorage.setItem("tokenKey", user.token);
        dispatch(localStorageKey(user.token));

        const timer = setTimeout(() => {
          navigate("/");
        }, 1000);

        return () => clearTimeout(timer);
      }
    }
  }, [user]);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-2 py-4 sm:px-10 lg:py-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center mt-16  justify-center flex-wrap">
          <img
            alt="Your Company"
            src={logo}
            className="inline-block size-12 logo-shadow"
          />
          <h2 className="pl-5 text-center text-2xl/9 font-bold tracking-tight text-txt inline text-shadow">
            Login in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 mx-6 sm:mx-2" onSubmit={handleSubmit}>
            <div>
              <div className="flex">
                <label
                  htmlFor="email"
                  className="text-md/6 font-medium text-txt self-start"
                >
                  Username
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setMe({ ...me, username: e.target.value })}
                  value={me.username}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full shadow-xxs rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myP sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-txt"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-myP hover:text-ac">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 mb-10">
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setMe({ ...me, password: e.target.value })}
                  value={me.password}
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md shadow-xxs border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myP sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <ButtonMyP
                txt="Login"
                classe="flex w-full justify-center rounded-md"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-300">
            Not a member?{" "}
            <a
              onClick={() => navigate("/register")}
              className="font-semibold text-myP hover:text-ac"
            >
              Sing in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
