import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'initial value',
            count: 0,
            contextValue: '',
            renderValue: '',
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentDidMount() {
        console.log('mount');
    }

    componentDidUpdate() {
        console.log('update');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    decrementCount = () => {
        this.state.count === 0
            ? this.setState({ count: this.state.count })
            : this.setState({ count: this.state.count - 1 })
    }

    readInputValue = (e) => {
        this.setState({ contextValue: e.target.value });
    }

    handleUpdate = () => {
        if (this.state.value === 'initial value') {
            this.setState({ value: 'VALUE UPDATED' })
        } else {
            this.setState({ value: 'initial value' })
        }
        // this.setState({ value: 'VALUE UPDATED' });
    }

    render() {

        const readInputValue = (e) => {
            this.setState({ renderValue: e.target.value })
        }
        console.log(this);

        return (
            <div className='wrapper'>
                <div>
                    <label htmlFor="context">Context value:</label>
                    <input id='context' onChange={this.readInputValue} value={this.state.contextValue} type="text" placeholder='type something...' />
                </div>
                <div>
                    <label htmlFor="render">Render value:</label>
                    <input id='render' onChange={readInputValue} value={this.state.renderValue} type="text" placeholder='type something...' />
                </div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.decrementCount}>Decrement</button>
                <h3 onClick={this.handleUpdate}>{this.state.value}</h3>
            </div>
        );
    }
}

export default Counter;
