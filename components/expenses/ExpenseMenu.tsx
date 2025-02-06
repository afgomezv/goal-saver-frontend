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

const ExpenseMenu = ({ expenseId }: { expenseId: Expense["id"] }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly aria-label="menu-budget">
            <EllipsisVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="edit" onPress={onOpen}>
            Editar Gasto
          </DropdownItem>
          <DropdownItem
            key="delete"
            color="danger"
            className="text-danger"
            //onPress={onOpen}
          >
            Eliminar Gasto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <UpdateExpenseModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        expenseId={expenseId}
      />
    </>
  );
};

export default ExpenseMenu;
