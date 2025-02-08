import ProfileForm from "@/components/profile/ProfileForm";
import { verifySession } from "@/src/auth/dal";

export default async function EditProfilePage() {
  const { user } = await verifySession();
  return (
    <>
      <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
        Actualizar Perfil
      </h1>
      <p className="text-xl font-bold text-gray-400">
        Aquí puedes cambiar los datos de tu {""}
        <span className="text-[#4dd307]">perfil</span>
      </p>
      <ProfileForm user={user} />
    </>
  );
}
