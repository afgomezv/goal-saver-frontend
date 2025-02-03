import CreateBudgetForm from "@/components/budgets/CreateBudgetForm";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NewPage() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
        <div className="w-full md:w-auto">
          <h1 className="text-4xl font-black bg-gradient-to-r from-[#ffe000] to-[#4dd307] bg-clip-text text-transparent my-5">
            Nuevo Presupuesto
          </h1>
          <p className="text-xl font-bold text-gray-400">
            Llena el formulario y crea un nuevo{" "}
            <span className="text-[#4dd307]">presupuesto</span>
          </p>
        </div>
        <Link href={"/admin"}>
          <Button className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
            Volver{" "}
          </Button>
        </Link>
      </div>

      <div className="bg-gray-600/60 border-gray-600 p-10 mt-10  shadow-lg border rounded-2xl ">
        <CreateBudgetForm />
      </div>
    </>
  );
}
