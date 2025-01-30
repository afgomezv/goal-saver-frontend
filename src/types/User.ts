export type User = {
  name: string;
  email: string;
  password: string;
};

export type RegisterForm = Pick<User, "name" | "email" | "password"> & {
  confirmPassword: string;
};
