import { DropdownItem, useDisclosure } from "@heroui/react";
import DeleteExpenseModal from "./DeleteExpenseModal";

type Props = {
  expenseId: number;
};

const ButtonDelete = ({ expenseId }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p onClick={onOpen}>Eliminar Gasto</p>
      <DeleteExpenseModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        expenseId={expenseId}
      />
    </>
  );
};

export default ButtonDelete;
