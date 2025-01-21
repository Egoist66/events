import { emit, toDetail } from "./event-emmiter.js";

emit({
    element: document.querySelector("button"),
    triggerEventName: "click",
    eventName: "alert",
    detail: { todos: 1 },
    handler: async (e, detail) => {
        console.log(detail);
        if(e.type === 'alert'){

            const todo = await(await fetch(`https://jsonplaceholder.typicode.com/todos/${detail.todos}`)).json();
            console.log(todo);
            
        }
    },
});

emit({
    element: document.body,
    triggerEventName: 'dblclick',
    eventName: 'double-tap',
    detail: {bgColor: 'red'},
    handler(e, detail){

        e.target.style.backgroundColor = detail.bgColor;

        console.log(detail);

        const changeBackgroundColor = () => {
            toDetail(detail, {
                key: 'bgColor',
                value: `#${Math.floor(Math.random() * 16777215).toString(16)}`
            });

            e.target.style.backgroundColor = detail.bgColor;
        };

        const interval = setInterval(changeBackgroundColor, 1000);

        window.addEventListener('blur', () => {
            document.title = 'Blur';
            clearInterval(interval);
        });



    

      
    }
})
