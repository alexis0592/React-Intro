import React, {Component} from 'react'

export default class UserForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onAddUser}>
                <input type="text" placeholder="Nombre" name="name"/>
                <input type="email" placeholder="e-mail" name="email"/>
                <input type="Submit" value="Save"/>
            </form>
        );
    }
}

