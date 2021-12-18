const initialState = {
  gitRepos: [],
  isLoading: false,
  isError: null,
  search: 'angular',
}

const FETCH_REPOS = 'FETCH_REPOS';
const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
const SEARCH_REPOS = 'SEARCH_REPOS';

export const gitReposReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REPOS: 
      return {...state, isLoading: true};
    case FETCH_REPOS_SUCCESS: 
      return {...state, isLoading: false, gitRepos: action.payload};
    case FETCH_REPOS_ERROR: 
      return {...state, isLoading: false, isError: action.payload};
    case SEARCH_REPOS: 
      return {...state, search: action.payload};
    default: 
      return state;
  }
}

export const fetchRepos = () => ({type: FETCH_REPOS});
export const fetchReposSuccess = (payload) => ({type: FETCH_REPOS_SUCCESS, payload});
export const fetchReposError = (payload) => ({type: FETCH_REPOS_ERROR, payload});
export const searchRepos = (payload) => ({type: SEARCH_REPOS, payload});