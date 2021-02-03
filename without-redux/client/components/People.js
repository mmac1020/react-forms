import React from 'react';

const People = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return (
          <div className='person' key={person.id}>
            <div> Hi {person.name}! </div>
            <div> Your job is: {person.job} </div>
            <div> Your favorite food is: {person.favoriteFood} </div>
          </div>
        );
      })}
    </div>
  );
};

export default People;
