"use server";

import getToken from "@/src/auth/token";
import {
  Budget,
  ErrorResponseSchema,
  PasswordValidateSchema,
  SuccessSchema,
} from "@/src/schemas";
import { error } from "console";
import { revalidatePath } from "next/cache";

type ActionstateType = {
  errors: string[];
};

export async function deleteBudget(
  budgetId: Budget["id"],
  prevstate: ActionstateType,
  formData: FormData
) {
  const currenPassword = PasswordValidateSchema.safeParse(
    formData.get("password")
  );

  if (!currenPassword.success) {
    return {
      errors: currenPassword.error.issues.map((issue) => issue.message),
    };
  }

  //comprobar password
  const token = getToken();
  const checkPasswordUrl = `${process.env.API_URL}/auth/check-password`;

  const checkPasswordReq = await fetch(checkPasswordUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ password: currenPassword.data }),
  });

  const checkPasswordJson = await checkPasswordReq.json();

  if (!!checkPasswordJson.error) {
    //const { error } = ErrorResponseSchema.parse(checkPasswordJson);
    return {
      errors: ["Password es incorrecto"],
      success: "",
    };
  }

  //eliminar presupuesto
  const deleteBudgetUrl = `${process.env.API_URL}/budgets/${budgetId}`;
  const deleteBudgetReq = await fetch(deleteBudgetUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const deleteBudgetJson = await deleteBudgetReq.json();

  if (!!deleteBudgetJson.error) {
    //const { error } = ErrorResponseSchema.parse(deleteBudgetReq);
    return {
      errors: ["Accion no válida"],
      success: "",
    };
  }

  revalidatePath("/admin");
  //const success = SuccessSchema.parse(deleteBudgetJson);

  return {
    errors: [],
    success: "",
  };
}
