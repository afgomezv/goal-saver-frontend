import ProfileTabs from "@/components/profile/ProfileTabs";
import { Toaster } from "sonner";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProfileTabs />
      {children}
      <Toaster position="bottom-center" richColors className="mb-20" />
    </>
  );
}
