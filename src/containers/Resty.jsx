import React, { Component } from 'react';
import fetcher from '../components/services/apiCrud';

import SearchField from '../components/search/Search';
import Results from '../components/results/Results';

// eslint-disable-next-line no-unused-vars
import styles from './Resty.css';

export default class Resty extends Component {
  state = {
    url: '',
    loading: false,
    results: ['nothing to see here...'],
    pastSearches: [],
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const results = await fetcher(this.state.url);
    console.log('HANDLESUBMIT', results);
    this.setState({ results, loading: false });
  };

  render() {
    const { url, loading, results } = this.state;

    return (
      <>
        <div>
          <SearchField
            url={url}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Results results={results} loading={loading} />
        </div>
      </>
    );
  }
}
