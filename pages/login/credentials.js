import Head from "next/head";

export default function Credentials() {
  return (
    <>
      <Head>
        <title>BaseINET · Iniciar sesión</title>
        <meta name="theme-color" content="#feb913" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-full bg-gray-800">
        <div className="flex flex-col items-center justify-center">
          <div className="text-base font-semibold text-sm uppercase">
            <span>Credenciales</span>
          </div>
          <img src="/base.svg" />
        </div>
      </main>
    </>
  );
}
