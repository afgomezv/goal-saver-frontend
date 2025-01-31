"use client";

import { forgotPassword } from "@/actions/forgot-password-action";
import { forgotPasswordSchema, ForgotPassword } from "@/src/schemas";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = async (formdata: ForgotPassword) => {
    const { success } = await forgotPassword(formdata);

    if (success.error) {
      toast.error("Usuario no encontrado");
      return;
    }

    toast.success(
      "Correo electrónico de reestablecer la contraseña enviado correctamente!"
    );
    //reset();
    //router.push("/auth/login");
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleForgotPassword)}>
      <Input
        type="email"
        label="Correo Electrónico"
        isInvalid={!!errors.email}
        errorMessage={`${errors.email?.message}`}
        placeholder="Ingresar correo electrónico"
        startContent={<Mail className="text-default-400" size={18} />}
        classNames={{
          input: [
            "placeholder:text-text-white/60",
            "group-data-[has-value=true]:text-white/60",
            "focus:group-data-[has-value=true]:text-black",
          ],
          inputWrapper: ["bg-gray-800/50"],
        }}
        {...register("email", { required: `${errors.email}` })}
      />

      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
      >
        Enviar Instrucciones
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
