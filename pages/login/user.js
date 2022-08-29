import { EyeOffIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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

      randomBool ? router.push("/login/credentials") : openModal();

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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  {/* ERROR MESSAGE */}
                  <div className="text-base flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
                      />
                    </svg>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="mt-3 text-lg font-medium leading-6 text-gray-900"
                  >
                    Los datos proporcionados no son correctos
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Por favor verifica e intenta nuevamente.
                    </p>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-base px-4 py-2 text-sm font-medium text-gray-900 hover:bg-base/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-base focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Entendido
                    </button>
                  </div>

                  {/* GEOLOCATION REQUIRED */}
                  {/* <div className="text-base flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-14 h-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="mt-3 text-lg font-medium leading-6 text-gray-900"
                  >
                    Es necesario compartir tu ubicación
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Por disposición oficial, debes compartir tu ubicación para
                      continuar con tu sesión.
                    </p>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

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

function Modal() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
