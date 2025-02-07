"use server";

import getToken from "@/src/auth/token";
import {
  ErrorResponseSchema,
  SuccessSchema,
  UpdatePassword,
} from "@/src/schemas";

export async function updatePassword(formData: UpdatePassword) {
  const token = getToken();
  const url = `${process.env.API_URL}/auth/update-password`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      current_password: formData.current_password,
      password: formData.password,
    }),
  });

  const json = await req.json();

  if (!req.ok) {
    const { error } = ErrorResponseSchema.parse(json);
    return {
      error,
    };
  }

  const success = SuccessSchema.parse(json.message);

  return {
    success,
  };
}
