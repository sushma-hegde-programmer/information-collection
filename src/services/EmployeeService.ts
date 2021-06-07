import axios from "axios";
import constants from "../constants";

const getEmployees = (field:string="Id", order:string="ASC",query:string ) => {
  const url = `${constants.BASE_URL}/employees?q=${query}&f=${field}&o=${order}`;
  return axios.get(url);
};


// const getEmployees = (field:string, order:string, query:string ) => {
//   const url = `${constants.BASE_URL}/employee?q=${query}&f=${field}&o=${order}`;
//   return axios.get(url);
// };

export default { getEmployees }