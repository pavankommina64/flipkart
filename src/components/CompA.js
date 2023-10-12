import React from 'react'
export default function CompA(props) {
  return (
    <>
    <table border={2}>
        <tr>
            <th>name</th>
            <th>rollno</th>
        </tr>
   {
       props.data.map((e,i)=>   
       {
           return(
           <>
           <tr>
              <td>{e.name}</td>
              <td>{e.rollno}</td>
              </tr>
           </>
           )
       }
       )
   }  
    </table>
    </>
  )
}