import Logo from "@/components/ui/Logo";
import { Toaster } from "sonner";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen bg-gray-900">
        <div className="w-full lg:w-1/2  flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="space-y-6">{children}</div>
          </div>
        </div>
        <div className="hidden lg:block w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-auth bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/40 to-stone-500/40 backdrop-blur-sm"></div>
          <div className="relative h-full flex flex-col justify-center items-center">
            <Logo />
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" richColors className="mb-20" />
    </>
  );
}
