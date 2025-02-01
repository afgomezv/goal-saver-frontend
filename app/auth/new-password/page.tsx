import ResetPasswordHandler from "@/components/auth/ResetPasswordHandler";
import React from "react";

export default function NewPasswordPage() {
  return (
    <>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
        Reestablecer Password
      </h1>
      <p className="text-2xl font-bold text-gray-600">
        Ingresa el código que recibiste
        <span className="text-[#4dd307]"> por email</span>
      </p>
      <ResetPasswordHandler />
    </>
  );
}
