import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "El nombre es requerido" }),
    email: z
      .string()
      .min(1, { message: "El correo electrónico es requerido" })
      .email({ message: "El correo electrónico no es valido" }),
    password: z.string().min(8, { message: "El password es requerido" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type Register = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El correo electrónico es requerido" })
    .email({ message: "El correo electrónico no es valido" }),
  password: z.string().min(8, { message: "El password es requerido" }),
});

export type Login = z.infer<typeof loginSchema>;

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El correo electrónico es requerido" })
    .email({ message: "El correo electrónico no es valido" }),
});

export type ForgotPassword = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, { message: "Minimo 8 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type ResetPassword = z.infer<typeof resetPasswordSchema>;
