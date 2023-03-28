export const increment = "INCREMENT";
export const decrement = "DECREMENT";

export const CounterIncrement = ()=>(
    {
        type: increment
    }
);

export const CounterDecrement = ()=>(
    {
        type: decrement
    }
);
