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

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state.url);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const results = await fetcher(this.state.url);
    console.log(results);
    this.setState({ results, loading: false });
  };

  render() {
    const { url, loading, results } = this.state;

    return (
      <>
        <SearchField
          url={url}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Loader loading={loading} />
        <Results results={results} />
      </>
    );
  }
}
