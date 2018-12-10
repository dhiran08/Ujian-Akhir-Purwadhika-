import React, { Component } from 'react';

class Jam extends Component {
    constructor (props) {
        super (props);
        this.state = {
            waktu: new Date().toLocaleString()
        };
    }
    detik = () => {
        this.setState ({
            waktu: new Date().toLocaleString()
        });
    }
    componentDidMount () {
        this.intervalID = setInterval (
            () => this.detik(),
            1000
        );
    }
    componentWillUnmount () {
        clearInterval (this.intervalID);
    }
    render () {
        return (
            <p>
                {this.state.waktu}
            </p>
        );
    }
}

export default Jam;