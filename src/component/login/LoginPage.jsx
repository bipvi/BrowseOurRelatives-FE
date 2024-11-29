import logo from "../../../public/favicon.svg";
import ButtonMyP from "../buttons/ButtonMyP";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-2 py-4 sm:px-10 lg:py-16">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex items-center mt-16  justify-center flex-wrap">
          <img alt="Your Company" src={logo} className="inline-block size-12" />
          <h2 className="pl-5 text-center text-2xl/9 font-bold tracking-tight text-txt inline">
            Login in to your account
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
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
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
                  <a
                    href="#"
                    className="font-semibold text-myP hover:text-ac"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 mb-10">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <ButtonMyP txt='Login' classe='flex w-full justify-center rounded-md' />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-300">
            Not a member? {" "}
            <a
              href="#"
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
