import React from 'react';
// eslint-disable-next-line no-unused-vars
import style from './Search.css';

const searchField = ({ url, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor="url" type="text" />
      <input
        id="url"
        placeholder="url"
        name="url"
        value={url}
        onChange={onChange}
      />

      <label htmlFor="get">
        GET
        <input
          id="get"
          type="radio"
          name="CRUD"
          value="GET"
          style={{ visibility: 'hidden' }}
        />
      </label>
      <label htmlFor="post">
        POST
        <input
          id="post"
          type="radio"
          name="CRUD"
          value="POST"
          style={{ visibility: 'hidden' }}
        />
      </label>
      <label htmlFor="put">
        PUT
        <input
          id="put"
          type="radio"
          name="CRUD"
          value="PUT"
          style={{ visibility: 'hidden' }}
        />
      </label>
      <label htmlFor="patch">
        PATCH
        <input
          id="patch"
          type="radio"
          name="CRUD"
          value="PATCH"
          style={{ visibility: 'hidden' }}
        />
      </label>
      <label htmlFor="delete">
        DELETE
        <input
          id="delete"
          type="radio"
          name="CRUD"
          value="DELETE"
          style={{ visibility: 'hidden' }}
        />
      </label>

      <button>GO!</button>
    </form>
    <textarea placeholder="Raw JSON Body" name="body"></textarea>
  </div>
);

export default searchField;
