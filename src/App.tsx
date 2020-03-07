import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/values")
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
    this.setState({
      values: [
        { id: 1, name: 'Value 101 Local'},
        { id: 2, name: 'Value 102 Local'},
        { id: 3, name: 'Value 103 Local'},
        { id: 4, name: 'Value 104 Local'}
        ]
    })
  }
  
  render() {
    return (
      <div >
          <Header as='h2'>
            <Icon name='users'/>
            <Header.Content>Meet Down</Header.Content>
          </Header>          
          <List>
            {this.state.values.map((value: any) => (
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}  
          </List>
      </div>
    );
  }
}

export default App;
