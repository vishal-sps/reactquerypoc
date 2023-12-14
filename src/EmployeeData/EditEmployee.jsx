import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useMutateEmployeeData } from '../hooks/useEmployeeData';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function EditEmployee({openModal, data, setOpenModal}) {

const queryClient = useQueryClient();

   
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [name, setName] = React.useState(data?.name)
  const [designation, setDesignation] = React.useState(data?.designation)

  
  const onSuccess = ()=>{
    queryClient.invalidateQueries('Employee')
    setIsOpen(false)
}
  
  const { mutate, isError:isUpdateError, isLoading:isUpdateLoading, error: updateError } = useMutateEmployeeData(onSuccess, "update")
 

 const handleSubmit = ()=>{
     mutate({name, designation,id: data.id})
 }


  function closeModal() {
    setIsOpen(false);
    setOpenModal(false)
  }

  useEffect(()=>{
    if(openModal){
        setIsOpen(true)
    }
  },[openModal])

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
       
        <div className="form">
            <input name='name' placeholder="name " onChange={(e)=>setName(e.target.value)} value={name} />
            <input name='desgnation' placeholder="designation " onChange={(e)=>setDesignation(e.target.value)} value={designation} />
            <button onClick={handleSubmit} disabled={name==data?.name && designation==data?.designation}>Edit Employee</button>   <button onClick={closeModal}> Close </button> 
            {isUpdateLoading && <p>updating ....</p>}
        </div>
      </Modal>
    </div>
  );
}

export default EditEmployee;