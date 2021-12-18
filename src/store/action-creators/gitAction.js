import axios from "axios";
import { fetchRepos, fetchReposError, fetchReposSuccess } from "../reducers/gitReducer";


export const getGitRepos = (search = 'angular') => {
  return async(dispatch) => {
    try {
      dispatch(fetchRepos());
      const response = await axios.get("https://api.github.com/search/repositories", {
        params: {
          q: search,
        }
      })
      dispatch(fetchReposSuccess(response.data.items));
    } catch(e) {
      dispatch(fetchReposError('something gone wrong'));
    }
  }
}