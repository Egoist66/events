import { emit } from "./event-emmiter.js";

emit({
    element: document.querySelector("button"),
    triggerEventName: "click",
    eventName: "alert",
    detail: { name: "John Doe" },
    handler: (e) => {
        console.log("Event emitted", e);
    },
});
