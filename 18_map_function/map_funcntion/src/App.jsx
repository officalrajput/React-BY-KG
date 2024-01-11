import Errormessage from "./ErrorMessage";
import ItemPresent from "./ItemPresent";
import Input from "./input";
import './App.css'
import { useState } from "react";
// import './App.css'
function App() {
  

  let [ItemsPresent,changeState]=useState([]);
  // let ItemsPresent = [];
 //we also destructure the array also but this this brackets "[]" in plac eof this {}
  // let [currentState,changeState]=useState("here is new item is added")
  // let currentState=textStateArr[0];
  // let changeState=textStateArr[1];
  // console.log(`change state :${currentState}`);
  


 
  let handleKeyChange=(event) =>{
    
    if(event.key=="Enter")
    {
     
      let newItemPresent=event.target.value;
      event.target.value="";
      let addingItem=[...ItemsPresent,newItemPresent];
      
        changeState(addingItem);
    }

  }

  return (
    <div className="borders">
      <h1 className="RR-div">ingrediants</h1>
   <Input handleKeyChange={handleKeyChange}></Input>

     {/* <h2>{ItemsPresent}</h2> */}
      <Errormessage items={ItemsPresent}></Errormessage>
      <ItemPresent items={ItemsPresent}></ItemPresent>
    </div>
  );
}
export default App;
