export function mockFetchResponse (body = {}, status = 200) {
  const mock = {
    body: JSON.stringify(body),
    status,
    url: 'http://test.com',
    json: function () {
      return Promise.resolve(JSON.parse(this.body));
    }
  };

  return mock;
}
