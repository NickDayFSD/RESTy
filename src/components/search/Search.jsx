import React from 'react';

const searchField = ({ url, onChange, onSubmit }) => (
  <form>
    <label />
    <input />

    <label htmlFor="get">GET</label>
    <input id="get" type="radio" name="CRUD" value="GET" />
    <label htmlFor="post">POST</label>
    <input id="post" type="radio" name="CRUD" value="POST" />
    <label htmlFor="put">PUT</label>
    <input id="put" type="radio" name="CRUD" value="PUT" />
    <label htmlFor="patch">PATCH</label>
    <input id="patch" type="radio" name="CRUD" value="PATCH" />
    <label htmlFor="delete">DELETE</label>
    <input id="delete" type="radio" name="CRUD" value="DELETE" />

    <button>GO!</button>
  </form>
);

export default searchField;
