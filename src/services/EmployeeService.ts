import axios from "axios";
import constants from "../constants";

<<<<<<< HEAD
const getEmployees = (
  field: string = "Id",
  order: string = "ASC",
  query: string,
  role: string
) => {
  const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}&r=${role}`; 
  return axios.get(url);
};

=======
const getEmployees = (field:string="Id", order:string="ASC",query:string ) => {
  const url = `${constants.BASE_URL}/employees?q=${query}&f=${field}&o=${order}`;
  return axios.get(url);
};


>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
// const getEmployees = (field:string, order:string, query:string ) => {
//   const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}`;
//   return axios.get(url);
// };
<<<<<<< HEAD
const getEmployeeById = (id: number) => {
  const url = `${constants.BASE_URL}/employee/findOne/${id}`;
  return axios.get(url);
};

const getEmployeeNameById = (id: number) => {
  const url = `${constants.BASE_URL}/employee/employeename/${id}`;
  return axios.get(url);
}

export default { getEmployees, getEmployeeById, getEmployeeNameById};
=======

export default { getEmployees }
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
