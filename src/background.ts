import store from "./store/store";

// listen state changes
store.subscribe((state) => {
    console.log(state);
});