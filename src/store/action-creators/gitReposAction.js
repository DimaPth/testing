import axios from "axios";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "../reducers/gitReposReducer";


export const getGitRepos = (search, sort) => {
  return async(dispatch) => {
    if(!search) dispatch(fetchReposSuccess([]))
    try {
      dispatch(fetchRepos());
      const response = await axios.get("https://api.github.com/search/repositories", {
        params: {
          q: search,
          sort: sort,
        }
      })
      dispatch(fetchReposSuccess(response.data.items));
    } catch(e) {
      dispatch(fetchReposError('something gone wrong')); 
    }
  }
}