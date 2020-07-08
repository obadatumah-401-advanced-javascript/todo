import React from 'react';
import { LoginContext } from './context/authContext';
import Show from './show';

class Auth extends React.Component {

    static contextType = LoginContext;

    render() {
        let okToRender = false;

        try {
            okToRender = this.context.loggedIn && (
                this.props.capability ?
                    this.context.user.capabilities.includes(this.props.capability)
                    : true
            )
            console.log("okToRender: ", okToRender)
        } catch (e) {
            console.warn('Not Authorized!');
        }

        // admin ['edit', 'delete', 'create']
        //     <Auth capabilty="delete">
        //             <button>delete for admins only</button>
        //     </Auth>

        return (
            <Show condition={okToRender}>
                {this.props.children}
            </Show>
        )
    }
}

export default Auth;