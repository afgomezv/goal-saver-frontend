"use client";

import { Tab, Tabs } from "@heroui/react";
import { CircleUserRound, Fingerprint } from "lucide-react";
import { usePathname } from "next/navigation";

const ProfileTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col">
      <Tabs
        selectedKey={pathname}
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider border-gray-600",
          cursor: "w-full bg-[#4dd307]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#4dd307]",
        }}
      >
        <Tab
          key="/admin/profile/settings"
          href="/admin/profile/settings"
          title={
            <div className="flex items-center space-x-2">
              <CircleUserRound />
              <span>Mi Cuenta</span>
            </div>
          }
        ></Tab>
        <Tab
          key="/admin/profile/password"
          href="/admin/profile/password"
          title={
            <div className="flex items-center space-x-2">
              <Fingerprint />
              <span>Cambiar Password</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default ProfileTabs;
