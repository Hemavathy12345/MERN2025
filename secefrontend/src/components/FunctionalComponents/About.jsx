import {useState} from "react"
const About = ()=>{
    var [text,setText]=useState("Hema")
    function handleText(e){
        setText(e.target.value)
    }
    return (
        <div  style={{ textAlign: "center" }}>
            <h2>THIS IS A FUNCTIONAL COMPONENRT</h2>
            <h2>TextArea:</h2>
            {/* <textarea value={text} onChange={(event)=>setText(event.target.value)}/> */}
            <textarea value={text} onChange={handleText}/>
            <p>The text is {text}</p>
        </div>
    )
}
export default About