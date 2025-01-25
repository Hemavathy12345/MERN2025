import React, { useState } from "react";
import UpdateNumber from "./UpdateNumber";
import UpdateNumber1 from "./UpdateNumber1";

const Memo = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    return (
        <div>
            <h1>This page is meant for optimization process using React.memo</h1>
            <UpdateNumber value={counter1} />
            <button onClick={() => setCounter1(counter1 + 1)}>Increase Counter 1</button>
            <UpdateNumber1 value={counter2} />
            <button onClick={() => setCounter2(counter2 + 5)}>Increase Counter 2</button>
        </div>
    );
};

export default Memo;
