import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { deleteEmployeeApi, updateEmployee } from '../api';
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




function DeleteEmployee({openModal, data, setOpenModal}) {
    const queryClient = useQueryClient();
    const onSuccess =()=>{
      queryClient.invalidateQueries('Employee')
      setIsOpen(false)
    }
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const { mutate, isError, isLoading, error } = useMutateEmployeeData(onSuccess, "delete")

 const handleYes = ()=>{
     mutate({id:data?.id})
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
       
       <h3>Are you sure want to delete  <i>  {data?.name}</i> record ?</h3>
       <button onClick={handleYes}>YES</button>  <button onClick={closeModal}>NO</button>
      </Modal>
    </div>
  );
}

export default DeleteEmployee;