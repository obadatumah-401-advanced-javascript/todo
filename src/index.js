import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './components/todo/todo'

// import App from './app.js';

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }

const rootElement = document.getElementById('root');
ReactDOM.render(<ToDo />, rootElement);