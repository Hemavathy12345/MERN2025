import { useContext } from "react"
import { TheamProvider } from "../Hooks/UseContext"

const ExamResult = () => {
    const res=useContext(TheamProvider)
    return (
        
        <div>
        
            <h3>Exam result published is in process and SGPA {res.sgpa} AND The CGPA is {res.cgpa}</h3>
        </div>

    )
}
export default ExamResult