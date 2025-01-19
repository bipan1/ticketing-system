export interface SignInFormInputs {
  email: string;
  password: string;
}

export interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface User {
  id: number;
  name: string | null;
  email: string | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}
