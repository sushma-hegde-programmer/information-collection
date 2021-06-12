import axios from "axios";
import constants from "../constants";

const getEmployees = (
  field: string = "Id",
  order: string = "ASC",
  query: string,
  role: string,
) => {
  const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}&r=${role}`;
  return axios.get(url);
};

// const getEmployees = (field:string, order:string, query:string ) => {
//   const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}`;
//   return axios.get(url);
// };
const getEmployeeById = (id: string) => {
  const url = `${constants.BASE_URL}/employee/findOne/${id}`;
  return axios.get(url);
};

const getEmployeeNameById = (id: number) => {
  const url = `${constants.BASE_URL}/employee/employeename/${id}`;
  return axios.get(url);
};

const getEmployeesByRole = (role: number) => {
  const url = `${constants.BASE_URL}/employee?r='${role}'`;
  return axios.get(url);
};

const deleteEmployee = (id: number) => {
  const url = `${constants.BASE_URL}/employee/deleteEmployee?id=${id}`;
  return axios.patch(url);
};

const assignEmployee = (id: number, managerId: string) => {
  const url = `${constants.BASE_URL}/employee/changeManager?id=${id}&mid=${managerId}`;
  return axios.patch(url);
};

export default {
  getEmployees,
  getEmployeeById,
  getEmployeesByRole,
  getEmployeeNameById,
  deleteEmployee,
  assignEmployee,
};
