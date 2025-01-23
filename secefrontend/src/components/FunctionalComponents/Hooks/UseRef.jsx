import {useRef , useState,useEffect} from 'react'
const UseRef=()=>{
    var [text,setText]=useState("")
    var prevRender=useRef("")
useEffect(()=>{
    prevRender.current=text
},[text])
    return(
        <div>
            <h2>This is a UseRef</h2>
            <input type="text " value={text} onChange={(e)=>setText(e.target.value)} />
            <h2>The Text Is {text}</h2>
            <h5>The Previous Text Is {prevRender.current}</h5>
        </div>
    )
}
export default UseRef;