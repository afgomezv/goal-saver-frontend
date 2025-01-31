"use client";

import { confirmAccount } from "@/actions/confirm-account-action";
import { Button, InputOtp } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

const ConfirmAccountForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { token: "" },
  });

  const onSubmit = async (data: { token: string }) => {
    const { success } = await confirmAccount(data);

    if (success.error) {
      toast.error("Token no es valido");
      return;
    }

    toast.success("Cuenta confirmada exitosamente!");

    reset();
    router.push("/auth/login");
  };

  return (
    <form
      className="flex flex-col justify-center my-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="token"
        render={({ field }) => (
          <InputOtp
            {...field}
            errorMessage={errors.token && errors.token.message}
            isInvalid={!!errors.token}
            length={6}
            size="lg"
            classNames={{
              segmentWrapper: "gap-x-8",
            }}
          />
        )}
        rules={{
          required: "Token es requerido",
          pattern: {
            value: /^[0-9]{6}$/,
            message: "Token must be a 6-digit number",
          },
        }}
      />
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg mt-12"
      >
        Verificar Token
      </Button>
    </form>
  );
};

export default ConfirmAccountForm;
