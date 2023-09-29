type Role = 'User' | 'SuperAdmin' | 'Admin';

interface IRole {
  id: string;
  role: Role;
  description: string;
}

export interface IUserResponse {
  id: string;
  email: string;
  password: string;
  name: string;
  fullname: string;
  telegram: string | null;
  phone: string | null;
  createAt: string;
  updateAt: string;
  idRole: string | null;
  role: IRole | null;
  file: string | null;
}
