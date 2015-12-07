import React from 'react';

class Hello extends React.Component {
    render() {
            return <button class="btn btn-primary" type="button">
            Messages <span class="badge">4</span>
            </button>
    }
}

React.render(<Hello/>, document.getElementById('hello'));
