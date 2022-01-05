function Listproducts(props) {

    return ( <div>
       
<table class="table" >
  <thead>
    <tr>
 
      <th scope="col">product code</th>
      <th scope="col">product name</th>
      <th scope="col">quantity</th>
    </tr>
  </thead>
  <tbody>
  {props.list.map((product, index) => (
         <tr>
        
         <td>{product.pcode}</td>
         <td>{product.pname}</td>
         <td>{product.pquantity}</td>
       </tr>
         ))}
  
  
  </tbody>
</table>
    </div> );
}

export default Listproducts;