import  { createContext} from "react";
import Invigilator from "../ContextComponent/Invigilator"

export const TheamProvider=createContext()
const Student=()=>{
return(
    <div>
        <TheamProvider.Provider value={{sgpa:9.5,cgpa:6.5}}>
        <h2>This is The Example of UseContext Tool Which is the Alternative for props Drilling</h2>
        <h2>Students are writting their Exams</h2>
        <Invigilator />
        </TheamProvider.Provider>
    </div>
)
}
export default Student
