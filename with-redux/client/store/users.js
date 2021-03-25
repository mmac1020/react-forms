import axios from 'axios';

const GOT_USERS = 'GOT_USERS';
// Action Type
const NEW_USER_ADDED = 'NEW_USER_ADDED'

const gotUsers = (users) => {
  return {
    type: GOT_USERS,
    users,
  };
};

// Action Creator
const newUserActionCreator = (newUser) => {
  // Action
  return {
    type: NEW_USER_ADDED,
    newUser: newUser
  }
}

// thunk creator
export const fetchUsers = () => {
  // thunk
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users');
      dispatch(gotUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addUserThunkCreator = (user) => {
  return async (dispatch) => {
    try {
      console.log('USER', user);
      const { data } = await axios.post('/api/users', user);
      // after we get the data, we want to dispatch an action (but I haven't created one)
      dispatch(newUserActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
    case NEW_USER_ADDED:
      return [...state, action.newUser]
    default:
      return state;
  }
};
