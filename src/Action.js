export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const reset = "RESET";


export function incrementCounter(){
    return {
        type: increment
    }
}

export function decrementCounter(){
    return {
        type: decrement
    }
}

export function resetCounter(){
    return {
        type: reset
    }
}