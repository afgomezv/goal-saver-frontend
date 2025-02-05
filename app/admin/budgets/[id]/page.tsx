import { Metadata } from "next";
import { getBudget } from "@/src/services/budget";
import CreateExpense from "@/components/expenses/CreateExpense";

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

export default async function ViewBudgetPage({
  params,
}: {
  params: { id: string };
}) {
  const budget = await getBudget(params.id);

  return <CreateExpense budget={budget} />;
}
