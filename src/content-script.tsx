import React from "react";
import ReactDOM from "react-dom/client";
import { useBearStore, storeReadyPromise } from "./store/store";

const Content = () => {
    const bears = useBearStore((state) => state.bears);
    const increase = useBearStore((state) => state.increase);

    return (
        <div>
            Content
        <div>
        <span>Bears: {bears}</span>
        <br />
        <button onClick={() => increase(1)}>Increment +</button>
        </div>
        </div>
    );
};

storeReadyPromise.then(() => {

    const root: HTMLElement | null = document.getElementById('content-root');
    if (root) {
        ReactDOM.createRoot(root).render(
            <React.StrictMode>
                <Content />
            </React.StrictMode>
        );
    }
});