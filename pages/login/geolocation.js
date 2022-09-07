import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";
import useGeolocation from "react-hook-geolocation";
import Head from "next/head";

export default function User() {
  const router = useRouter();
  const [userLoc, setUserLoc] = useLocalStorage("userLoc");

  useGeolocation({}, (location) => {
    setUserLoc(location);
    router.push("/login/user");
  });

  return (
    <>
      <Head>
        <title>BaseINET · Iniciar sesión</title>
        <meta name="theme-color" content="#feb913" />
      </Head>

      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => false}>
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
                  {/* GEOLOCATION REQUIRED */}
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
                  </div>

                  <div className="mt-6 flex justify-center text-gray-800">
                    <LoadingSpinner />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <main className="flex flex-col items-center justify-center min-h-full bg-gray-800"></main>
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
