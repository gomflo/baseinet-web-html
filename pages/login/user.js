import { EyeOffIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Head from "next/head";

export default function User() {
  return (
    <>
      <Head>
        <title>BaseINET · Iniciar sesión</title>
        <meta name="theme-color" content="#feb913" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-full bg-gray-800">
        <div className="absolute top-5 right-5">
          <LanguageMenu />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-base font-semibold text-sm uppercase">
            <span>Acceder</span>
          </div>
          <img src="/base.svg" />
        </div>

        <div className="w-72 mt-4">
          <form className="">
            <label for="user" className="block">
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
                  className="block pr-16 bg-gray-700 border-none rounded-md mt-1 w-full focus:border-none ring-1 ring-transparent focus:ring-gray-500 placeholder-gray-500 text-gray-50"
                />
              </div>
            </label>

            <button className="mt-4 bg-base w-full py-2 rounded-md uppercase font-semibold text-gray-900 hover:bg-base/90 focus:outline-0 focus:border-none focus:ring-offset-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-base">
              Continuar
            </button>

            <div className="mt-8 flex justify-center">
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
            </div>
          </form>
        </div>
      </main>
    </>
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
