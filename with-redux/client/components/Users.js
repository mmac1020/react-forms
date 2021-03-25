import React from 'react';
import { connect } from 'react-redux';

const Users = (props) => {
  return (
    <div className='container-users'>
      {props.users.map((user) => {
        return (
          <div className='user' key={user.id}>
            <div> Hi {user.name}! </div>
            <div> Your job is: {user.job} </div>
            <div> Your favorite food is: {user.favoriteFood} </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Users);
