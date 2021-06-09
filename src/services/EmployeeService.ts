import axios from "axios";
import constants from "../constants";

const getEmployees = (
  field: string = "Id",
  order: string = "ASC",
  query: string,
  role: string
) => {
  const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}&r=${role}`; 
  return axios.get(url);
};

// const getEmployees = (field:string, order:string, query:string ) => {
//   const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}`;
//   return axios.get(url);
// };
const getEmployeeById = (id: number) => {
  const url = `${constants.BASE_URL}/employee/findOne/${id}`;
  return axios.get(url);
};

const getEmployeeNameById = (id: number) => {
  const url = `${constants.BASE_URL}/employee/employeename/${id}`;
  return axios.get(url);
}

export default { getEmployees, getEmployeeById, getEmployeeNameById};
