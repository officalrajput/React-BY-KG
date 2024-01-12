import { MdAddBox } from "react-icons/md";
function Addtodo()
{
  return <>
  <div className="container">
  <div class="row kg-row">
    <div class="col-4">
      <input type="text" placeholder="Enter Todo Here" />
    </div>
    <div class="col-4">
      <input type="date" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success"><MdAddBox /></button>
    </div>
   </div>
   </div>
   
    </>
}
export default Addtodo;