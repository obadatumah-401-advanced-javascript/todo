import React from 'react';

import ToDo from './components/todo/todo.js';
import Auth from './components/auth';
import Login from './components/login';

import LoginContext from './components/context/authContext';
// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <ToDo />
//       </>
//     );
//   }
// }



const EditLink = props => {
    return (
        <Auth capability="dance">
            <span>Fake Update Link </span>
        </Auth>
    )
}


// const ReadLink = props => {
//     return (
//         <Auth capability="read">
//             <span>Welcome to our website! </span>
//         </Auth>
//     )
// }

const DeleteLink = props => {
    return (
        <Auth capability="delete">
            <span>Fake Delete Link </span>
        </Auth>
    )
}

class App extends React.Component {
    render() {
        return (
            <LoginContext>
                <Login></Login>
                <Auth capability="read"><ToDo /></Auth>
                <hr />
                <EditLink />
                <DeleteLink />
                {/* <ReadLink /> */}
                
            </LoginContext>
        )
    }
}

export default App;