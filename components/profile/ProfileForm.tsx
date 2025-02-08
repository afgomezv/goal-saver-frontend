"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@heroui/react";
import { UpdateUser, updateUserSchema, User } from "@/src/schemas";
import { updateUser } from "@/actions/update-user-action";
import { toast } from "sonner";

export default function ProfileForm({ user }: { user: User }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUser>({
    resolver: zodResolver(updateUserSchema),
  });

  const handleUpdateUser = async (formData: UpdateUser) => {
    const res = await updateUser(formData);
    if (res.error) {
      toast.error("Correo electrónico ya existe");
      return;
    }

    toast.success("Usurio Actualizado Correctamente");
    reset();
  };

  return (
    <div className="max-w-[450px] mx-auto">
      <form
        className=" mt-14 space-y-5"
        noValidate
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <Input
          type="name"
          label="Nombre"
          isInvalid={!!errors.name}
          errorMessage={`${errors.name?.message}`}
          defaultValue={user.name}
          {...register("name", { required: `${errors.name}` })}
        />
        <Input
          id="email"
          type="email"
          label="Correo Electrónico"
          isInvalid={!!errors.email}
          errorMessage={`${errors.email?.message}`}
          defaultValue={user.email}
          {...register("email", { required: `${errors.email}` })}
        />
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg mt-12"
        >
          Guardar Cambios
        </Button>
      </form>
    </div>
  );
}
