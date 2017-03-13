import React, { Component } from 'react';
import UserList from './UserList.js'
import UserForm from './UserForm.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
          users:[
              {id:1, name: 'yefry', email:'example@example.com'},
              {id:2, name:'alexis', email:'test@test.com'}
          ]  
        };
    }
    
    handleOnAddUser(event){
        event.preventDefault();
        let user = {
            name: event.target.name.value,
            email:event.target.email.value
        };
        this.setState({
           users: this.state.users.concat([user]) 
        });
    }
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <div>
            <p><strong>Add Users: </strong></p>
            <UserList users = {this.state.users}/>
            <UserForm onAddUser = {this.handleOnAddUser.bind(this)}/>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        
    
    );
  }
} 
   
export default App;
