export default function Gateway() {
  return (
    <div className="h-full flex bg-slate-100">
      <aside className="bg-slate-800 w-80 h-full">
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="pt-4 px-4 flex items-center justify-between">
              <Logo />
              <div>
                <AppSwitcher />
              </div>
            </div>

            <ul className="flex flex-col space-y-1 mt-4 px-4 text-slate-200 font-semibold">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-slate-900"
                >
                  Usuarios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-slate-900"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-slate-50 rounded-md bg-slate-900"
                >
                  API Keys
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-md hover:bg-slate-900"
                >
                  Administración
                </a>
              </li>
            </ul>
          </div>
          <footer className="">
            <div className="flex items-center space-x-3 bg-slate-700 p-4 mx-4 rounded-lg">
              <div className="bg-base p-2 rounded-full font-semibold text-slate-600">
                GH
              </div>

              <div className="grow">
                <h3 className="text-slate-100 font-semibold">Gregory House</h3>
                <h6 className="text-xs text-slate-400">
                  dr.house@bancobase.com
                </h6>
              </div>
            </div>

            <ul className="flex flex-col space-y-1 my-4 mx-4 text-slate-200 font-semibold">
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-md hover:bg-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 00-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 00.649.375h2.158zM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 006 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 000-.75L7.839 7.758zM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 004.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 00-.65.375l-1.078 1.868z" />
                    <path
                      fillRule="evenodd"
                      d="M14.13 4.347l.644-1.117a.75.75 0 00-1.299-.75l-.644 1.116a6.954 6.954 0 00-2.081-.556V1.75a.75.75 0 00-1.5 0v1.29a6.954 6.954 0 00-2.081.556L6.525 2.48a.75.75 0 10-1.3.75l.645 1.117A7.04 7.04 0 004.347 5.87L3.23 5.225a.75.75 0 10-.75 1.3l1.116.644A6.954 6.954 0 003.04 9.25H1.75a.75.75 0 000 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 10.75 1.298l1.117-.644a7.04 7.04 0 001.523 1.523l-.645 1.117a.75.75 0 101.3.75l.644-1.116a6.954 6.954 0 002.081.556v1.29a.75.75 0 001.5 0v-1.29a6.954 6.954 0 002.081-.556l.645 1.116a.75.75 0 001.299-.75l-.645-1.117a7.042 7.042 0 001.523-1.523l1.117.644a.75.75 0 00.75-1.298l-1.116-.645a6.954 6.954 0 00.556-2.081h1.29a.75.75 0 000-1.5h-1.29a6.954 6.954 0 00-.556-2.081l1.116-.644a.75.75 0 00-.75-1.3l-1.117.645a7.04 7.04 0 00-1.524-1.523zM10 4.5a5.475 5.475 0 00-2.781.754A5.527 5.527 0 005.22 7.277 5.475 5.475 0 004.5 10a5.475 5.475 0 00.752 2.777 5.527 5.527 0 002.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 002.78-.753 5.527 5.527 0 002.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 00-.753-2.78 5.528 5.528 0 00-2.028-2.002A5.475 5.475 0 0010 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Configuración</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-1.5 px-4 py-2 rounded-md hover:bg-slate-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>Cerrar sesión</span>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </aside>

      <main className="p-8 flex-1">
        <div className="flex space-x-10">
          <div className="w-72">
            <h2 className="font-semibold text-slate-700 text-lg">
              Información general
            </h2>
            <div className="text-sm text-slate-600">
              Endpoint RESTFul para consultar y manipular los servicios y API
              Key que se debe incluir en todas las peticiones.
            </div>
          </div>

          <div className="bg-white p-6 flex flex-col rounded-lg shadow-sm border grow">
            <div className="flex flex-col">
              <label className="text-xs text-slate-700 uppercase font-semibold">
                URL del proyecto
              </label>
              <input
                type="text"
                disabled={true}
                className="mt-2 bg-slate-100 text-slate-600 rounded-md border-none focus:ring-0"
                defaultValue="https://my-project-api.bancobase.com"
              />
            </div>

            <div className="flex flex-col mt-8">
              <label className="text-xs text-slate-700 uppercase font-semibold">
                API Key
              </label>
              <div className="relative w-full">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-slate-500 absolute top-1 bottom-0 right-2 my-auto"
                  >
                    <path
                      fillRule="evenodd"
                      d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0114.75 19h-9.5A2.25 2.25 0 013 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 019 1h2c1.373 0 2.531.923 2.887 2.182zM7.5 4A1.5 1.5 0 019 2.5h2A1.5 1.5 0 0112.5 4v.5h-5V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  disabled={true}
                  className="mt-2 bg-slate-100 text-slate-600 rounded-md border-none focus:ring-0 w-full pr-10"
                  defaultValue="c817456913c14303b1e1bbabf551f79a"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-10 mt-12">
          <div className="w-72">
            <h2 className="font-semibold text-slate-700 text-lg">
              Revocar API Key
            </h2>
            <div className="text-sm text-slate-600">
              Al realizar esta acción todas las aplicaciones que utilicen la
              actual API Key dejaran de resolver peticiones exitosas.
            </div>
          </div>

          <div className="bg-yellow-100 p-6 flex flex-col rounded-lg shadow-sm border border-yellow-500 flex-1">
            <div className="">
              <div className="flex space-x-1 items-center text-yellow-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.485 3.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 3.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="font-semibold uppercase">Atención</div>
              </div>
              <div className="mt-1.5 text-yellow-700 text-sm">
                Esta acción invalidará el API Key actual. El proyecto se va a
                reiniciar durante este proceso, lo que terminará con todas las
                conexiones actuales.
              </div>
            </div>

            <button className="mt-4 w-52 bg-yellow-300 px-4 py-2 rounded-md uppercase font-semibold text-sm text-yellow-800">
              Generar nueva API Key
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function Logo() {
  return (
    <svg
      className="h-10"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 231.79 94.64"
    >
      <path
        d="M49.7 68.21c1.15 1.99.21 3.62-2.09 3.62l-27.45.03c-2.3 0-3.24-1.63-2.09-3.62l13.7-23.79c1.15-1.99 3.03-2 4.18-.01L49.7 68.21z"
        fill="#fff"
      />
      <path
        d="M46.8 23.32 23.58 37.97c-1.95 1.22-1.88 3.09.15 4.17l7.19 3.8.85-1.48c1.15-1.99 3.03-2 4.18-.01l3.45 5.96 8.6 4.54c2.04 1.07 3.63.07 3.54-2.23L50.5 25.28c-.08-2.29-1.76-3.18-3.7-1.96"
        fill="#f5a800"
      />
      <path
        className="st2"
        d="M49.7 68.21c1.15 1.99.21 3.62-2.09 3.62l-27.45.03c-2.3 0-3.24-1.63-2.09-3.62l13.7-23.79c1.15-1.99 3.03-2 4.18-.01L49.7 68.21z"
        fill="#6f7271"
      />
      <path
        d="M37.73 32.51 18.67 52.26c-1.6 1.65-1.08 3.46 1.15 4.02l4.5 1.12 7.41-12.88c1.15-1.99 3.03-2 4.18-.01l10.66 18.42c2.17.48 3.42-.85 2.8-3.03L41.8 33.5c-.64-2.19-2.47-2.65-4.07-.99"
        fill="#b4a269"
      />
      <g fill="#fff">
        <path
          className="st2"
          d="m126.9 55.42-10.45-.01a.82.82 0 0 1-.57-1.1l5.2-13.16c.1-.24.33-.41.6-.41.27 0 .5.17.6.4l5.2 13.17c.22.54-.14 1.01-.58 1.11m4.54 8.61 2.29 5.68c.7 1.76 2.7 2.61 4.47 1.91a3.438 3.438 0 0 0 1.91-4.47l-12.75-31.84a6.09 6.09 0 0 0-5.66-3.84c-2.58 0-4.77 1.6-5.67 3.84l-12.74 31.84c-.7 1.76.15 3.76 1.91 4.47 1.76.7 3.76-.15 4.46-1.91l2.29-5.68c.58-1.38 1.95-1.98 3.37-1.92h12.76c1.55 0 2.78.54 3.36 1.92M210.79 64.74h-11.36c-6.61-.01-9.83-2.8-10.58-9.46h20.88c1.9 0 3.43-1.54 3.43-3.43a3.43 3.43 0 0 0-3.43-3.43h-20.88c.76-6.68 3.98-9.48 10.61-9.48h11.34c1.89 0 3.42-1.54 3.42-3.43 0-1.89-1.53-3.43-3.42-3.43h-11.34c-8.05 0-17.65 3.43-17.65 19.77s9.6 19.76 17.65 19.76h11.34c1.89 0 3.42-1.54 3.42-3.43 0-1.9-1.53-3.44-3.43-3.44M71.51 55.28h16.38c2.58.04 4.67 2.14 4.67 4.73 0 2.62-2.13 4.75-4.74 4.75H71.51v-9.48zm0-16.33h15.76c2.62 0 4.74 2.12 4.74 4.73 0 2.59-2.09 4.7-4.67 4.74H71.51v-9.47zm15.76 32.66c7.08 0 12.56-3.74 12.56-10.98 0-4.27-2.62-7.21-5.6-8.79 2.75-1.57 5.09-5.12 5.09-8.57 0-6.54-4.65-11.19-12.05-11.19H67.31c-1.17 0-2.12.95-2.12 2.12v35.28c0 1.17.94 2.13 2.12 2.13h19.96M177.85 60.02c0-6.39-5.2-11.61-11.57-11.61h-10.91c-2.62 0-4.74-2.12-4.74-4.74s2.12-4.74 4.74-4.74h16.54c1.9 0 3.43-1.53 3.43-3.43a3.43 3.43 0 0 0-3.43-3.43l-16.55.01c-6.41 0-11.61 5.2-11.61 11.61 0 6.41 5.19 11.61 11.61 11.61h10.9c2.61 0 4.73 2.11 4.73 4.72 0 2.6-2.12 4.72-4.73 4.72h-19.09c-1.9 0-3.44 1.53-3.44 3.44 0 1.89 1.54 3.43 3.44 3.43h19.09c.15 0 .28-.01.42-.02 6.2-.23 11.17-5.32 11.17-11.57"
        />
      </g>
    </svg>
  );
}
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [{ name: "Gateway Manager" }, { name: "Tracing Monitor" }];

export function AppSwitcher() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="flex items-center space-x-1 relative w-full rounded-md bg-slate-900 text-slate-50 text-xs font-semibold px-2.5 py-1.5">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none">
              <SelectorIcon
                className="h-4 w-4 text-slate-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-xs">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 pr-4 ${
                      active ? "bg-base text-slate-900" : "text-slate-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
