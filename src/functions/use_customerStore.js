import store from "./customerStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("store changed!");
});
store.dispatch(actions.bugAdded("Bug 1"));

console.log(store.getState());
