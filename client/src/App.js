import React from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/CardList';

class App extends React.Component {

  state = {
    userData: {},
    followersData: [],
  }

  componentDidMount() {
    // axios.get("https://api.github.com/users/blayzestone")
      // .then(res => {
      //   this.setState({ userData: res.data });
      // })
      // .catch(err => console.log(err));
      // axios.get('https://api.github.com/users/blayzestone/followers')
      //   .then(res => {
      //     localStorage.setItem("followersData", JSON.stringify(res.data));
      //   })
      //   .catch(err => console.log(err));
    this.setState({
      userData: JSON.parse(localStorage.getItem("userData")),
      followersData: JSON.parse(localStorage.getItem("followersData")),
    });
  }

  render() {
    return(
    <div className="App">
      <CardList users={this.state.followersData} userData={this.state.userData}/>
    </div>
    );
  }
}

export default App;
