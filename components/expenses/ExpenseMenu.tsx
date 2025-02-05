import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { EllipsisVertical } from "lucide-react";

const ExpenseMenu = () => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly aria-label="menu-budget">
            <EllipsisVertical />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="edit">Editar Gasto</DropdownItem>
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
      {/* <DeleteBudgetModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        budgetId={budgetId}
      /> */}
    </>
  );
};

export default ExpenseMenu;
