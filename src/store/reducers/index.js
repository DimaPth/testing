import { combineReducers } from "redux";
import { gitReposReducer } from "./gitReposReducer";


export const rootReducer = combineReducers({
  git: gitReposReducer,
})