"use server";

import { cookies } from "next/headers";
import { ErrorResponseSchema, Login, loginSchema } from "@/src/schemas";

export async function authenticateUser(formData: Login) {
  const login = loginSchema.safeParse(formData);

  if (!login.success) {
    const errors = login.error.errors.map((error) => error.message);

    return {
      errors,
      success: "",
    };
  }

  const url = `${process.env.API_URL}/auth/login`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const json = await req.json();

  if (!req.ok) {
    return {
      success: json,
    };
  }

  cookies().set({
    name: "GOALSAVER_TOKEN",
    value: json.data.token,
    httpOnly: true,
    path: "/",
    //expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
  });

  return {
    success: json,
  };
}
