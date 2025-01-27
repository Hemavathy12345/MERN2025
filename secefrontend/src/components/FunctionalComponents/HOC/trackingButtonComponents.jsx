import React, { useState } from "react";

const trackingButtonComponents = (WrappedComponent) => {
    return (props) => {
        const [text, setText] = useState("");
        const [pass, setPass] = useState("");

        const handleClick = () => {
            console.log("Logged in successfully:", props.trackingInfo);
        };

        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter username"
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter password"
                />
                <button onClick={handleClick}>Submit</button>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default trackingButtonComponents;
