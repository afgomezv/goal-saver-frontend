import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoalSaver | Olvidé Password",
  description:
    "Crea una cuenta gratuita y controla tus finanzas con GoalSaver. Agrega tus cuentas bancarias, pagos, y recibos para tener un mejor control de tus ingresos y egresos.",
};

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
        ¿Olvidaste tu Contraseña?
      </h1>
      <p className="text-2xl my-4 text-gray-400">
        aquí puedes{" "}
        <span className="text-[#4dd307] font-semibold">reestablecerla</span>
      </p>
      <ForgotPasswordForm />
      <nav className="mt-4 flex flex-col space-y-4">
        <Link href="/auth/login" className="text-center text-gray-400">
          ¿Ya tienes cuenta? Inicar Sesión
        </Link>
        <Link href="/auth/register" className="text-center text-gray-400">
          ¿No tienes cuenta? Crear una
        </Link>
      </nav>
    </div>
  );
}
