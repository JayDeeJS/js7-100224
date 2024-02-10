import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.warn(error, error);
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }
    
    render() {

        if (this.state.hasError) {
            return (
                <h2 style={{textAlign: 'center'}}>403 forbidden</h2>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;