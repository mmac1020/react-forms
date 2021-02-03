import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/users');
      this.setState({
        users: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  addUser(newUser) {
    const users = [...this.state.users];
    users.push(newUser);
    this.setState({
      users,
    });
  }

  render() {
    return (
      <div>
        <h1>React Forms!!!</h1>
        <Form addUser={this.addUser} />
        <User users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
