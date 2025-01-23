import { useEffect, useState } from "react";

const ListItems = ({ func }) => {
    var [numbers, setNumbers] = useState([])
    useEffect(() => {
        setNumbers(func())
    }
        , [func])
    return (

        <div>
            <h3>this number list is as follows according to the number present in input box</h3>
            {numbers.map((number ,index) => {
                return<h4 key={index}>{number}</h4>})}
        </div>
    )
}
export default ListItems;