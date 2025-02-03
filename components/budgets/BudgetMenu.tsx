"use client";

import { Budget } from "@/src/schemas";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@heroui/react";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import DeleteBudgetModal from "./DeleteBudgetModal";

const BudgetMenu = ({ budgetId }: { budgetId: Budget["id"] }) => {
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
          <DropdownItem key="view" href={`/admin/budgets/${budgetId}`}>
            Ver Presupuesto
          </DropdownItem>
          <DropdownItem key="edit" href={`/admin/budgets/${budgetId}/edit`}>
            Editar Presupuesto
          </DropdownItem>
          <DropdownItem
            key="delete"
            color="danger"
            className="text-danger"
            onPress={onOpen}
          >
            Eliminar Presupuesto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <DeleteBudgetModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        budgetId={budgetId}
      />
    </>
  );
};

export default BudgetMenu;
