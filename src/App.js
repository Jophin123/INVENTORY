
import './App.css';
import Home from './Home';
import { BrowserRouter, Switch,Route, Link  } from "react-router-dom";
import Addproducts from './Addproducts';
import Removeproducts from './Removeproducts';
import Listproducts from './Listproducts';
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
function App() {
  const LOCAL_STORAGE_KEY="list"
const[list,setList]=useState([])
  const addData = (data) =>{
    console.log(data);
    setList([...list,{id : uuidv4(), ...data}]);
    console.log(list);
  }
  const removehandler=(id)=>{
    const newRemoveList=list.filter((lis)=>{
return lis.id !== id;
    })
    setList(newRemoveList)
  }
  useEffect(()=>{
   const retriveList= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveList) setList(retriveList);
      },[]);
  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(list))
  },[list]);
  return (
    <div className="App">
      <BrowserRouter>
     <ul>
       <li>
         <Link to="/"></Link>
       </li>
       <li>
         <Link to="/">back</Link>
       </li>
     </ul>
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path='/Addproducts'>
         <Addproducts addData={addData}/>
         </Route> 
         <Route path='/Removeproducts'>
         <Removeproducts list={list} getListid={removehandler}/>
         </Route> 
         <Route path='/Listproducts'>
         <Listproducts  list={list}/>
         </Route> 
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
