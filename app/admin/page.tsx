import Link from "next/link";
import { Button } from "@heroui/react";
import { Metadata } from "next";
import { BudgetsAPIResponseSchema } from "@/src/schemas";
import getToken from "@/src/auth/token";
import { formatCurrency, formatDate } from "@/src/utils";
import BudgetMenu from "@/components/budgets/BudgetMenu";

export const metadata: Metadata = {
  title: "Mis Presupuestos",
  description: "Administra tus presupuestos con mis presupuestos",
  keywords: ["presupuesto", "administración", "manejo"],
};

async function getUserBudget() {
  const token = getToken();
  const url = `${process.env.API_URL}/budgets`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // next: {
    //   tags: ["all-budgets"],
    // },
  });

  const json = await req.json();
  const budgets = BudgetsAPIResponseSchema.parse(json.budgets);
  return budgets;
}

export default async function AdminPage() {
  const budgets = await getUserBudget();

  return (
    <>
      <div className="flex flex-col-reverse bg-gray-900 md:flex-row md:justify-between items-center">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
            Mis Presupuestos
          </h1>
          <p className="text-xl font-bold text-gray-400">
            Maneja y administra tus{" "}
            <span className="text-[#4dd307]">presupuestos</span>
          </p>
        </div>
        <Link href={"/admin/budgets/new"}>
          <Button className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
            Crear Presupuesto
          </Button>
        </Link>
      </div>
      {budgets.length ? (
        <ul
          role="list"
          className="divide-y divide-gray-300 border shadow-lg mt-10 "
        >
          {budgets.map((budget) => (
            <li key={budget.id} className="flex justify-between gap-x-6 p-5 ">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto space-y-2">
                  <p className="text-sm font-semibold leading-6 text-gray-300">
                    <Link
                      href={`/admin/budgets/${budget.id}`}
                      className="cursor-pointer hover:underline text-2xl font-bold"
                    >
                      {budget.name}
                    </Link>
                  </p>
                  <p className="text-xl font-bold text-[#4dd307]">
                    {formatCurrency(+budget.amount)}
                  </p>
                  <p className="text-gray-500  text-sm">
                    Última actualización:{" "}
                    <span className="font-bold">
                      {formatDate(budget.updatedAt)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-x-6">
                <BudgetMenu budgetId={budget.id} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center py-20">
          No hay presupuestos disponibles.{" "}
          <Link
            href={"/admin/budgets/new"}
            className="text-[#4dd307] font-bold"
          >
            Comienza creando uno
          </Link>
        </p>
      )}
    </>
  );
}
