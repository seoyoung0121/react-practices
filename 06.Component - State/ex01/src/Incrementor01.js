import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.val
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count+this.props.step
                    })
                }}>{'+'}</button>
                {' '}
                { this.state.count }
                {' '}
                <button onClick={() => {
                    this.setState({
                        count: this.state.count-this.props.step
                    })
                }}>{'-'}</button>
            </div>
        );
    }
}