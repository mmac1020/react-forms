import React from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Users from './components/Users';
import { fetchUsers } from './store/users';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    return (
      <div className='container'>
        <h1>React Forms!!!</h1>
        <Form />
        <Users />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(null, mapDispatchToProps)(App);
