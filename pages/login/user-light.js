import { EyeOffIcon, ChevronDownIcon, KeyIcon } from "@heroicons/react/solid";

export default function User() {
  return (
    <main className="flex flex-col items-center justify-center min-h-full bg-gray-800">
      <div className="absolute top-5 right-5">
        <button className="flex items-center pl-2 pr-1 py-0.5 rounded-lg text-gray-300 text-xs bg-gray-800 focus:outline-0 focus:bg-gray-600 hover:bg-gray-700">
          <span className="font-semibold">Español</span>
          <ChevronDownIcon className="h-5 w-5" />
        </button>
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

            <button className="text-gray-400 flex items-center space-x-0.5 hover:text-base focus:outline-0 focus:text-base">
              <span className="text-sm">Operaciones con token</span>
              <ChevronDownIcon className="h-5 w-5 mt-0.5" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
