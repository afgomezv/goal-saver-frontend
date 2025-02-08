import { Budget } from "@/src/schemas";
import { Input } from "@heroui/react";

type Props = {
  state:
    | {
        errors: string[];
        success: string;
      }
    | {
        errors: never[];
        success: string | null;
      };
  budget?: Budget;
};

export default function BudgetForm({ state, budget }: Props) {
  return (
    <>
      <Input
        type="text"
        name="name"
        label="Nombre Presupuesto"
        isInvalid={!!state.errors[0]}
        errorMessage={state.errors[0]}
        defaultValue={budget?.name}
      />
      <Input
        type="number"
        name="amount"
        label="Cantidad Presupuesto"
        isInvalid={!!state.errors[1]}
        errorMessage={state.errors[1]}
        defaultValue={budget?.amount}
      />
    </>
  );
}
