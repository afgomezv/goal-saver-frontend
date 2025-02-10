import { useEffect } from "react";
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
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};

const ModalContainerCreate = ({ isOpen, onOpenChange }: Props) => {
  const { id } = useParams();

  const createExpenseWithBudgetId = createExpense.bind(null, +id);
  const [state, dispatch] = useFormState(createExpenseWithBudgetId, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Gasto creado correctamente!");
      onOpenChange();
    }
  }, [state]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
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
                <Button variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  type="submit"
                  //onPress={onClose}
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
