import React from 'react'
import { Col, Row } from "react-bootstrap";

const Catagory = ({filterbyCategory,allCategory }) => {


  return (
   <Row className='my-2 mb-5'>
    <Col sm="12" className='d-flex justify-content-center'>
    {
        allCategory.length >= 1 ? (
          allCategory.map((cat)=>{
            return(
              <div key={Math.random()} className=''>
      
              <button onClick={()=>filterbyCategory(cat)} style={{border:"1px solid #b45b35"}} className='btn1 mx-2'>{cat}</button>
              {/* <button onClick={()=>filterbyCategory("Fruhstuk")} style={{border:"1px solid #b45b35"}} className='btn1 mx-2'>Frühstück</button>
              <button onClick={()=>filterbyCategory("mittagessen")} style={{border:"1px solid #b45b35"}} className='btn1 mx-2'>Mittagessen</button>
              <button onClick={()=>filterbyCategory("abendessen")} style={{border:"1px solid #b45b35"}} className='btn1 mx-2'>Abendessen</button> */}
                  </div>
            )
          })
        ) :<h4> es gibt kein Data </h4>

      }
    
    </Col>
   </Row>
  )
}

export default Catagory