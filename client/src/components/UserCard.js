import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle,
} from 'reactstrap';

function UserCard(props) {
  const { avatar_url, login, bio, public_repos, followers, } = props.userData;

  return(
    <div>
      <Card
        style={{
          padding: "1rem",
          margin: "5%",
          backgroundColor: "#191970",
          color: "white",
        }}
      >
        <CardImg top src={avatar_url} />
        <CardTitle>{login}</CardTitle>
        <CardSubtitle>Repos: {public_repos}</CardSubtitle>
        <CardSubtitle>Followers: {followers}</CardSubtitle>
        <CardText>{bio}</CardText>
      </Card>
    </div>
  );
}

export default UserCard;