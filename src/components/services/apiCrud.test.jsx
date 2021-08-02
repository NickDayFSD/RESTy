import fetcher from './apiCrud';

describe.skip('fetches route', () => {
  it('fetches Avatar characters', async () => {
    const url = 'https://last-airbender-api.herokuapp.com/api/v1/characters';
    const result = await fetcher(url);

    expect(result.length).toBeGreaterThan(5);
  });
});
