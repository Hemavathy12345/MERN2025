import {memo} from "react";

const UpdateNumber = ({ value }) => {
    console.log("UpdateNumber Rendered");
    return <div>Counter 1 Value: {value}</div>;
};

export default memo(UpdateNumber)
