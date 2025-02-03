import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@heroui/react";
import EditBudgetForm from "@/components/budgets/EditBudgetForm";
import { getBudget } from "@/src/services/budget";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const budget = await getBudget(params.id);
  return {
    title: `GoalSaver - ${budget.name}`,
    description: "Edite su presupuesto en línea",
  };
}

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
            Editar Presupuesto: {budget.name}
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
      <div className="bg-gray-600/60 border-gray-600 p-10 mt-10  shadow-lg border rounded-2xl">
        <EditBudgetForm budget={budget} />
      </div>
    </>
  );
}
