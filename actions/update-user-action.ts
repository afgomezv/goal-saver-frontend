"use server";

import getToken from "@/src/auth/token";
import { ErrorResponseSchema, SuccessSchema, UpdateUser } from "@/src/schemas";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: UpdateUser) {
  const token = getToken();
  const url = `${process.env.API_URL}/auth/user`;

  const req = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
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
  revalidatePath("/admin/profile/settings");

  return {
    success,
  };
}
