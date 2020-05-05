import React from 'react';
import UserCard from './UserCard';

function CardList({ users }) {
  return(
      <div>
        {users.map(user => (
        <UserCard userData={user}/>
        ))}
      </div>
    );
}

export default CardList;