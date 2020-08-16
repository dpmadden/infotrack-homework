import * as React from 'react';
import { Form, FormGroup, Label, Input } from "reactstrap";

export class FetchData extends React.Component<any, { url: string, searchTerm: string, validate: { url: boolean } }> {
    static displayName = "Counter";

    constructor(props) {
        super(props);

        this.state = {
            url: '',
            searchTerm: '',
            validate: { url: true }
        };

        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
    }

    handleUrlChange(event) {
        this.setState({url: event.target.value});
    }

    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    async handleSubmit(ev) {
        ev.preventDefault();
        this.validateUrl();
        if (!this.state.validate.url) return;
        await fetch('/page-rank/search',
            {
                method: 'post',
                body: JSON.stringify({
                    searchTerm: this.state.searchTerm,
                    url: this.state.url
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    }

    validateUrl(): void {
        debugger;
        this.setState({
            validate: {
                url: true
            }
        });
    }

    render() {
        return (
            <div>
                <h1>URL Page Rank</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>
                            Search term:
                            <Input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            URL:
                            <Input type="url" value={this.state.url} onChange={this.handleUrlChange} />
                        </Label>
                    </FormGroup>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </Form>
            </div>
        );
    }
}