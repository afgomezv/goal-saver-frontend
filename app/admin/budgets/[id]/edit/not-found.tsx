import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
        No Encontrado
      </h1>
      <p className="text-xl font-bold text-gray-600">
        El Presupuesto que intentas acceder{" "}
        <span className="text-[#4dd307]">no existe</span>
      </p>
      <Button className="h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
        <Link href="/admin">Ir a Presupuestos</Link>
      </Button>
    </div>
  );
}
