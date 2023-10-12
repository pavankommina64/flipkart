import React from 'react'

 function CompA(props) {
  return (
    <>
    <table border={1}>
        <tr>
            <th>name</th>
            <th>roll</th>
        </tr>
    {
        
        props.data.map((e,i)=>{
            return(

                <>
                 <tr>
                    <td>{e.name}</td>
                    <td>{e.roll}</td>
                 </tr>
              
               
                   
                

                </>
            )

        })

        
    }
    </table>
   
    <div>
        <h1>CompA</h1>
        <h1>{typeof props.data}</h1>
        </div>
        </>
  )
}
export default CompA;