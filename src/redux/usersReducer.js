const GET_USERS = 'GET_USERS';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

import { fetchUsers } from 'app/src/services/api';

console.log('fetchUserszz', fetchUsers);

const initialState = {
  users: [],
  loading: false,
  error: false
}

export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: [],
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}


const getUsersPending = () => {
  console.log('getUsersPending');
  return {
    type: GET_USERS
  }
}

const getUsersSuccess = data => {
  console.log('getUsersSuccess', data);
  return {
    type: GET_USERS_SUCCESS,
    users: data,
  }
}

const getUsersFailure = err => {
  console.log('getUsersFailure', err);
  return {
    type: GET_USERS_FAILURE,
    error: err
  }
}

export const getUsers = () => {
  console.log('fetchUserzz');
  return dispatch => {
    dispatch(getUsersPending());
    fetchUsers()
      .then(data => {
        dispatch(getUsersSuccess(data));
      })
      .catch(err => {
        console.log('err:', err);
        dispatch(getUsersFailure(err));
      });
  }
}
