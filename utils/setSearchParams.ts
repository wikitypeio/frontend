const setSearchParams = (url: URL, searchParams: Record<string, any>) => {
  // FIXME: any in param type
  for (const [key, value] of Object.entries(searchParams)) {
    url.searchParams.set(key, value);
  }
};

export default setSearchParams;
