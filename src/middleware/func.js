// SNA, store --next---action,
const func = ({ dispatch, getState }) => (store) => (next) => (action) => {
  if (typeof action === "function") action(dispatch, getState);
  else next(action);
};

export default func;
