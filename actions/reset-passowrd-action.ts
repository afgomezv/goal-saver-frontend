"use server";

import { ResetPassword, resetPasswordSchema } from "@/src/schemas";

export async function resetPassword(token: string, formData: ResetPassword) {
  const resetPassword = resetPasswordSchema.safeParse(formData);

  if (!resetPassword.success) {
    const errors = resetPassword.error.errors.map((error) => error.message);
    return {
      errors,
      success: "",
    };
  }

  const url = `${process.env.API_URL}/auth/reset-password/${token}`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: resetPassword.data.password,
    }),
  });

  const json = await req.json();

  return {
    success: json,
  };
}
