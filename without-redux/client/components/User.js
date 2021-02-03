import React from 'react';

const Users = (props) => {
  return (
    <div>
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

export default Users;
