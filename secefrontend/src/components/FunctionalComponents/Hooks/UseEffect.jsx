import { useState ,useEffect} from "react"
const UseEffect=()=>{
    var [text,setText]=useState("");
    var [text2,setText2]=useState("");
    useEffect(()=>{
      console.log(text)
      console.log(text2)
    },[text,text2])  
    return(
        <div>
            <h1>
This is useEffect Example
            </h1>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
            <input type="text"  value={text} onChange={(e)=>setText2(e.target.value)}/>
            <h4>The text is {text2}</h4>
        </div>
    )
}
export default UseEffect