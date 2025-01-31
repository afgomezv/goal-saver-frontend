"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { registerUser } from "@/actions/create-account-action";
import { registerSchema, Register } from "@/src/schemas";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (formData: Register) => {
    const { success } = await registerUser(formData);

    if (success.error) {
      toast.error("Correo electrónico ya está en uso");
      return;
    }

    toast.success("Usuario registrado exitosamente!");
    reset();
    router.push("/auth/login");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleRegister)}>
      <Input
        type="text"
        label="Nombre Completo"
        isInvalid={!!errors.name}
        errorMessage={`${errors.name?.message}`}
        placeholder="Ingrese nombre completo"
        startContent={<User className="text-default-400" size={18} />}
        classNames={{
          input: [
            "placeholder:text-text-white/60",
            "group-data-[has-value=true]:text-white/60",
            "focus:group-data-[has-value=true]:text-black",
          ],
          inputWrapper: ["bg-gray-800/50"],
        }}
        {...register("name", { required: `${errors.name}` })}
      />

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
      <Input
        type="password"
        label="Confirmar Contraseña"
        isInvalid={!!errors.confirmPassword}
        errorMessage={`${errors.confirmPassword?.message}`}
        placeholder="Ingresar Contraseña"
        startContent={<Lock className="text-default-400" size={18} />}
        classNames={{
          input: [
            "placeholder:text-text-white/60",
            "group-data-[has-value=true]:text-white/60",
            "focus:group-data-[has-value=true]:text-black",
          ],
          inputWrapper: ["bg-gray-800/50"],
        }}
        {...register("confirmPassword", {
          required: `${errors.confirmPassword}`,
        })}
      />
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
      >
        Registrarme
      </Button>
    </form>
  );
};

export default RegisterForm;
