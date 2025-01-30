"use server";

export async function confirmAccount(data: { token: string }) {
  const url = `${process.env.API_URL}/auth/confirm-account`;

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
