import getToken from "@/src/auth/token";
import { BudgetAPIResponseSchema } from "@/src/schemas";
import { Button } from "@heroui/react";
import Link from "next/link";
import { notFound } from "next/navigation";

const getBudget = async (budgetId: string) => {
  const token = getToken();
  const url = `${process.env.API_URL}/budgets/${budgetId}`;

  const req = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await req.json();

  if (!req.ok) {
    notFound();
  }

  const budget = BudgetAPIResponseSchema.parse(json);
  return budget;
};

export default async function EditBudgetPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const budget = await getBudget(id);

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
            Editar Presupuesto:
          </h1>
          <p className="text-xl font-bold text-gray-600">
            Llena el formulario y crea un nuevo{" "}
            <span className="text-[#4dd307]">presupuesto</span>
          </p>
        </div>
        <Button className="h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
          <Link href={"/admin"}>Volver</Link>
        </Button>
      </div>
      <div className="p-10 mt-10  shadow-lg border "></div>
    </>
  );
}
