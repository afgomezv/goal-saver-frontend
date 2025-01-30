import ConfirmAccountForm from "@/components/auth/ConfirmAccountForm";

export default function ConfirmAccountPage() {
  return (
    <>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent">
        Confirma tu cuenta
      </h1>
      <p className="text-2xl my-4 text-gray-400">
        Ingresa el código que recibiste{" "}
        <span className="text-[#4dd307] font-semibold">por email</span>
      </p>
      <ConfirmAccountForm />
    </>
  );
}
