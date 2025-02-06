"use client";

import { useFormState } from "react-dom";
import { Button } from "@heroui/react";
import { createBudget } from "@/actions/create-budget-action";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import BudgetForm from "./BudgetForm";

const CreateBudgetForm = () => {
  const router = useRouter();

  const [state, dispatch] = useFormState(createBudget, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Presupuesto creado correctamente", {
        onAutoClose: () => {
          router.push("/admin");
        },
      });
    }
  }, [state]);

  return (
    <form className="mt-10 space-y-5" noValidate action={dispatch}>
      <BudgetForm state={state} />
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
