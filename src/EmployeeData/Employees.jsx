import React from 'react'
import { useState } from "react";
import AddEmployee from './AddEmployee';
import EmployeesDetail from './EmployeesDetail';
import { useGetEmployeeData } from '../hooks/useEmployeeData';

const Employees = () => {

    const [pageNumber, setPageNumber] = useState(1)
   
    const {isLoading, isError, data, error} = useGetEmployeeData(pageNumber)
  


if(isLoading){
    <p>Loading ....</p>
}

  return (
    <div>
       <p>Employees</p> 

       <AddEmployee /> 
       <div className='employeeData'>
        <h3>All Employee list: </h3>
       {data?.map((item)=>(
                    <EmployeesDetail item={item} key={item.id} />
                ))}

<button onClick={()=>setPageNumber(state=>state-1)} disabled={pageNumber===1}> prev</button>
            <button onClick={()=>setPageNumber(state=>state+1)} disabled={pageNumber===3}> Next</button>
            <p>(there's a limit set to 4 record per page)</p>
       </div>
                
           
     

        </div>


    
  )
}

export default Employees