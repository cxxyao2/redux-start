import configureStore, from "./store/configureStore";
import * as actions from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// add a listener
store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(userAdded({ name: "User 1" }));
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(actions.bugAdded({ description: "Bug 1" }));
// store.dispatch(actions.bugAdded({ description: "Bug 2" }));
// store.dispatch(actions.bugAdded({ description: "Bug 3" }));
// store.dispatch(actions.bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(actions.bugResolved({ id: 1 }));

// const x = actions.getUnresolvedBugs(store.getState());
// const y = actions.getUnresolvedBugs(store.getState());

const bugs = actions.getBugsByUser(1)(store.getState());
console.log(bugs);
