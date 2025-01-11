import { emit } from "./event-emmiter.js";

emit({
    element: document.querySelector("button"),
    triggerEventName: "click",
    eventName: "alert",
    detail: { name: "John Doe" },
    handler: async (e) => {
        console.log("Event emitted", e);
        if(e.type === 'alert'){

            const todo = await(await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
            console.log(todo);
        }
    },
});
