import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    };
  };

  componentDidMount(){
    axios.get("https://api.github.com/users/torvalds")
      .then(response => {
        this.setState({userData: response.data});
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log("error", error)
      })

      axios.get("https://api.github.com/users/torvalds/followers")
        .then(response => {
          this.setState({followers: response.data})
        })
        .catch(error => {
          console.log("error", error)
        })
  }

  render() {
    return (
      <div>
        <UserCard userData={this.state.userData} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
