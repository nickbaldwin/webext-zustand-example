import React from "react";
import { useBearStore } from "../store";

export const PC: () => React.JSX.Element = () => {
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increase);

    return (
        <div>
            Popup
            <div>
                <span>Bears: {bears}</span>
                <br />
                <button onClick={() => increase(1)}>Increment +</button>
            </div>
        </div>
    );
};

