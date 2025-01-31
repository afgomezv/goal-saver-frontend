"use server";

import { Register, registerSchema } from "@/src/schemas";

export async function registerUser(formData: Register) {
  const register = registerSchema.safeParse(formData);

  if (!register.success) {
    const errors = register.error.errors.map((error) => error.message);
    return {
      errors,
      success: "",
    };
  }

  const url = `${process.env.API_URL}/auth/register`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: register.data.name,
      email: register.data.email,
      password: register.data.password,
    }),
  });

  const json = await req.json();

  return {
    errors: [],
    success: json,
  };
}
