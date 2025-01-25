import useLocalStorage from "./CustomHooks/SampleCustomHook";

const UseLocalStorage=()=>{
    var [text,setText]=useLocalStorage("customer id"," ")
    var [pass,setPass]=useLocalStorage("Password"," ")
return(
    <div>
        <h2>Utilizing Custom Hook created</h2>
        <input type="text" value={text} onChange={(e)=>setText()}></input>
        <input type ="password" value={pass} onChange={(e)=>setPass()}></input>
        <h3> the text is {text}</h3>
    </div>
)
}
export default UseLocalStorage;