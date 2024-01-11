import './App.css'
import Addtodo from './components/Addtodo';
import AppName from './components/AppName';
import Todoitem from './components/Todoitem';
function App(){
  let items =[{
    name:"BY MILK",
    duedate:"02/02/2006"

  },
{
  name:"COLLEGE",
    duedate:"02/09/2008"
},
{
  name:"COLLEGE WALA",
    duedate:"02/09/2040"
},
{
  name:"COLLEGE",
    duedate:"02/09/2008"
},
{
  name:"COLLEGE WALA",
    duedate:"02/09/2040"
}]
   
  
  return <>
  <center className="todo-container">
    <AppName></AppName>
  <Addtodo></Addtodo>
  <div className="listitem">
    
 {items.map((item) => ( <Todoitem TodoDate={item.duedate} TodoName={item.name}></Todoitem>))}
  
  </div>
    
  </center>
     </>
}

export default App;