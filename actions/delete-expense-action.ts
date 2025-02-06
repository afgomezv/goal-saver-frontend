"use server";

import getToken from "@/src/auth/token";
import {
  Budget,
  ErrorResponseSchema,
  Expense,
  SuccessSchema,
} from "@/src/schemas";
import { revalidatePath } from "next/cache";

type BudgeIdAndExpenseIdType = {
  budgetId: Budget["id"];
  expenseId: Expense["id"];
};

type ActionStateType = {
  errors: string[];
  success: string;
};

export default async function deleteExpense(
  { budgetId, expenseId }: BudgeIdAndExpenseIdType,
  prevState: ActionStateType
) {
  const token = getToken();
  const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`;

  const req = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return {
      errors: [error],
      success: "",
    };
  }

  const success = SuccessSchema.parse(json.message);
  revalidatePath(`/admin/budgets/${budgetId}`);

  return {
    errors: [],
    success,
  };
}
