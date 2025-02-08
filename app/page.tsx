import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className=" bg-gray-700 py-5">
        <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-96 lg:w-[500px]">
            <Logo />
          </div>
          <nav className="flex flex-col lg:flex-row lg:justify-end gap-5 w-full ">
            <Link
              href="/auth/login"
              className="font-bold text-[#4dd307] hover:text-[#ffe000] uppercase text-md text-center"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="/auth/register"
              className="font-bold text-[#4dd307] hover:text-[#ffe000]  uppercase text-md text-center"
            >
              Registrarme
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full bg-gray-900">
        <div className="max-w-3xl mx-auto p-5 space-y-5 pt-20">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
            Administrador de Gastos
          </h1>
          <p className="text-3xl font-bold text-gray-600">
            controla tus {""} <span className="text-[#4dd307]">finanzas</span>
          </p>
          <p className="text-lg text-gray-600">
            Domina tus finanzas con nuestro Administrador de Gastos. Simplifica
            la gestión de tus ingresos y egresos en un solo lugar, de manera
            intuitiva y eficiente. Toma el control total de tus finanzas
            personales o empresariales con nuestra plataforma fácil de usar.
          </p>

          <h2 className="font-black text-4xl text-[#4dd307] ">
            Ventajas de CashTrackr
          </h2>

          <ol className="grid grid-cols-1 gap-5 items-start">
            <li className="p-5 text-lg text-gray-600">
              <span className="text-[#4dd307] font-black">
                Organización sin Esfuerzo:{" "}
              </span>
              Clasifica y visualiza tus gastos de forma clara y ordenada, sin
              complicaciones con nuestro panel amigable y fácil de usar.
            </li>
            <li className="p-5 text-lg text-gray-600">
              <span className="text-[#4dd307] font-black">
                Presupuestación Inteligente:{" "}
              </span>
              Establece objetivos financieros realistas y sigue tu progreso con
              nuestras herramientas de presupuestación inteligente.
            </li>
            <li className="p-5 text-lg text-gray-600">
              <span className="text-[#4dd307] font-black">
                Acceso en cualquier lugar:{" "}
              </span>
              Nuestra plataforma está disponible para que puedas gestionar tus
              finanzas desde donde te encuentres.
            </li>
            <li className="p-5 text-lg text-gray-600">
              <span className="text-[#4dd307] font-black">
                Seguridad Garantizada:{" "}
              </span>
              Protegemos tus datos con los más altos estándares de seguridad,
              para que puedas utilizar nuestra plataforma con total
              tranquilidad.
            </li>
          </ol>
        </div>
      </main>
      <footer className="py-5">
        <p className="text-center">
          Todos los Derechos Reservados {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
