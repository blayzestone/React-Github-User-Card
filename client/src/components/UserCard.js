import React from 'react';
import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle
} from 'reactstrap';

function UserCard(props) {
  const { 
    avatar_url, 
    login, 
    bio, 
    html_url, 
    public_repos, 
    followers, 
  } = props.userData;

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
        <CardSubtitle>{ public_repos ? `Repos: ${public_repos}` : ""}</CardSubtitle>
        <CardSubtitle>{ followers ? `Followers: ${followers}` : ""}</CardSubtitle>
        <CardText>{bio}</CardText>
        <a className="btn btn-secondary" href={html_url}>Visit Profile</a>
      </Card>
    </div>
  );
}

export default UserCard;