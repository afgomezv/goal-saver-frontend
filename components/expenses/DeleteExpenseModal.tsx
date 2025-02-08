import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useFormState } from "react-dom";

import { useParams } from "next/navigation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { toast } from "sonner";
import deleteExpense from "@/actions/delete-expense-action";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  expenseId: number;
  setModal: Dispatch<SetStateAction<boolean>>;
};

const DeleteExpenseModal = ({
  isOpen,
  onOpenChange,
  expenseId,
  setModal,
}: Props) => {
  const { id: budgetId } = useParams();

  const deleteExpenseIdWithBudgetId = deleteExpense.bind(null, {
    budgetId: +budgetId,
    expenseId: +expenseId,
  });
  const [state, dispatch] = useFormState(deleteExpenseIdWithBudgetId, {
    errors: [],
    success: "",
  });

  const handleClose = useCallback(() => {
    setModal(false);
  }, [setModal]);

  useEffect(() => {
    if (state.success) {
      toast.success("Gasto eliminado correactamente");
      handleClose();
    }
  }, [state, handleClose]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1
                  className="text-4xl font-black bg-gradient-to-r
              from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5"
                >
                  Eliminar Gasto
                </h1>
              </ModalHeader>
              <ModalBody>
                <p className="text-xl font-bold">
                  Confirmar para eliminar,{" "}
                  <span className="text-[#4dd307]">el gasto</span>
                </p>
                <p className="text-gray-600 text-sm">
                  (Un gasto eliminado no se puede recuperar)
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={() => handleClose()}>Cerrar</Button>
                <Button color="danger" onPress={() => dispatch()}>
                  Eliminar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteExpenseModal;
