"use server";

import { ForgotPassword, forgotPasswordSchema } from "@/src/schemas";

export async function forgotPassword(formData: ForgotPassword) {
  const forgot = forgotPasswordSchema.safeParse(formData);

  const url = `${process.env.API_URL}/auth/forgot-password`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const json = await req.json();

  return {
    success: json,
  };
}
