import React from "react";

class FetchUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
    console.log("Constructor: FetchUsers component initialized");
  }

  componentDidMount() {
    console.log("ComponentDidMount: Fetching users data");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data, loading: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.users !== this.state.users &&
      this.props.mount === prevProps.mount
    ) {
      console.log("ComponentDidUpdate: Users data updated");
    }

    if (this.props.mount !== prevProps.mount) {
      this.componentWillUnmount();
    }
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount: FetchUsers component is unmounted");
    this.setState({ users: [], loading: true });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                Name: {user.name}
                <br />
                Username: {user.username}
                <br />
                Email: {user.email}
                <br />
                Address: {user.address.street}, {user.address.city},{" "}
                {user.address.zipcode}
                <br />
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    );
  }
}

export default FetchUsers;
