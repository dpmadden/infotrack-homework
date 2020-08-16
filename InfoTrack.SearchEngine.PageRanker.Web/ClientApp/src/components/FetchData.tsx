﻿import * as React from 'react';

export class FetchData extends React.Component<any, { currentCount: number }> {
    static displayName = "Counter";

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    async incrementCounter() {
        await fetch('/page-rank/search',
            {
                method: 'post',
                body: JSON.stringify({
                    keywords: ['asd', 'tyty'],
                    url: 'http://google.com'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>This is a simple example of a Damien component.</p>
                <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>
                <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}