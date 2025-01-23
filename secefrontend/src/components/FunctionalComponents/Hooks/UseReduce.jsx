import {useReducer} from "react";
const initialState={
  count:0,
};
function reducer(state,action){
  switch (action.type){
    case "increment":
      return {count:state.count+1};
    case "decrement":
      return {count:state.count-1};
    case "reset":
      return {count:0};
    default:
      return state;
  }
}const UseReducerExample=()=>{
  const[state,setState]=useReducer(reducer, initialState);
  return(
    <div style={{ textAlign: "center" }}>
        <h1>This is a UseReducer Example</h1>
      <h2>{state.count}</h2>
      <button onClick={()=>setState({type:"increment"})}>Increment</button>
      <button onClick={()=>setState({type:"decrement"})}>Decrement</button>
      <button onClick={()=>setState({type:"reset"})}>Reset</button>
    </div>
  );
};

export default UseReducerExample;