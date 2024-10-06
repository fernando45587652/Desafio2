import React, { useState } from 'react'
import { Card,CardBody,CardTitle,CardSubtitle,CardText,Button,Row,Col } from 'reactstrap'
import Edit from './Edit'
import Delete from './Delete'

const CardExample=({item})=> {
  const [showModal,setShowModal]=useState(true)
  const handleShowModal=()=>setShowModal(true)
  const handleCloseModal=()=>setShowModal(false)
  const [showModalDelete,setShowModalDelete]=useState(true)
  const handleShowModalDelete=()=>setShowModalDelete(true)
  const handleCloseModalDelete=()=>setShowModalDelete(false)

    return (
        <Card className='col-2'>
  <img
    alt=''
    src={item.image}
    height={'50%'}
    width={'100%'}
  />
  <CardBody>
    <CardTitle tag="h5">
      {item.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {item.team}
    </CardSubtitle>
    <CardText>
      {item.country}
    </CardText >
    <Row >
      <Col md={6}>
      <Button color="success" onClick={()=>{handleShowModal()}}>
      Editar
      </Button>
      
      </Col>
      <Col md={6}>
      <Button color="danger" onClick={()=>{handleCloseModalDelete()}}>
      Borrar
    </Button>
      </Col>
    </Row>
    <Edit showModal={showModal} handleCloseModal={handleCloseModal} estadio={item}/>
    <Delete showModal={showModalDelete} handleCloseModal={handleCloseModalDelete} estadio={item} />
  </CardBody>
</Card>
    )
}

export default CardExample
    