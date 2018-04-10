import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

class List extends React.Component {
  state = {
    users: [],
  };

  render() {
    return(
      <ul>
        {this.state.users.map(user =><li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }

      componentDidMount() {
        axios
        .get('http://localhost:5000/api/users')
        .then(response => {
          this.setState({ users: response.data });
        })
        .catch(error => console.log(error));
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
