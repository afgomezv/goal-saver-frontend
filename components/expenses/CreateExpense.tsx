"use client";

import ModalContainer from "@/components/ui/ModalContainer";
import { Budget } from "@/src/schemas";
import { Button, useDisclosure } from "@heroui/react";

type Props = {
  budget: Budget;
};

const CreateExpense = ({ budget }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1
            className="text-4xl font-black bg-gradient-to-r
        from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5"
          >
            {budget.name}
          </h1>
          <p className="text-xl font-bold text-gray-600">
            Administra tus <span className="text-[#4dd307]">gastos</span>
          </p>
        </div>
        <Button
          typeof="button"
          className="h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg"
          onPress={onOpen}
        >
          Agregar gastos
        </Button>
      </div>
      <ModalContainer isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CreateExpense;
