import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';






function App() {
  
 const [colorchange,setColorchange] = useState("")


  return (
    <>
      <div  style={{height:'40vh'}}  className=' mt-5 d-flex justify-content-center align-items-center '>
        <div className='text-center' >
            
          <h1 style={{fontSize:'50px',fontWeight:'revert'}}>Background-color-change</h1>
          <div className='d-flex justify-content-between  align-items-center mt-5'></div>



         <Button onClick={()=>setColorchange('red')} style={{color:'black' ,backgroundColor:'red',width:'100px'}} variant="outline-secondary" className='mx-2'>Red</Button>{' '}

          <Button onClick={()=>setColorchange('Blue')} style={{color:'black' ,backgroundColor:'blue',
          width:'100px'}} variant="outline-secondary" className='mx-2'>Blue</Button>{' '}
          
          <Button onClick={()=>setColorchange('yellow')} style={{color:'black' ,backgroundColor:'yellow',width:'100px'}} variant="outline-secondary" className='mx-2'>Yellow</Button>{' '}

          <Button onClick={()=>setColorchange('pink')} style={{color:'black' ,backgroundColor:'pink',width:'100px'}} variant="outline-secondary" className='mx-2'>Pink</Button>{' '}

          <a className='btn bg-black text-white' onClick={()=>setColorchange('')}>Reset</a>


          </div>
          
    </div>
    <div  className='   d-flex justify-content-center align-items-center '>
      <div style={{height:'300px',width:'500px',backgroundColor:`${colorchange}`}} className='border rounded-5 '>
              <div style={{height:'300px'}} className='d-flex align-items-center justify-content-center'>
                <h3 className='text-black'>{colorchange}</h3>
              </div>
      </div>


    </div>
    </>
  );
}

export default App;