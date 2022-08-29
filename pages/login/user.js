import { EyeOffIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

import Head from "next/head";
import { useRouter } from "next/router";

const LoginUser = z.object({
  username: z.string().min(6).max(10),
});

export default function User() {
  const router = useRouter();

  const [validUsername, setValidUsername] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleKeyUp(e) {
    const username = e.target.value;

    try {
      LoginUser.parse({ username });
      setValidUsername(true);
    } catch (e) {
      setValidUsername(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      const randomBool = Math.round(Math.random());

      randomBool
        ? router.push("/login/credentials")
        : toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md flex items-center space-x-2 bg-gray-100 shadow px-3 py-2.5 rounded-lg`}
            >
              <div className="text-red-500 grow-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-800 font-semibold">
                Los datos proporcionados son incorrectos.
              </div>
            </div>
          ));

      setLoading(false);
    }, 2500);
  }

  return (
    <>
      <Head>
        <title>BaseINET · Iniciar sesión</title>
        <meta name="theme-color" content="#feb913" />
      </Head>

      <Toaster position="top-center" />

      <main className="flex flex-col items-center justify-center min-h-full bg-gray-800">
        {/* <div className="absolute top-5 right-5">
          <LanguageMenu />
        </div> */}

        <div className="flex flex-col items-center justify-center">
          <div className="text-base font-semibold text-sm uppercase">
            <span>Acceder</span>
          </div>
          <img src="/base.svg" />
        </div>

        <div className="w-72 mt-4">
          <form onSubmit={handleSubmit}>
            <label htmlFor="user" className="block">
              <div className="relative mt-1">
                <button
                  type="button"
                  className="text-gray-400 absolute right-4 inset-y-0 my-auto focus:outline-0 focus:text-gray-100 hover:text-gray-100"
                >
                  <EyeOffIcon className="h-5 w-5" />
                </button>
                <input
                  id="user"
                  type="password"
                  placeholder="Usuario de BASEInet"
                  onKeyUp={handleKeyUp}
                  maxLength={10}
                  className="block pr-16 bg-gray-700 border-none rounded-md mt-1 w-full focus:border-none ring-1 ring-transparent focus:ring-gray-500 placeholder-gray-500 text-gray-50"
                />
              </div>
            </label>

            {!loading ? (
              <button
                disabled={validUsername ? false : true}
                className={`${
                  validUsername
                    ? "bg-base text-gray-900 hover:bg-base/90"
                    : "bg-gray-700 text-gray-600"
                } mt-4 w-full py-2 rounded-md uppercase font-semibold transition-colors focus:outline-0 focus:border-none focus:ring-offset-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-base`}
              >
                Continuar
              </button>
            ) : (
              <button
                disabled={true}
                className="flex justify-center items-center w-full rounded-md text-gray-900 bg-base/95 mt-4 h-10"
              >
                <LoadingSpinner />
              </button>
            )}

            {/* <div className="mt-8 flex justify-center">
              <hr className="w-6 border-gray-700" />
            </div>

            <div className="mt-8 flex flex-col space-y-2 items-center">
              <a
                href="#"
                className="text-gray-300 uppercase font-semibold hover:text-base focus:text-base focus:outline-0"
              >
                Activar usuario
              </a>

              <TokenOperationsMenu />
            </div> */}
          </form>
        </div>
      </main>
    </>
  );
}

function LoadingSpinner() {
  return (
    <svg
      height="7"
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fillOpacity="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

function LanguageMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-gray-400 flex items-center space-x-0.5 hover:text-base focus:outline-0 focus:text-base">
        <span className="text-sm">Español</span>
        <ChevronDownIcon className="h-5 w-5 mt-0.5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 p-1 rigin-top-right shadow-lg bg-gray-100 rounded-md w-56 flex flex-col space-y-1 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-base"
                } text-sm px-2 py-2 rounded-md text-gray-900 flex items-center space-x-1 font-semibold`}
                href="#"
              >
                Español
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-base"
                } text-sm px-2 py-2 rounded-md text-gray-900 flex items-center space-x-1 font-semibold`}
                href="#"
              >
                <span>Ingles</span>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function TokenOperationsMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-gray-400 flex items-center space-x-0.5 hover:text-base focus:outline-0 focus:text-base">
        <span className="text-sm">Operaciones con token</span>
        <ChevronDownIcon className="h-5 w-5 mt-0.5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 p-1 origin-top-right shadow-lg bg-gray-100 rounded-md w-56 flex flex-col space-y-1 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-base"
                } text-sm px-2 py-2 rounded-md text-gray-900 flex items-center space-x-1 font-semibold`}
                href="#"
              >
                {/* <RefreshIcon className="h-5 w-5 text-base" /> */}
                <span>Sincronizar token</span>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${
                  active && "bg-base"
                } text-sm px-2 py-2 rounded-md text-gray-900 flex items-center space-x-1 font-semibold`}
                href="#"
              >
                {/* <KeyIcon className="h-5 w-5 text-gray-700" /> */}
                <span>Renovar token</span>
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
