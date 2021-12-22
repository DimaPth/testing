import axios from "axios";
import { fetchRepo, fetchRepoError, fetchRepoSuccess } from "../reducers/gitOneRepoReducer";


export const getOneGitRepo = (owner, repo) => {
  return async(dispatch) => {
    try {
      dispatch(fetchRepo());
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`)
      dispatch(fetchRepoSuccess(response.data));
    } catch(e) {
      dispatch(fetchRepoError('something gone wrong')); 
    }
  }
}