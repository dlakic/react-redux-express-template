import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/action';

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUserName: '',
      newUserProfession: '',
    };

    this.props.fetchUsers();
  }

  changeName(name) {
    this.setState({
      newUserName: name,
    });
  }

  changeProfession(profession) {
    console.log(profession);
    this.setState({
      newUserProfession: profession,
    });
  }

  addUser(e) {
    e.preventDefault();
  }

  render() {
    const { users, userLoading } = this.props;

    if (userLoading) {
      return (<div className="users-container"><h2> Loading ... </h2></div>);
    }

    return (
      <div className="users-container">
        <h2>Users on Mock DB:</h2>
        {users.map(user => (
          <div className="user-container">
            <p>
              Name:&nbsp;
              {user.name}
            </p>
            <p>
              Profession:&nbsp;
              {user.profession}
            </p>
          </div>
        ))}
        <h2> Add new user to Mock DB </h2>
        <label className="user-input-label" htmlFor="username">
          Username:
          <input type="text" name="username" onChange={e => this.changeName(e.target.value)} />
        </label>
        <label className="user-input-label" htmlFor="profession">
          Profession:
          <input type="text" name="profession" onChange={e => this.changeProfession(e.target.value)} />
        </label>
        <button onClick={e => this.addUser(e)}>Add new User</button>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    userLoading: state.userLoading,
  };
}

const mapDispatchToProps = { fetchUsers };
export default connect(mapStateToProps, mapDispatchToProps)(Users);
