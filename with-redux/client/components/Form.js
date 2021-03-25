import React from 'react';
import {connect} from 'react-redux';
import {addUserThunkCreator} from '../store/users'

const initState = {
  name: '',
  job: '',
  favoriteFood: '',
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    // Local state
    this.state = initState
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    // This stops the page from refreshing!
    event.preventDefault();
    console.log(this.state);
    // This will dispatch our thunk to actually add the data to our database
    this.props.addUser(this.state);
    // This will clear our form of data
    this.setState(initState)
  }
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <span>
          <h1>Fill out this form to add a user</h1>
        </span>
        <form onSubmit={this.handleSubmit}>
          <div className='container-form-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className='container-form-field'>
            <label htmlFor='job'>Job</label>
            <input
              type='text'
              id='job'
              name='job'
              value={this.state.job}
              onChange={this.handleChange}
            />
          </div>
          <div className='container-form-field'>
            <label htmlFor='favoriteFood'>Favorite Food</label>
            <input
              type='text'
              id='favoriteFood'
              name='favoriteFood'
              value={this.state.favoriteFood}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Add User</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUserThunkCreator(user)),
  };
}

export default connect(null, mapDispatchToProps)(Form);
