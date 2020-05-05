import React from 'react';
import UserCard from './UserCard';
import GridContainer from './GridContainer';

function CardList({ users, userData }) {
  return(
      <GridContainer>
        <UserCard userData={userData}/>
        {users.map(user => (
        <UserCard userData={user}/>
        ))}
      </GridContainer>
    );
}

export default CardList;