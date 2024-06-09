function TodoItem2()
{
  let itemName="Go Shopping";
  let buydate="27/02/2024";
  return(
    <div className="container ">
        <div className="row my-row"
        >
          <div className="col-4">
            {itemName}
          </div>
          <div className="col-2">
          {buydate}</div>
          <div className="col-1">
          <button type="button" className="btn btn-danger my-button">Delete</button></div>
        </div>
      </div>

  );

}
 export default TodoItem2;