// import React from "react";
// class Removeproducts extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             pcode:"",
//             pquantity:""
//          }
//          this.remove=(e)=>{
//              e.preventDefault();
         
           
//          }
//     }
//     render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-4"></div>
//           <div className="col-4">
//             <form onSubmit={this.remove}>
//               <div className="jumbotron">
//                 <div class="mb-3">
//                   <label for="productcode" className="form-label">
//                     Product Code
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="productcode"
//                     id="productcode"
//                     value={this.state.pcode}
//                     onChange={(e) => this.setState({ pcode: e.target.value })}
//                   />
//                 </div>
              
//                 <div class="mb-3">
//                   <label for="quantity" className="form-label">
//                     Product Quantity
//                   </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="quantity"
//                     id="quantity"
//                     value={this.state.pquantity}
//                     onChange={(e) =>
//                       this.setState({ pquantity: e.target.value })
//                     }
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//           <div className="col-4"></div>
//         </div>
//       </div>
//     );
//   }
// }
 
// export default Removeproducts;

//<button type="button" onClick={()=>deletehandler(lis.id)}  key={lis.id}>delete</button>



import  "./Removeproducts.css";


function Removeproducts(props) {
    const deletehandler=(id)=>{
props.getListid(id);
    }

    return ( <div>
       
        <table class="table" >
          <thead>
            <tr>
         
              <th scope="col">product code</th>
              <th scope="col">product name</th>
              <th scope="col">quantity</th>
              <th scope="col">remove</th>
            </tr>
          </thead>
          <tbody>
          {props.list.map((product, index) => (
                 <tr>
                
                 <td>{product.pcode}</td>
                 <td>{product.pname}</td>
                 <td>{product.pquantity}</td>
                 <td><button className="btn" type="button" onClick={()=>deletehandler(product.id)}  key={product.id}>delete</button></td>
               </tr>
                 ))}
          
          
          </tbody>
        </table>
            </div> );
}

export default Removeproducts;