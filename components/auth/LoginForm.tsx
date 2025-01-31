"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/src/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginForm } from "@/src/types/User";
import { authenticateUser } from "@/actions/authenticate-user-action";
import { toast } from "sonner";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (formData: LoginForm) => {
    const { success } = await authenticateUser(formData);
    console.log(success.error);

    if (success.error) {
      switch (success.error) {
        case "User not found":
          toast.error("El usuario no existe.");
          break;

        case "Incorrect password":
          toast.error("Contraseña incorrecta.");
          break;

        default:
          toast.error("La cuenta no esta confirmada");
          break;
      }
      return;
    }

    toast.success("Inicie sesión correctamente!");
    reset();
    router.push("/admin");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
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

      <Input
        type={isVisible ? "text" : "password"}
        label="Contraseña"
        isInvalid={!!errors.password}
        errorMessage={`${errors.password?.message}`}
        placeholder="Ingresar Contraseña"
        startContent={<Lock className="text-default-400" size={18} />}
        endContent={
          <button type="button" onClick={toggleVisibility}>
            {!isVisible ? (
              <EyeOff className="text-default-400" size={18} />
            ) : (
              <Eye className="text-default-400" size={18} />
            )}
          </button>
        }
        classNames={{
          input: [
            "placeholder:text-text-white/60",
            "group-data-[has-value=true]:text-white/60",
            "focus:group-data-[has-value=true]:text-black",
          ],
          inputWrapper: ["bg-gray-800/50"],
        }}
        {...register("password", { required: `${errors.password}` })}
      />
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
      >
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
