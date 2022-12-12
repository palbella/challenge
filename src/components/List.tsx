import useTasks from "../hooks/useTasks";
import { IToDo } from "../models/ToDo";
import store from "../store";

/**
 * 
 * UI was not required, this is a quick view just for testing
 */
function List() {

  const { data, toggleItem } = useTasks<IToDo>(store);

  function toogleItem(item: IToDo) {
    toggleItem(item)
  }

  return (<>
    {data.map(function (item, i) {
      return <>
        <div key={i}>{item.name + ' - ' + item.isComplete}
          <button onClick={() => toogleItem(item)}>
            Toggle!
          </button>
        </div>

      </>
    })}
  </>);
}

export default List;
