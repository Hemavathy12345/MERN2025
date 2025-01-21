import { useState } from "react";
const Contact=()=>{

    var [num,setNum]=useState(0);

    return(
        <div  style={{ textAlign: "center" }}>
            <h1>THIS IS A CONATACT PAGE</h1>
            <h3>This is a State Example</h3>
            <h4>the Number is {num}</h4>
            <button onClick={()=>setNum(num+1)}>+</button>
        </div>
    )
}
export default Contact;