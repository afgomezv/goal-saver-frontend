import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "GoalSaver | Crear Cuenta",
  description:
    "Crea una cuenta gratuita y controla tus finanzas con GoalSaver. Agrega tus cuentas bancarias, pagos, y recibos para tener un mejor control de tus ingresos y egresos.",
};

export default function RegisterPage() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
          Crear una Cuenta
        </h1>
        <p className="text-2xl my-4 text-gray-400">
          y controla tus{" "}
          <span className="text-[#4dd307] font-semibold">finanzas</span>
        </p>
        <RegisterForm />

        <nav className="mt-4 flex flex-col space-y-4">
          <Link href="/auth/login" className="text-center text-gray-400">
            ¿Ya tienes cuenta? Inicar Sesión
          </Link>
          <Link
            href="/auth/forgot-password"
            className="text-center text-gray-400"
          >
            ¿Olvidaste tu contraseña? Reestablecer
          </Link>
        </nav>
      </div>
    </>
  );
}
