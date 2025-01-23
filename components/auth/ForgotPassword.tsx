"use client";

import { Button, Input } from "@heroui/react";
import { Mail } from "lucide-react";

import React from "react";

const ForgotPassword = () => {
  return (
    <div className="space-y-6">
      <Input
        type="email"
        label="Correo Electrónico"
        placeholder="Ingresar correo electrónico"
        startContent={<Mail className="text-default-400" size={18} />}
        classNames={{
          base: "bg-gray-800/50 rounded-lg",
          mainWrapper: "h-12",
          input: "text-white",
          label: "text-gray-400",
          inputWrapper:
            "bg-gray-800/50 backdrop-blur-xl border-gray-700 hover:border-gray-600 group-data-[focus=true]:border-blue-500",
        }}
      />

      <Button className="w-full h-12 bg-gradient-to-r from-[#ffe000] to-[#4dd307] text-gray-600 font-semibold text-lg">
        Enviar Instrucciones
      </Button>
    </div>
  );
};

export default ForgotPassword;
