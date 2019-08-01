import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import FormsContainer from './components/forms/FormsContainer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserList from './components/UserList'
import CityDisplayer from './components/cities/CityDisplayer'
import ProfileContainer from './components/profile/ProfileContainer'
import UserTable from './components/UserTable'
import Denver from './components/cities/Denver'
import Boulder from './components/cities/Boulder'
import FortCollins from './components/cities/FortCollins'
import ColoradoSprings from './components/cities/ColoradoSprings'
import Durango from './components/cities/Durango'
import Breckenridge from './components/cities/Breckenridge'
import Home from './components/Home'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      cities: [{
        name: "Denver",
        image: "https://i.imgur.com/yFbS1Zl.jpg"
      }, {
        name: "Boulder",
        image: "https://i.imgur.com/EPTqmvA.jpg?2"
      }, {
        name: "Colorado Springs",
        image: "https://i.imgur.com/waeWNtE.jpg"
      }, {
        name: "Fort Collins",
        image: "https://i.imgur.com/euRsbax.jpg"
      }, {
        name: "Breckenridge",
        image: "https://i.imgur.com/MVbAHwo.jpg"
      }, {
        name: "Durango",
        image: "https://i.imgur.com/IYPlrT6.jpg"
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
          <Route exact path='/Home' component={Home}  />

          <Route path='/Denver' component={Denver} />
          <Route path='/Boulder' component={Boulder} />
          <Route path='/Colorado springs' component={ColoradoSprings} />
          <Route path='/Fort collins' component={FortCollins} />
          <Route path='/Durango' component={Durango} />
          <Route path='/Breckenridge' component={Breckenridge} />

          {/*<UserList users={this.state.users} />*/}

        </div>
      </Router>
    )
  }
}
