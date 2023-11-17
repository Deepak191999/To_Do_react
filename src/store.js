import { createStore,combineReducers } from "redux";

//reducer import
import todoReducer from "./reducers/todoReducer";
const reducer = combineReducers({todo: todoReducer});
const store = createStore(reducer);

export default store;