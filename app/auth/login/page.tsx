import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoalSaver | Iniciar Session",
  description:
    "Crea una cuenta gratuita y controla tus finanzas con GoalSaver. Agrega tus cuentas bancarias, pagos, y recibos para tener un mejor control de tus ingresos y egresos.",
};

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
        Iniciar Sessión
      </h1>
      <p className="text-2xl my-4 text-gray-400">
        y controla tus{" "}
        <span className="text-[#4dd307] font-semibold">finanzas</span>
      </p>
      <LoginForm />
      <nav className="mt-4 flex flex-col space-y-4">
        <Link href="/auth/register" className="text-center text-gray-400">
          ¿No tienes cuenta? Crear una
        </Link>
        <Link
          href="/auth/forgot-password"
          className="text-center text-gray-400"
        >
          ¿Olvidaste tu contraseña? Reestablecer
        </Link>
      </nav>
    </div>
  );
}
