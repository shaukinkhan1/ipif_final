import React from 'react';

class Default extends React.Component {
    render() {

        return(
            <div>
            <h3>404 Error</h3>
            <h2>Page Not Found</h2>
            <h4>
                The Requested URL 
                <span class="error-highlight">{this.props.location.pathname}</span>
            {" "} Page Was Not Found 
            </h4>
            </div> 
        )
    }

}

export default Default;