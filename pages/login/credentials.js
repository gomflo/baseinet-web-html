import { EyeOffIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { z } from "zod";
import Head from "next/head";
import Link from "next/link";

const LoginCredentials = z.object({
  password: z.string().min(8).max(12),
  token: z.string().length(6),
});

export default function User() {
  const router = useRouter();

  const inputPassword = useRef();
  const inputToken = useRef();

  const [validForm, setValidForm] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleKeyUp() {
    try {
      LoginCredentials.parse({
        password: inputPassword.current.value,
        token: inputToken.current.value,
      });

      setValidForm(true);
    } catch (e) {
      console.log(e);
      setValidForm(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => router.push("/dashboard"), 2500);
  }

  return (
    <>
      <Head>
        <title>BaseINET · Iniciar sesión</title>
        <meta name="theme-color" content="#feb913" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-full bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <div className="text-base font-semibold text-sm uppercase">
            <span>Iniciar sesión</span>
          </div>
          <img src="/base.svg" />
        </div>

        <div className="w-72 mt-12">
          <div className={`flex flex-col items-center`}>
            {/* <div className="text-gray-500 text-sm font-black uppercase">
              Hola
            </div> */}
            <div className="mt-1 flex space-x-2 text-gray-50 text-2xl font-extrabold">
              <div className="flex items-center space-x-1">
                <span>V</span>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
              </div>

              <div className="flex items-center space-x-1">
                <span>H</span>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
              </div>

              <div className="flex items-center space-x-1">
                <span>G</span>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
              </div>

              <div className="flex items-center space-x-1">
                <span>F</span>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
                <div className="h-1 border border-gray-900 bg-gray-500 w-1 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-end w-full mt-2.5">
              <Link href="/login/user">
                <a className="text-sm text-gray-400 flex items-center space-x-1 hover:text-gray-300 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 group-hover:text-base text-gray-600"
                  >
                    <g clipPath="url(#clip0_9_2121)">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_9_2121">
                        <path d="M0 0h20v20H0z" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span> No son mis iniciales</span>
                </a>
              </Link>
            </div>
          </div>

          {/* <div className="mt-1 px-2 flex justify-end">
            <Link href="/login/user">
              <a className="text-xs text-gray-500">No son mis iniciales</a>
            </Link>
          </div> */}

          <form onSubmit={handleSubmit} className="mt-10">
            <label htmlFor="password" className="block">
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-400 absolute right-4 inset-y-0 my-auto focus:outline-0 focus:text-gray-100 hover:text-gray-100"
                >
                  <EyeOffIcon className="h-5 w-5" />
                </button>
                <input
                  id="password"
                  ref={inputPassword}
                  type="password"
                  placeholder="Contraseña"
                  onKeyUp={handleKeyUp}
                  maxLength={12}
                  className="block pr-16 bg-gray-700 border-none rounded-md mt-1 w-full focus:border-none ring-1 ring-transparent focus:ring-gray-500 placeholder-gray-500 text-gray-50"
                />
              </div>
            </label>

            <label htmlFor="password" className="block mt-2">
              <div className="relative">
                <input
                  id="token"
                  ref={inputToken}
                  type="text"
                  placeholder="Token"
                  onKeyUp={handleKeyUp}
                  maxLength={6}
                  className="block bg-gray-700 border-none rounded-md mt-1 w-full focus:border-none ring-1 ring-transparent focus:ring-gray-500 placeholder-gray-500 text-gray-50"
                />
              </div>
            </label>

            {!loading ? (
              <button
                disabled={validForm ? false : true}
                className={`${
                  validForm
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

            <div className="flex justify-center mt-4">
              <a href="#" className="text-gray-400 text-sm hover:text-gray-300">
                Olvidé mi contraseña
              </a>
            </div>
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
