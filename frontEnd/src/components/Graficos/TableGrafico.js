import React from 'react'
import Table from 'react-bootstrap/Table'


export default function TabelaGrafico(props) {
  
  const valores = props.values
  return(
    <div>
     
    <Table striped bordered hover variant="dark" >
     <thead>
       <tr>
         <th>#</th>
         <th>UF</th>
         <th>Cidade</th>
         <th>Relatos</th>
         <th>De Agressão Fisica</th>
         <th>Policia foi acionada</th>
         
       </tr>
     </thead>
     <tbody>
       {
         valores.map(val => {
         return (<tr key={val.position}>
           <td>{val.position}</td>
           <td>{val.uf}</td>
           <td>{val.cidade}</td>
           <td>{val.TotalRegistros}</td>
           <td>{val.AgresãoFisica}</td>
           <td>{val.CasosPoliciais}</td>
         
         </tr>)
         })
       }
       
     </tbody>
   </Table>

   </div>
  )
}
