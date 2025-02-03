"use client";

import { useFormState } from "react-dom";
import { Button, Input } from "@heroui/react";
import { createBudget } from "@/actions/create-budget-action";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateBudgetForm = () => {
  const router = useRouter();

  const [state, dispatch] = useFormState(createBudget, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Presupuesto creado correactamente", {
        onAutoClose: () => {
          router.push("/admin");
        },
      });
    }
  }, [state]);

  return (
    <form className="mt-10 space-y-5" noValidate action={dispatch}>
      <Input
        type="text"
        name="name"
        label="Nombre Presupuesto"
        isInvalid={!!state.errors[0]}
        errorMessage={state.errors[0]}
      />
      <Input
        type="number"
        name="amount"
        label="Cantidad Presupuesto"
        isInvalid={!!state.errors[1]}
        errorMessage={state.errors[1]}
      />
      <Button
        type="submit"
        className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
      >
        Crear Presupuesto
      </Button>
    </form>
  );
};

export default CreateBudgetForm;
