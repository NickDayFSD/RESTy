import React, { Component } from 'react';
import SearchField from '../components/search/Search';
import Loader from '../components/loader/Loading';

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
    const results = await // insert fetch function here
    this.setState({ results, loading: false });
  };

  render() {
    const { url, loading, results, pastSearches } = this.state;

    return (
      <>
        <SearchField url={url} onChange={this.handleChange} />
        <Loader loading={loading} />
        <p></p>
      </>
    );
  }
}
