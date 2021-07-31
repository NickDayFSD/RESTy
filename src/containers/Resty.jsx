import React, { Component } from 'react';
import fetcher from '../components/services/apiCrud';

import SearchField from '../components/search/Search';
import Loader from '../components/loader/Loading';
import Results from '../components/results/Results';

export default class Resty extends Component {
  state = {
    url: '',
    loading: false,
    results: [],
    pastSearches: [],
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const results = await fetcher(this.state.url);
    this.setState({ results, loading: false });
  };

  render() {
    const { url, loading, results, pastSearches } = this.state;

    return (
      <>
        <SearchField url={url} onChange={this.handleChange} />
        <Loader loading={loading} />
        <Results results={results} onSubmit={this.handleSubmit} />
      </>
    );
  }
}
