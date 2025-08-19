import React from 'react'

const Sixth = () => {

     const flowers =["Rose","Lily","Tulip","Sunflower","Jasmine"]
    
  return (
    <div>
        <h2>Conditional + Looping</h2>
        {flowers.length>0?(
        <ul>
            {flowers.map((flower,index)=>(
                <li key={index}>{flower}</li>
            ))
            }
        </ul>
        ):(
            <P>No flowers available.</P>
        )
    }
    </div>
  )
}

export default Sixth