import ChangePasswordForm from "@/components/profile/ChangePasswordForm";

export default async function ChangePasswordPage() {
  return (
    <>
      <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
        Cambiar Password
      </h1>
      <p className="text-xl font-bold text-gray-400">
        Aquí puedes cambiar tu {""}
        <span className="text-[#4dd307]">password</span>
      </p>
      <ChangePasswordForm />
    </>
  );
}
