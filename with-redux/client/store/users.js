import axios from 'axios';

const GOT_USERS = 'GOT_USERS';

const gotUsers = (users) => {
  return {
    type: GOT_USERS,
    users,
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

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_USERS:
      return action.users;
    default:
      return state;
  }
};
