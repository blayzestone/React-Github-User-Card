import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {

  state = {
    userData: {}
  }

  componentDidMount() {
    // axios.get("https://api.github.com/users/blayzestone")
      // .then(res => {
      //   this.setState({ userData: res.data });
      // })
      // .catch(err => console.log(err));
    this.setState({
      userData: JSON.parse(localStorage.getItem("userData"))
    });
  }

  render() {
    return(
    <div className="App">
      <UserCard userData={this.state.userData}/>
    </div>
    );
  }
}

export default App;
