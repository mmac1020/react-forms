import axios from 'axios';

const GOT_USERS = 'GOT_USERS';
const ADD_USER = 'ADD_USER';

const gotUsers = (users) => {
  return {
    type: GOT_USERS,
    users,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/users');
      dispatch(gotUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/users', user);
      dispatch(addUser(data));
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
    // state: [...Users]
    case ADD_USER:
      return [...state, action.user];
    // state: [...Users +++++ action.user]
    default:
      return state;
  }
};
