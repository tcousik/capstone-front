import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import FormsContainer from './components/forms/FormsContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserList from './components/UserList'
import CityDisplayer from './components/cities/CityDisplayer'
import ProfileContainer from './components/profile/ProfileContainer'
import UserTable from './components/UserTable'
import UserTable2 from './components/usertable2'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      cities: [{
        name: "Denver",
        image: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
      }, {
        name: "Boulder",
        image: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
      }, {
        name: "Colorado Springs",
        image: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
      }, {
        name: "Fort Collins",
        image: "https://timedotcom.files.wordpress.com/2018/12/lion-conservators-center.jpg"
      }, {
        name: "Breckenridge",
        image: "https://timedotcom.files.wordpress.com/2018/12/lion-conservators-center.jpg"
      }, {
        name: "Durango",
        image: "https://timedotcom.files.wordpress.com/2018/12/lion-conservators-center.jpg"
      }]
    }
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers = () => {
      let url = "http://localhost:3000/users"
      fetch(url)
      .then(response => response.json())
      .then(result => this.setState({users: result}))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path='/cities' render={ props => <CityDisplayer {...props} cities={this.state.cities}/>}/>
          <Route path='/profile' component={ProfileContainer} />
          <Route path='/login' component={FormsContainer} />
          <h1 className="Header">WELCOME!</h1>
          <UserTable />
        </div>
      </Router>
    )
  }
}
