type UserDTO = {
  id: number;
  fullName: string;
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
  roleId: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
};

export type { UserDTO };
