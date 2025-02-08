import { deleteBudget } from "@/actions/delete-budget-action";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  budgetId: number;
};

const DeleteBudgetModal = ({ isOpen, onOpenChange, budgetId }: Props) => {
  const deleteBudgetwithId = deleteBudget.bind(null, budgetId);
  const [state, dispatch] = useFormState(deleteBudgetwithId, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success("Presupuesto eliminado con éxito");
      onOpenChange();
    }
  }, [state, onOpenChange]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h3 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
                Eliminar Presupuesto
              </h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-xl font-bold">
                Ingresa tu Password para {""}
                <span className="text-[#4dd307]">
                  eliminar el presupuesto {""}
                </span>
              </p>
              <p className="text-gray-600 text-sm">
                (Un presupuesto eliminado y sus gastos no se pueden recuperar)
              </p>
              <form className=" mt-4 space-y-5" noValidate action={dispatch}>
                <div className="flex flex-col gap-5">
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    label="Ingresa tu password para elimiminar"
                    isInvalid={!!state.errors[0]}
                    errorMessage={state.errors[0]}
                  />
                </div>
                <ModalFooter>
                  <Button onPress={onClose}>Cancelar</Button>
                  <Button type="submit" color="danger">
                    {" "}
                    Eliminar
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteBudgetModal;
