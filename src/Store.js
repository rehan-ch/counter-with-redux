import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer";

const Store = createStore(CounterReducer);
export default Store;