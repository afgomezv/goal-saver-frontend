"use client";

import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="space-y-6">
      <Input
        type="text"
        label="Nombre Completo"
        placeholder="Ingrese nombre completo"
        startContent={<User className="text-default-400" size={18} />}
        classNames={{
          base: "bg-gray-800/50 rounded-lg",
          mainWrapper: "h-12",
          input: "text-white",
          label: "text-gray-400",
          inputWrapper:
            "bg-gray-800/50 backdrop-blur-xl border-gray-700 hover:border-gray-600 group-data-[focus=true]:border-blue-500",
        }}
      />
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

      <Input
        label="Contraseña"
        placeholder="Ingresar Contraseña"
        startContent={<Lock className="text-default-400" size={18} />}
        endContent={
          <button type="button" onClick={toggleVisibility}>
            {!isVisible ? (
              <EyeOff className="text-default-400" size={18} />
            ) : (
              <Eye className="text-default-400" size={18} />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        classNames={{
          base: "bg-gray-800/50 rounded-lg",
          mainWrapper: "h-12",
          input: "text-white",
          label: "text-gray-400",
          inputWrapper:
            "bg-gray-800/50 backdrop-blur-xl border-gray-700 hover:border-gray-600 group-data-[focus=true]:border-blue-500",
        }}
      />

      <Input
        label="Confirmar Contraseña"
        placeholder="Ingresar Contraseña"
        startContent={<Lock className="text-default-400" size={18} />}
        type="password"
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
        Registrarme
      </Button>
    </div>
  );
};

export default RegisterForm;
