"use server";

import { cookies } from "next/headers";
import { loginSchema } from "@/src/schemas";
import { LoginForm } from "@/src/types/User";

export async function authenticateUser(formdata: LoginForm) {
  const login = loginSchema.safeParse(formdata);

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
    body: JSON.stringify(formdata),
  });

  const json = await req.json();

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
