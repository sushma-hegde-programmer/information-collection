import axios from "axios";
import { ForgotPasswordResType, LoginResponseType } from "../types";
import {EmployeeType, UserRoleType,RoleType, UserType} from "../types";
import constants  from "../constants";

const login = async (email: string, password: string) => {
  const url = `${constants.BASE_URL}/auth/login`;
  return axios
    .post<LoginResponseType>(url, { email, password })
    .catch((e) => Promise.reject(e.response.data));
};
const forgotPassword = async (email: string) => {
  const url = `${constants.BASE_URL}/auth/forgot`;
  return axios
    .post<ForgotPasswordResType>(url, { email })
    .catch((e) => Promise.reject(e.response.data));
};

//const UserService = { login, forgotPassword };
//export default UserService;

const createUser = (data:any) => {
    const url = `${constants.BASE_URL}/auth/register`;
    return axios
      .post<UserType>(url, data)
      .catch((e) => Promise.reject(e.response.data));
};

const createEmployee = (data:any) => {
    const url = `${constants.BASE_URL}/auth/employee_userrole`;
    return axios    
        .post<EmployeeType>(url, data)
        .catch((e) => Promise.reject(e.response.data));
};

const getEmployee = (id:any) => {
    const url = `${constants.BASE_URL}/employees/managers/${id}`;
    return axios
        .get(url)
        .catch((e) => Promise.reject(e.response.data))
}

export default {createUser, createEmployee, getEmployee, login, forgotPassword };
