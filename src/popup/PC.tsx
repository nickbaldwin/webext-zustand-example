import React from "react";
import {BearState, useBearStore} from "../store/store";

export const PC: () => React.JSX.Element = () => {
    const bears = useBearStore((state: BearState) => state.bears);
    const increase = useBearStore((state: BearState) => state.increase);

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

