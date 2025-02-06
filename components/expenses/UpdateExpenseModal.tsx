import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import ExpenseForm from "./ExpenseForm";
import { useFormState } from "react-dom";
import createExpense from "@/actions/create-expense-action";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DraftExpense, Expense } from "@/src/schemas";
import editExpense from "@/actions/edit-expense-action";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  expenseId: number;
};

const UpdateExpenseModal = ({ isOpen, onOpenChange, expenseId }: Props) => {
  const [expense, setExpense] = useState<DraftExpense>();
  const { id: budgetId } = useParams();

  const editExpenseWithBudgetId = editExpense.bind(null, {
    budgetId: +budgetId,
    expenseId: +expenseId,
  });
  const [state, dispatch] = useFormState(editExpenseWithBudgetId, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_URL}/admin/api/budgets/${budgetId}/expenses/${expenseId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setExpense(data.expense));
  }, []);

  useEffect(() => {
    if (state.success) {
      toast.success("Gasto se actualizo correctamente!");
    }
  }, [state]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h1
                className="text-4xl font-black bg-gradient-to-r
              from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5"
              >
                Actualizar Gasto
              </h1>
            </ModalHeader>
            <ModalBody>
              <p className="text-xl font-bold">
                Editar el formulario y actualiza el{" "}
                <span className="text-[#4dd307]">gasto</span>
              </p>
            </ModalBody>
            <form noValidate action={dispatch}>
              <ExpenseForm state={state} expense={expense} />
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  type="submit"
                  //onPress={onClose}
                  className="bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
                >
                  Actualizar Gasto
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UpdateExpenseModal;
