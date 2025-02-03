import Link from "next/link";
import { Toaster } from "sonner";
import Logo from "@/components/ui/Logo";
import { verifySession } from "@/src/auth/dal";
import AdminMenu from "@/components/admin/AdminMenu";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await verifySession();

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-700 py-4">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="w-96">
            <Link href={"/admin"}>
              <Logo />
            </Link>
          </div>
          <AdminMenu user={user} />
        </div>
      </header>
      <div className="flex-1 w-full bg-gray-900">
        <section className="max-w-5xl mx-auto pt-20 p-3 py-10">
          {children}
        </section>
      </div>
      <Toaster position="bottom-center" richColors className="mb-20" />
      <footer className="py-5">
        <p className="text-center">
          Todos los Derechos Reservados {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
