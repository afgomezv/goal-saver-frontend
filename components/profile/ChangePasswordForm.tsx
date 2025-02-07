"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { UpdatePassword, UpdatePasswordSchema } from "@/src/schemas";
import { updatePassword } from "@/actions/update-password-action";
import { toast } from "sonner";

export default function ChangePasswordForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleshow = () => setIsShowNewPassword(!isShowNewPassword);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePassword>({
    resolver: zodResolver(UpdatePasswordSchema),
  });

  const handleUpdatePassword = async (formData: UpdatePassword) => {
    const res = await updatePassword(formData);

    if (res.error) {
      toast.error("Contraseña Actual Incorrecta");
      return;
    }

    toast.success("Contraseña Actualizada Correctamente");
    reset();
  };

  return (
    <div className="max-w-[450px] mx-auto">
      <form
        className=" mt-14 space-y-5"
        onSubmit={handleSubmit(handleUpdatePassword)}
        noValidate
      >
        <Input
          type={isVisible ? "text" : "password"}
          label="Contraseña Actual"
          isInvalid={!!errors.current_password}
          errorMessage={`${errors.current_password?.message}`}
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {!isVisible ? (
                <EyeOff className="text-default-600" size={18} />
              ) : (
                <Eye className="text-default-600" size={18} />
              )}
            </button>
          }
          {...register("current_password", {
            required: `${errors.current_password}`,
          })}
        />
        <Input
          type={isShowNewPassword ? "text" : "password"}
          label="Nueva Contraseña"
          isInvalid={!!errors.password}
          errorMessage={`${errors.password?.message}`}
          endContent={
            <button type="button" onClick={toggleshow}>
              {!isShowNewPassword ? (
                <EyeOff className="text-default-600" size={18} />
              ) : (
                <Eye className="text-default-600" size={18} />
              )}
            </button>
          }
          {...register("password", {
            required: `${errors.password}`,
          })}
        />
        <Input
          id="password_confirmation"
          type="password"
          label="Confirmar Nueva Contraseña"
          isInvalid={!!errors.confirm_password}
          errorMessage={`${errors.confirm_password?.message}`}
          {...register("confirm_password", {
            required: `${errors.confirm_password}`,
          })}
        />
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg mt-12"
        >
          Cambiar Password
        </Button>
      </form>
    </div>
  );
}
