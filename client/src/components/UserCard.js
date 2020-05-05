import React from 'react';
import {
  Card, CardText,
  CardTitle, CardSubtitle,
} from 'reactstrap';

function UserCard(props) {
  const { login, bio, public_repos, followers, } = props.userData;

  return(
    <div>
      <Card>
        <CardTitle>{login}</CardTitle>
        <CardSubtitle>Repos: {public_repos}</CardSubtitle>
        <CardSubtitle>Followers: {followers}</CardSubtitle>
        <CardText>{bio}</CardText>
      </Card>
    </div>
  );
}

export default UserCard;