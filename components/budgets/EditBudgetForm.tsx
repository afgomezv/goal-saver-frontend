"use client";

import { useFormState } from "react-dom";
import { Button } from "@heroui/react";
import BudgetForm from "./BudgetForm";
import { Budget } from "@/src/schemas";
import { editBudget } from "@/actions/edit-budget-action";
import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EditBudgetForm({ budget }: { budget: Budget }) {
  const router = useRouter();

  const editBudgetWithId = editBudget.bind(null, budget.id);
  const [state, dispatch] = useFormState(editBudgetWithId, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Presupuesto guardado correctamente", {
        onAutoClose: () => {
          router.push("/admin");
        },
      });
    }
  }, [state, router]);

  return (
    <>
      <form className="mt-10 space-y-5" noValidate action={dispatch}>
        <BudgetForm state={state} budget={budget} />
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
        >
          Guardar Cambios
        </Button>
      </form>
    </>
  );
}
