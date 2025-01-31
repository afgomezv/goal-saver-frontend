import Link from "next/link";
import { Button } from "@heroui/react";

export default function AdminPage() {
  return (
    <>
      <div className="flex flex-col-reverse bg-gray-900 md:flex-row md:justify-between items-center">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
            Mis Presupuestos
          </h1>
          <p className="text-xl font-bold text-gray-400">
            Maneja y administra tus{" "}
            <span className="text-[#4dd307]">presupuestos</span>
          </p>
        </div>
        <Link href={"/admin/budget/new"}>
          <Button className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
            Crear Presupuesto
          </Button>
        </Link>
      </div>
    </>
  );
}
