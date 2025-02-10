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
import ExpenseForm from "../expenses/ExpenseForm";
import createExpense from "@/actions/create-expense-action";
import { toast } from "sonner";

type Props = {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  onOpenChange: () => void;
};

const ModalContainerCreate = ({ modal, setModal, onOpenChange }: Props) => {
  const { id } = useParams();

  const createExpenseWithBudgetId = createExpense.bind(null, +id);
  const [state, dispatch] = useFormState(createExpenseWithBudgetId, {
    errors: [],
    success: "",
  });

  const handleClose = useCallback(() => {
    setModal(false);
  }, [setModal]);

  useEffect(() => {
    if (state.success) {
      toast.success("Gasto creado correctamente!");
      handleClose();
    }
  }, [state, handleClose]);

  return (
    <Modal isOpen={modal} onOpenChange={onOpenChange}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader>
              <h1
                className="text-4xl font-black bg-gradient-to-r
              from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5"
              >
                Agregar Gasto
              </h1>
            </ModalHeader>
            <ModalBody>
              <p className="text-xl font-bold">
                Llena el formulario y crea un {""}
                <span className="text-[#4dd307]">gasto</span>
              </p>
            </ModalBody>
            <form noValidate action={dispatch}>
              <ExpenseForm state={state} />
              <ModalFooter>
                <Button variant="light" onPress={() => handleClose()}>
                  Cerrar
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
                >
                  Registrar Gasto
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalContainerCreate;
