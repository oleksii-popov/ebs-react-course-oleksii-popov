import React, {Component} from 'react';

class Page404 extends Component {
    render() {
        const { pathname } = this.props.location;
        return (
            <div>
                <h3>Page not found: <code>{pathname}</code></h3>
            </div>
        );
    }
}

export { Page404};
