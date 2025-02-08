import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@heroui/react";
import { EllipsisVertical } from "lucide-react";
import { Expense } from "@/src/schemas";
import UpdateExpenseModal from "./UpdateExpenseModal";
import DeleteExpenseModal from "./DeleteExpenseModal";
import { useState } from "react";

const ExpenseMenu = ({ expenseId }: { expenseId: Expense["id"] }) => {
  const { onOpen, onOpenChange } = useDisclosure();
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const handleOpen = (modal: string) => {
    if (modal === "edit") setOpenModalEdit(true);
    if (modal === "delete") setOpenModalDelete(true);

    onOpen();
  };

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly aria-label="menu-budget">
            <EllipsisVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            key="edit"
            onPress={() => handleOpen("edit")}
            textValue="Editar Gasto"
          >
            Editar Gasto
          </DropdownItem>
          <DropdownItem
            key="delete"
            color="danger"
            className="text-danger"
            textValue="Eliminar Gasto"
            onPress={() => handleOpen("delete")}
          >
            Eliminar Gasto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <UpdateExpenseModal
        isOpen={openModalEdit}
        setModal={setOpenModalEdit}
        onOpenChange={onOpenChange}
        expenseId={expenseId}
      />
      <DeleteExpenseModal
        isOpen={openModalDelete}
        setModal={setOpenModalDelete}
        onOpenChange={onOpenChange}
        expenseId={expenseId}
      />
    </>
  );
};

export default ExpenseMenu;
