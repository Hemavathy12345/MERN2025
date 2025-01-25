import { memo } from "react";

const UpdateNumber1 = ({ value }) => {
    return <div>Value: {value}</div>;
};

export default memo(UpdateNumber1);
