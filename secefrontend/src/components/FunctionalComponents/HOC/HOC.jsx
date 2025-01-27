import React from "react";
import Button from "./Button";
import trackingButtonComponents from "./trackingButtonComponents";

const HOC = () => {
    const ButtonTracking = trackingButtonComponents(Button);

    return (
        <div>
            <h1>This is an HOC Example</h1>
            <ButtonTracking
                name="Login"
                trackingInfo={{ username: "user123", password: "pass123" }}
            />
        </div>
    );
};

export default HOC;
