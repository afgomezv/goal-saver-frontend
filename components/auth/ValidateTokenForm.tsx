import { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button, InputOtp } from "@heroui/react";
import { toast } from "sonner";
import { validateToken } from "@/actions/validate-token-action";

type ValidateTokenFormProps = {
  setIsValidToken: Dispatch<SetStateAction<boolean>>;
  setToken: Dispatch<SetStateAction<string>>;
};

const ValidateTokenForm = ({
  setIsValidToken,
  setToken,
}: ValidateTokenFormProps) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { token: "" },
  });

  const handleValidateToken = async (data: { token: string }) => {
    const { success } = await validateToken(data);

    if (success.error) {
      toast.error("Token Invalido");
      return;
    }

    toast.success("Token es valido, asigna una nueva contraseña");
    setIsValidToken(true);
    setToken(data.token);
  };

  return (
    <form
      className="flex flex-col justify-center my-10"
      onSubmit={handleSubmit(handleValidateToken)}
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

export default ValidateTokenForm;
