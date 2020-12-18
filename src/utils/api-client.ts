function client<T>(endpoint: string): Promise<T> {
  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`)
    .then((response) => response.json());
}

export { client };
