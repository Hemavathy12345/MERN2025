import { useState ,useEffect} from "react"
const UseEffect=()=>{
    var [text,setText]=useState("");
    useEffect=()=>{
      console.log(text)
    }   
    return(
        <div>
            <h1>
This is useEffect Example
            </h1>
            <input type="number"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
            <input type="number"  value={text} onChange={(e)=>setText(e.target.value)}/>
            <h4>The text is {text}</h4>
        </div>
    )
}
export default UseEffect