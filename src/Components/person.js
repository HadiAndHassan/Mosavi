import React, { Component } from 'react';


class Person extends Component {


    render() {
        let { name, family } = this.props;
        return (
            <div>
                <h3>Person</h3>
                <h2>{name}</h2>
                <h2>{family}</h2>
            </div>
        );
    }
}

export default Person;
