import AddItem from "./components/AddItem";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./store";

function App() {



  return (
    <Provider store={store}>
      <div className="App">
        <div>App</div>
        <AddItem></AddItem>
        <List></List>
      </div>
    </Provider>
  )

}

export default App;
