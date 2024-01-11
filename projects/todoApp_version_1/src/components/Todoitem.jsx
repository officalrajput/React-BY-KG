function Todoitem({TodoDate,TodoName})
{
  return <>
  <div className="container">
  <div class="row kg-row">
    <div class="col-4">
     {TodoName}
    </div>
    <div class="col-4">
     {TodoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-warning">Delete</button>
    </div>
  </div>
  </div>

  </>
}
export default Todoitem;