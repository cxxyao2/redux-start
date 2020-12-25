import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    // actions => action handlers
    bugAdded: (bugs, action) => {
      
    }
  }
});

// Action creators
export const bugAdded = createAction("bugAdded"); // type: bugAdded, payload: {...}
export const bugRemoved = createAction("bugRemoved"); // type: bugRemoved, payload: {...}
export const bugResolved = createAction("bugResolved"); // type: bugResolved, payload: {...}

// Reducer
let lastId = 0;

export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },
});
