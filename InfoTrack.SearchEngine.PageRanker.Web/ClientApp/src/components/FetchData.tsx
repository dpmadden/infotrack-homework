import * as React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

interface ISearchResult {
    searchTerm: string;
    uri: string;
    results: {
        pageRank?: number;
        searchEngineName: string;
        urlFound: boolean;
    }[];
}

export class FetchData extends React.Component<any, { url: string, searchTerm: string, results: ISearchResult[] }> {
    static displayName = "Counter";

    constructor(props) {
        super(props);

        this.state = {
            url: '',
            searchTerm: 'online title search',
            results: []
        };

        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUrlChange(event) {
        this.setState({url: event.target.value});
    }

    handleSearchTermChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    async handleSubmit(ev) {
        ev.preventDefault();

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
            }).then(async (r) => {
                const response = (await r.json()) as ISearchResult;
                this.setState({ results: [response, ...this.state.results].slice(0, 10) });
            });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1>URL Page Rank</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label className="w-50">
                                    Search term:
                                    <Input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange} required />
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Label className="w-50">
                                    URL:
                                    <Input type="url" value={this.state.url} onChange={this.handleUrlChange} required />
                                </Label>
                            </FormGroup>
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5">
                        <h2>Last 10 Search Results</h2>
                    </Col>
                </Row>
                { this.state.results.length <= 0 && <p>No results to display.</p> }
                {this.state.results.length > 0 && this.state.results.map((r, resultIdx) => (
                    <div className="search-history-item" key={resultIdx}>
                        <span className="font-weight-bold">{r.searchTerm}</span><br/>
                        {r.uri}<br />
                        <div className="d-flex">
                            {r.results.map((result, idx) => (
                                <div className={result.urlFound ? 'search-result found' : 'search-result not-found'} key={`${result.searchEngineName}-${idx}`}>
                                    {result.pageRank ? `#${result.pageRank}` : '-'}
                                    <small>{result.searchEngineName}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}