import { useState } from "react";
import {  useQueryClient } from "@tanstack/react-query";
import {  useMutateEmployeeData } from "../hooks/useEmployeeData";

const AddEmployee = ()=>{

const queryClient = useQueryClient();


    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")

    const onSuccess = ()=>{
        queryClient.invalidateQueries('Employee')
    }


   const { mutate, isError, isLoading, error} = useMutateEmployeeData(onSuccess, "add")

    const handleSubmit = ()=>{
        mutate({name:name, designation: designation})
    }
    
    if(isLoading){
      return(  <p>
            Loading ...
        </p>)
    }
    

    if(isError){
        return(  <p>
            {error?.message}
          </p>)
      }




    return (
        <div className="form">
            <input name='name' placeholder="name " onChange={(e)=>setName(e.target.value)} value={name} />
            <input name='desgnation' placeholder="designation " onChange={(e)=>setDesignation(e.target.value)} value={designation} />
            <button onClick={handleSubmit}>Add Employee</button>

        </div>
    )
}

export default AddEmployee;