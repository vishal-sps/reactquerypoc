import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addEmployeeApi, deleteEmployeeApi, fetchEmployeeApi, updateEmployeeApi } from "../api";



export const useGetEmployeeData = (pageNumber) =>{
 return useQuery({
    queryKey:['Employee', pageNumber], 
    queryFn: ()=>fetchEmployeeApi(pageNumber),
    keepPreviousData : true,
    select:(data)=>{
        return data?.data
    }
})}

export const useMutateEmployeeData = (onSuccess, perform)=>{
    return useMutation( { 
         mutationFn: perform === "add" ? addEmployeeApi : perform === "update" ? updateEmployeeApi : perform === "delete" ? deleteEmployeeApi : "", 
         onSuccess
      })
     
}
