import { useState } from "react";
import Loginform from "./components/Loginform";

function App()
{
  return<>
  <Loginform></Loginform></>
// const [myName ,setMyName]=useState("Heloo my name is Ranu Rajput")
//   const changed=(event)=>{
//     let val=myName;
//     if(val==="Heloo my name is Ranu Rajput")
//     {
//       setMyName("chnaged the name to Arnav");
//     }
//     else{
//       setMyName("Heloo my name is Ranu Rajput");
      
//     }

//  let arr=[26,27,];
// const bioData=[
//   {
//    id:0, name:"Vinod",age:27
//   },
//   {
//     id:1,name:"Rajput",age:34
//   },
//   {
//     id:2,name:"king",age:37
//    },
// ]

// const [myArr,setMyArr]=useState(bioData);

// let Clear=()=>{
//   setMyArr([]);

// }

// let removeElem =(id)=>{
//   let newArray=myArr.filter((event)=>{
//      return event.id !== id;
//   })

//   setMyArr(newArray);
// }



//   return <>
// {/* { arr.map((event) =>(<h1 key={event}>Vinod age:{(event)}</h1>))} */}
  
// {myArr.map((event)=>(<h1 key={event.id}>{event.name} {event.age} <button onClick={() => removeElem(event.id)}>remove</button></h1>))}
// <button onClick={Clear}>Clear</button>

//   {/* <h1>{myName}</h1>
//   <button onClick={changed}>CLICK ME</button></> */}
//   </>
//    }
}
export default App;