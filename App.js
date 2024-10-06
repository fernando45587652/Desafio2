import {useEffect,useState} from 'react';
import './App.css';
import CardExample from './CardExample';
import CaroosuelExample from './CaroosuelExample';
import Formulario from './Form';

function App() {
  
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://api-example-udb.onrender.com/api/list').then(res=>res.json()).then(resjson=>setData(resjson))
    },[]);
  
    return (
      <div>
        <CaroosuelExample data={data}/>
        <div className='d-flex flex-row'>
          {data.map((item,index)=>{
            return(
              <>
              <CardExample item={item}/>
              </>
            )
          })}
        </div>
        <div style={{padding:'10%' }}>
        <Formulario/>
        </div>
      </div>
    );
  }
  
  export default App;
 