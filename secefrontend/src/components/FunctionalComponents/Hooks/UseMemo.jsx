import {useMemo,useRef,useEffect,useState} from "react";
var SlowFunction=(num)=>{
for(var slow =0;slow<10000;slow++){}
return num*2
}


const UseMemo = () => {
    var [num, setNum] = useState(0);
    var [dark, setDark] = useState(false);
    var styling ={
        backgroundColor:dark?"black":"white",
        color:dark?"white":"black"
    }
    var doublingUpANumber=useMemo(()=>{
        return SlowFunction(num)
    },[num])
    return(
        <div style={styling} >   
        <h1>
            This is useMemo</h1>
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>setDark(curTheme=>!curTheme) }>Toogle</button>
            <h4 >The number is {doublingUpANumber}</h4>
        </div>
    )
}
export default UseMemo
