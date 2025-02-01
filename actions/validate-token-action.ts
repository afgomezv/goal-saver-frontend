"use server";

export async function validateToken(data: { token: string }) {
  const url = `${process.env.API_URL}/auth/validate-token`;

  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await req.json();

  return {
    success: json,
  };
}
