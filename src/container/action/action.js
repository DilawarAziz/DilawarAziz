const foo = (user) => {
  // console.log(user)
  return (dispatch) => {
    dispatch({
      type: "SETDATA",
     user:user 
    });
  };
};

export default foo;
