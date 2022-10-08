class ApiClient {
  _baseUrl = 'https://dummyjson.com/';
  get = async (uri: string, options?: RequestInit) => {
    return (
      await fetch(
        this._baseUrl + uri, {
          method: 'get',
          ...options,
        }
      )
    ).json()
  };
  // Other method implementations, just keeping it simple
}

export default new ApiClient();
