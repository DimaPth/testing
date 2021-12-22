const initialState = {
  gitOneRepo: {},
  isLoading: false,
  isError: null,
}

const FETCH_REPO = 'FETCH_REPO';
const FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS';
const FETCH_REPO_ERROR = 'FETCH_REPO_ERROR';

export const gitOneRepoReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REPO: 
      return {...state, isLoading: true};
    case FETCH_REPO_SUCCESS: 
      return {...state, isLoading: false, gitOneRepo: action.payload};
    case FETCH_REPO_ERROR: 
      return {...state, isLoading: false, isError: action.payload};
    default: 
      return state;
  }
}

export const fetchRepo = () => ({type: FETCH_REPO});
export const fetchRepoSuccess = (payload) => ({type: FETCH_REPO_SUCCESS, payload});
export const fetchRepoError = (payload) => ({type: FETCH_REPO_ERROR, payload});