"use client";

import { Budget } from "@/src/schemas";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { EllipsisVertical } from "lucide-react";

const BudgetMenu = ({ budgetId }: { budgetId: Budget["id"] }) => {
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
          <DropdownItem key="edit" href="">
            Editar Presupuesto
          </DropdownItem>
          <DropdownItem
            key="delete"
            color="danger"
            className="text-danger"
            onPress={() => {}}
          >
            Eliminar Presupuesto
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default BudgetMenu;
