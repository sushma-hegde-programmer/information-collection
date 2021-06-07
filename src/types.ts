export type StoreType = {
  loading: boolean;
};

export type LoginResponseType = {
  message: string;
  expiresIn: number;
  access_token: string;
};

export type ForgotPasswordResType = {
  message: string;
  expiresIn: number;
  access_token: string;
};

export type AppType = {
  userSession: UserSessionType;
  loading: boolean;
  emailError: any;
};

export type UserSessionType = {
  user: object | null;
  error: string | null;
  store: AppType | null;
};
export type EmailSessionType = {
  error: string | null;
};
export type RoleType = {
  id: number;
  role: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  isActive: string;
};

export type UserRoleType = {
  id: number;
  userId: string;
  roleId: number;
};

export type EmployeeType = {
  fname: string;
  lname: string;
  designation: string;
  email: string;
  mobnumber: number;
  homenumber: number;
  role: string;
  reportingManager: string;
  userId: string;
};

export type UserType = {
  email: string;
  password: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  isActive: string;
  mobile: number;
};

export type EmployeeListType = {
  userId: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  id: string;
  manager: string;
  role: [];
};

export type TableColumn = {
  title: string;
  dataIndex: string;
  key: string;
};
