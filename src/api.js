import axios from "axios";

const BASE_URL = "https://mockapi-yorn.onrender.com/Employee"

export const addEmployeeApi = async(postData)=>{
    return await axios.post(`${BASE_URL}`, postData)
}

export const fetchEmployeeApi = async(pageNumber)=>{
    return await axios.get(`${BASE_URL}?_limit=4&_page=${pageNumber}`)
}

export const updateEmployeeApi = async({name, designation, id})=>{
    return await axios.put(`${BASE_URL}/${id}`,{name, designation} )
}
export const deleteEmployeeApi = async({id})=>{
    return await axios.delete(`${BASE_URL}/${id}`)
}