import { combineReducers } from "redux";
import { gitOneRepoReducer } from "./gitOneRepoReducer";
import { gitReposReducer } from "./gitReposReducer";


export const rootReducer = combineReducers({
  gitRepos: gitReposReducer,
  gitOneRepo: gitOneRepoReducer,
})