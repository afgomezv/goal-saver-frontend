import { cookies } from "next/headers";

export default function getToken() {
  const token = cookies().get("GOALSAVER_TOKEN")?.value;
  return token;
}
