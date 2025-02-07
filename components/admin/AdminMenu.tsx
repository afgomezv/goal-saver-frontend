"use client";

import { logout } from "@/actions/logout-user-action";
import type { User } from "@/src/schemas";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Menu } from "lucide-react";

const AdminMenu = ({ user }: { user: User }) => {
  const { name, email } = user;
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly aria-label="menu">
            <Menu />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="user">Hola: {name}</DropdownItem>
          <DropdownItem key="perfil" href="/admin/profile/settings">
            Mi perfil
          </DropdownItem>
          <DropdownItem key="prosupuestos">Mis prosupuestos</DropdownItem>
          <DropdownItem
            key="logout"
            className="text-danger"
            color="danger"
            onPress={async () => {
              await logout();
            }}
          >
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default AdminMenu;
