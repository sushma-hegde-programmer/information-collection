export type StoreType = {
  loading: boolean;
};

export type LoginResponseType = {
  message: string;
  expiresIn: number;
  access_token: string;
<<<<<<< HEAD
  userId: string;
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
};

export type ForgotPasswordResType = {
  message: string;
  expiresIn: number;
  access_token: string;
<<<<<<< HEAD
  userId: string;
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
};

export type AppType = {
  userSession: UserSessionType;
  loading: boolean;
  emailError: any;
<<<<<<< HEAD
  forgotToken: any;
};

export type UserSessionType = {
  user: LoginResponseType | null;
=======
};

export type UserSessionType = {
  user: object | null;
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD

export type SidebarOptionsType = {
  role: string;
  routes: RouteType[];
};

export type RouteType = {
  option: string;
  icon: JSX.Element;
  route: string;
};

export type UserDataType = {
  lastLogin: Date;
  firstName: string;
  lastName: string;
  userId: string;
  userRole: string;
  email: string;
  mobile: string;
};
export type mailTokenTypes = {
  forgot: object | null;
};
export type resetPasswordType = {
  password: string;
};
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
