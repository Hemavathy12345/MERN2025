import { Component } from "react";

const trackingButtonComponents=(components)=>{
    return(props)=>{
        console.log("Hoc tracking Component");
        const handleClick=()=>{
            console.log("Logged in sucess",props.trackingInfo);
        }
        return(
            <div onClick={handleClick}>
                <input/>
                <Component {...props}/>
            </div>
        )
    }
}
export default trackingButtonComponents