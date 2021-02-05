import React from 'react';
import axios from 'axios';

const initState = {
  name: '',
  job: '',
  favoriteFood: '',
};

class Form extends React.Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // Here we are using the same handleChange for all inputs.
    // We want to make sure our state reflects what we've
    // input into the form!
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      // Creating a resource we usually do with POST
      const { data } = await axios.post('/api/users', this.state);
      this.props.addUser(data);
      this.setState(initState);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <span>Fill out form to add a user</span>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='job'>Job</label>
            <input
              type='text'
              name='job'
              value={this.state.job}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='favorteFood'>Favorite Food</label>
            <input
              type='text'
              name='favoriteFood'
              value={this.state.favoriteFood}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;
