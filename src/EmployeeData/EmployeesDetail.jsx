import React, { useState } from 'react'
import EditEmployee from './EditEmployee';
import DeleteEmployee from './DeleteEmployee';

const EmployeesDetail = ({item}) => {
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)


    const handleEdit =()=>{
        setOpenEditModal(!openEditModal)
       }

       const handleDelete = ()=>{
        setOpenDeleteModal(!openDeleteModal)
       }
  return (
    <p className='listItem'>
<li key={item?.id}> {item?.name} works as {item.designation}  <button onClick={handleEdit}>Edit</button>  <button onClick={handleDelete}>Delete</button> </li>
<EditEmployee openModal={openEditModal} setOpenModal={setOpenEditModal} data={item}/> 
<DeleteEmployee openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} data={item}/> 
    </p>
    )
}

export default EmployeesDetail