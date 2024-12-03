import { Popover, TextInput } from "flowbite-react";
import logo from "../../../public/favicon.svg";
import ButtonMyP from "../buttons/ButtonMyP";

export default function RegisterPage() {
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-6 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6 mx-6 sm:mx-2">
            <div>
              <div className="flex">
                <label
                  htmlFor="email"
                  className="text-md/6 font-medium text-txt self-start"
                >
                  Email address
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email1"
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
              </div>
              <div className="mt-2 mb-10">
                <Popover
                  trigger="hover"
                  content={
                    <div className="space-y-2 p-3 bg-myP border border-myP rounded-md">
                      <h3 className="font-semibold ">
                        Must have at least 6 characters
                      </h3>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="h-1 bg-bg"></div>
                        <div className="h-1 bg-bg"></div>
                        <div className="h-1 bg-bg"></div>
                        <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                      <p>It’s better to have:</p>
                      <ul>
                        <li className="mb-1 flex items-center">
                          <svg
                            className="me-2 h-3.5 w-3.5 text-bg"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 12"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5.917 5.724 10.5 15 1.5"
                            />
                          </svg>
                          Upper & lower case letters
                        </li>
                        <li className="mb-1 flex items-center">
                          <svg
                            className="me-2.5 h-3 w-3 text-red-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          A symbol (#$&)
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="me-2.5 h-3 w-3 text-red-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          A longer password (min. 12 chars.)
                        </li>
                      </ul>
                    </div>
                  }
                >
                  <TextInput id="password1" type="password" required className="border-myP shadow-xxs" />
                </Popover>
              </div>
            </div>

            <div>
              <ButtonMyP
                txt="Login"
                classe="flex w-full justify-center rounded-md"
              />
            </div>
          </form>{" "}
        </div>
      </div>
    </>
  );
}
