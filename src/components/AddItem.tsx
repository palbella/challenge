import { makeid } from "../helpers/Helper";
import useCustomDispatch from "../hooks/useCustomDispatch";
import { IToDo, ToDoModel } from "../models/ToDo";
import store from "../store";

/**
 * 
 * UI was not required, this is a quick view just for testing
 */
function AddItem() {

  const { data, addItem, removeItem } = useCustomDispatch<IToDo>(store);

  function addNewItem() {
    const newItem = new ToDoModel();
    newItem.id = makeid(10);
    newItem.name = 'task';

    addItem(newItem);
  }

  function removeFirstItem() {

    removeItem(data[0]);
  }

  return (
    <>
      <button onClick={addNewItem}>
        Add!
      </button>
      {data && data.length != 0 && <button onClick={removeFirstItem}>
        Remove First!
      </button>}
    </>
  )
}

export default AddItem;
