import React from 'react';

class Badge extends React.Component {
    render() {
            return <button className="btn btn-primary" type="button">
            {this.props.title} <span className="badge">{this.props.count}</span>
            </button>
    }
}

let options = {
    title: 'Tyler Rules',
    count: 22
}

let element = React.createElement(Badge, options)

React.render(element, document.getElementById('hello'));
