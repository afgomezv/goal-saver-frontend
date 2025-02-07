"use client";

import { Budget } from "@/src/schemas";
import { formatCurrency, formatDate } from "@/src/utils";
import { Button, useDisclosure } from "@heroui/react";
import ExpenseMenu from "./ExpenseMenu";
import ModalContainerCreate from "../ui/ModalContainerCreate";
import Amount from "../ui/Amount";
import ProgressBar from "./ProgressBar";

type Props = {
  budget: Budget;
};

const CreateExpense = ({ budget }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const totalSpent = budget.expenses.reduce(
    (total, expense) => +expense.amount + total,
    0
  );

  const totalAvailable = +budget.amount - totalSpent;

  const percentage = +((totalSpent / +budget.amount) * 100).toFixed(2);

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
      {budget.expenses ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <ProgressBar percentage={percentage} />
            <div className="flex flex-col justify-center items-center md:items-start">
              <Amount label="Presupuesto" amount={+budget.amount} />
              <Amount label="Disponible" amount={totalAvailable} />
              <Amount label="Gastado" amount={totalSpent} />
            </div>
          </div>
          <h1 className="font-black text-4xl text-[#4dd307]">
            Gastos en este presupuesto
          </h1>
          <ul
            role="list"
            className="divide-y divide-gray-300 border shadow-lg mt-10 "
          >
            {budget.expenses.map((expense) => (
              <li key={expense.id} className="flex justify-between gap-x-6 p-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto space-y-2">
                    <p className="text-2xl font-semibold text-gray-300">
                      {expense.name}
                    </p>
                    <p className="text-xl font-bold text-[#4dd307]">
                      {formatCurrency(+expense.amount)}
                    </p>
                    <p className="text-gray-500  text-sm">
                      Agregado:{" "}
                      <span className="font-bold">
                        {formatDate(expense.updatedAt)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-6">
                  <ExpenseMenu expenseId={expense.id} />
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          {" "}
          <p className="text-center text-gray-600 py-20">No hay gastos aún</p>
        </>
      )}
      <ModalContainerCreate isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default CreateExpense;
