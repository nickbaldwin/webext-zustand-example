import React from "react";
import { createRoot } from "react-dom/client";
import {  storeReadyPromise } from "../store";
import { PC } from "./PC";


storeReadyPromise.then(() => {
    createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <PC />
        </React.StrictMode>
    );
});