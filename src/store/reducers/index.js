import { combineReducers } from "redux";
import { gitReposReducer } from "./gitReducer";


export const rootReducer = combineReducers({
  git: gitReposReducer,
})