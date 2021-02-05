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
    // Modify my state whenever any input is changed
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    // We will prevent the default behavior, which is a refresh
    event.preventDefault();
    try {
      // We will put / post data to the backend to create
      // a new user
      const { data } = await axios.post('/api/users', this.state);
      // We will then clear the state (the form text)
      this.setState(initState);
      // We will make sure to add this user to our user list
      this.props.addAUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <span> Fill out this form for a new user</span>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Username: </label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor='job'>Job: </label>
            <input
              type='text'
              name='job'
              onChange={this.handleChange}
              value={this.state.job}
            />
          </div>
          <div>
            <label htmlFor='favoriteFood'>Favorite Food: </label>
            <input
              type='text'
              name='favoriteFood'
              onChange={this.handleChange}
              value={this.state.favoriteFood}
            />
          </div>
          <button type='submit'>Submit this form!</button>
        </form>
      </div>
    );
  }
}

export default Form;
