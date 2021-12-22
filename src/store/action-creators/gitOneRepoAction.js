import axios from "axios";
import { fetchRepo, fetchRepoError, fetchRepoSuccess } from "../reducers/gitOneRepoReducer";


export const getOneGitRepo = (repoName) => {
  return async(dispatch) => {
    try {
      dispatch(fetchRepo());
      const response = await axios.get(`https://api.github.com/repos/${repoName}`)
      dispatch(fetchRepoSuccess(response.data));
    } catch(e) {
      dispatch(fetchRepoError('something gone wrong')); 
    }
  }
}