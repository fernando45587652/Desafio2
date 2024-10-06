import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const CaroosuelExample=({data})=> {

  const width = window.innerWidth
  const height =  window.innerHeight
  
  const slides=[]
  data.map((item,index)=>{
    slides.push({
      altText: item.name,
      caption: item.team,
      key: index,
      src: data[index].image
    })
})

    return (
      <>
        
        <UncontrolledCarousel
          items={slides}
          style={{width:width,height:height}}
        />
  </>
  )
}

export default CaroosuelExample