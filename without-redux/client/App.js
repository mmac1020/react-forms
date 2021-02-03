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

  render() {
    return (
      <div>
        <h1>React Forms!!!</h1>
        <Form />
        <User users={this.state.users} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
