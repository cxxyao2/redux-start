const toast = (store) => (next) => (action) => {
  if (action.type === "error")
    console.log("Toast  is ", action.payload.message);
  else return next(action);
};

export default toast;
