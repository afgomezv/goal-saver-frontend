import { DraftExpense } from "@/src/schemas";
import { Input } from "@heroui/react";

type Props = {
  state:
    | {
        errors: string[];
        success: string;
      }
    | {
        errors: never[];
        success: any;
      };
  expense?: DraftExpense;
};

const ExpenseForm = ({ state, expense }: Props) => {
  return (
    <>
      <div className="space-y-5 px-4">
        <Input
          type="text"
          label="Nombre del Gasto"
          name="name"
          isInvalid={!!state.errors[0]}
          errorMessage={state.errors[0]}
          defaultValue={expense?.name}
        />
        <Input
          type="number"
          label="Cantidad Gasto"
          name="amount"
          isInvalid={!!state.errors[1]}
          errorMessage={state.errors[1]}
          defaultValue={expense?.amount.toString()!}
        />
      </div>
    </>
  );
};

export default ExpenseForm;
