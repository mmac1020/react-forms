import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import People from './components/People';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/users');
      this.setState({
        people: data,
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
        <People people={this.state.people} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
