export default function useQueryFetcher () {
  const queryStrings = new URLSearchParams(window.location.search).entries();
  const result = new Object();
  for(let item of queryStrings)  {
    result[item[0]] = item[1]
  }
  return result
}