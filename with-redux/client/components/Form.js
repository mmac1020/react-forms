import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../store/users';

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
    // Since we're always updating the state with
    // "handleChange", we can add a new user
    // based on the state.
    this.props.addUser(this.state);
    // Always remember to clear the state
    // so the form can be re-used easily
    this.setState(initState);
  }

  render() {
    return (
      <div>
        <span>Fill out form to add a user</span>
        <form onSubmit={this.handleSubmit}>
          <div className='container-form-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='container-form-field'>
            <label htmlFor='job'>Job</label>
            <input
              type='text'
              name='job'
              value={this.state.job}
              onChange={this.handleChange}
            />
          </div>
          <div className='container-form-field'>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addNewUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
