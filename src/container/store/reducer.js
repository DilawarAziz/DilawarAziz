let INITIAL_STATE = {
  users: []
 
};


export default function Reducer(state = INITIAL_STATE, action) {
//  {action&& console.log(action.user)};
  switch (action.type) {
    case "SETDATA":
      // console.log(payload);
      return {
        ...state,
        users:action.user
        
      };
    default:
      return state;
  }
}
