
import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button,Form,FormGroup,Label,Input } from 'reactstrap'

const Edit=({showModal,handleCloseModal,estadio})=>{

    const [name,setName]=useState(estadio.name)
    const [team,setTeam]=useState(estadio.team)
    const [country,setCountry]=useState(estadio.country)
    const [image,setImage]=useState(estadio.image)
    
    function configRequesOptions(data){
        return{
            method:"PUT",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }
    }

    //endpoint para editar
    const url_base="https://api-example-udb.onrender.com/api/list/"

    return (
       <>

       <Modal isOpen={showModal}>
        <ModalHeader>Desea editar el estadio{estadio.name} </ModalHeader>
        <ModalBody>
            Aqui irian los datos
        </ModalBody>
        <Form>
                 
                <FormGroup>
                    <Label for="name">
                    Estadio
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="nombre del estadio "
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </FormGroup>
               
            
            <FormGroup>
                <Label for="team">
                Equipo
                </Label>
                <Input
                id="team"
                name="team"
                value={team}
                placeholder="nombre del equipo de futbol"
                onChange={(e)=>{setTeam(e.target.value)}}
                />
            </FormGroup>
            <FormGroup>
                <Label for="country">
                País
                </Label>
                <Input
                id="country"
                name="country"
                value={country}
                placeholder="País en donde esta el estadio"
                onChange={(e)=>{setCountry(e.target.value)}}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">
                Url de la imagen
                </Label>
                <Input
                id="image"
                name="image"
                value={image}
                placeholder="Url de la imagen del estadio"
                onChange={(e)=>{setImage(e.target.value)}}
                />
            </FormGroup>
            
        </Form>
        <ModalFooter>
            <Button color='secondary' onClick={()=>{handleCloseModal()}}>
              Cancelar
            </Button>
        <Button color="primary" onClick={()=>{
            handleCloseModal()
            var url= url_base+estadio.id
            var data={
                name:name,
                team:team,
                country:country,
                image:image
            }
            fetch(url,configRequesOptions(data)).then(res=>res.json()).then(resjson=>console.log(resjson));
            window.location.reload(false)
            alert("Este estadio fue actualizado exitosamente")
            }}>
            Guardar

        </Button>
        </ModalFooter>
       </Modal>

       </>
    )
}

export default Edit