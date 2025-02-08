import { resetPassword } from "@/actions/reset-passowrd-action";
import { ResetPassword, resetPasswordSchema } from "@/src/schemas";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const resetPasswordWithToken = resetPassword.bind(null, token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleResetPassword = async (formData: ResetPassword) => {
    const { success } = await resetPasswordWithToken(formData);

    if (success.error) {
      toast.error("Token Invalido");
      return;
    }

    toast.success("Contraseña reestablecida correctamente!");
    router.push("/auth/login");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleResetPassword)}>
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
        Resetear Contraseña
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
