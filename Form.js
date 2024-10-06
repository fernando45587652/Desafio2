import React, { useState } from 'react'
import { Form,Row,Col,FormGroup,Label,Input,Button } from 'reactstrap'

const Formulario=()=>{

    //HOOK para obtener datos de los estadios
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [team,setTeam]=useState("")
    const [country,setCountry]=useState("")
    const [image,setImage]=useState("")

    //Configurar las opciones para la request
    function configRequesOptions(data){
        return{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }
    }
    
    //endpoint para agregar
    const url="https://api-example-udb.onrender.com/api/list"

    return(
        <Form>
            <Row>
                <Col md={5}>
                <FormGroup>
                    <Label for="id">
                    ID
                    </Label>
                    <Input
                    id="id"
                    name="id"
                    placeholder="id del estadio"
                    onChange={(e) => {setId(e.target.value)}}
                    />
                </FormGroup>
                </Col>
                <Col md={5}>
                <FormGroup>
                    <Label for="name">
                    Estadio
                    </Label>
                    <Input
                    id="name"
                    name="name"
                    placeholder="nombre del estadio "
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="team">
                Equipo
                </Label>
                <Input
                id="team"
                name="team"
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
                placeholder="Url de la imagen del estadio"
                onChange={(e)=>{setImage(e.target.value)}}
                />
            </FormGroup>
            <Button className='bg-success text-white' onClick={()=>{
                //la peticion hacia nuestra api
                var data={
                    id:id,
                    name:name,
                    team:team,
                    country:country,
                    image:image
                }
                fetch(url,configRequesOptions(data))
                window.location.reload(false)
                alert("Este estadio fue agregado exitosamente")
            }}>
                Estadio agregado exitosamente
            </Button>
        </Form>
    )
}

export default Formulario