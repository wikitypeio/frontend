export const API_HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/v1'
    : 'https://api.wikitype.io/v1';
