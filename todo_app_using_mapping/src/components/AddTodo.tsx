function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-4">
          <input type="text" placeholder="Enter the todo item" />
        </div>
        <div className="col-2">
          <input type="date" placeholder="Enter the date" />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
