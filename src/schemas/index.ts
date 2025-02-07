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

export const DraftBudgetSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre del presupuesto es obligatorio" }),
  amount: z.coerce
    .number({ message: "Cantidad no válida" })
    .min(1, { message: "Cantidad no válida" }),
});

export const ExpensesAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  budgetId: z.number(),
});

export type Expense = z.infer<typeof ExpensesAPIResponseSchema>;

export const BudgetAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  amount: z.string(),
  userId: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  expenses: z.array(ExpensesAPIResponseSchema),
});

export const BudgetsAPIResponseSchema = z.array(
  BudgetAPIResponseSchema.omit({ expenses: true })
);
export type Budget = z.infer<typeof BudgetAPIResponseSchema>;

export const SuccessSchema = z.string();
export const ErrorResponseSchema = z.object({
  error: z.string(),
});

export const PasswordValidateSchema = z.string().min(1, {
  message: "Password no válido",
});

export const DraftExpenseSchema = z.object({
  name: z.string().min(1, { message: "El nombre del gasto es obligatorio" }),
  amount: z.coerce
    .number({ message: "Cantidad no válida" })
    .min(1, { message: "Cantidad no válida" }),
});

export type DraftExpense = z.infer<typeof DraftBudgetSchema>;

export const UpdatePasswordSchema = z
  .object({
    current_password: z
      .string()
      .min(1, { message: "La contraseña no puede ir vacia" }),
    password: z.string().min(8, {
      message: "La nueva contraseña debe tener minimo 8 caracteres",
    }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Las contraseñas no coinciden",
    path: ["confirm_password"],
  });

export type UpdatePassword = z.infer<typeof UpdatePasswordSchema>;
