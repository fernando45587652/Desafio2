
import React from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button,Form,FormGroup,Label,Input} from 'reactstrap'

 const Delete=({showModal,handleCloseModal,estadio})=>{

    //endpoint para editar
    const url_base="https://api-example-udb.onrender.com/api/list/"
    return(
        <Modal isOpen={showModal}>
        <ModalHeader>Borrar{estadio.name}</ModalHeader>
        <ModalBody>
            ¿Esta seguro de eliminar el estadio{estadio.name} ?
        </ModalBody>
        <ModalFooter>
        <Button color='secondary' onClick={()=>{handleCloseModal()}}>
              Cancelar
            </Button>
            <Button color="danger" onClick={()=>{
            handleCloseModal();
            var url=url_base+estadio.id
            console.log(url)

    
        fetch(url,{
            method:'DELETE'
        }).then(res=>res.json()).then(resjson=>console.log(resjson));
            window.location.reload(false);
            alert("El estadio"+estadio+"se ha eliminado")
        }}>
        Borrar

    </Button>
        </ModalFooter>
       </Modal>
    )
}

export default Delete