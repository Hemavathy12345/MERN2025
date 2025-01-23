
import {useCallBack, useState} from 'react'
const UseCallBack=()=>{
    var [num,setNum]=useState(0);
    var [dark,setDark]=useState(true);
    var Styling={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
   return(
    <div style={Styling}>
        <h1>This is useCallback</h1>
        <button onClick={()=>setDark(curTheme=>!curTheme)}>Theme</button>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
    </div>
   )
}
export default UseCallBack