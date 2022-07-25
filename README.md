<div>
  <h1>A simple hooks that fetch query string 😎</h1>
</div>

you can easily get query string values from URL

Install
------
```shell
npm i use-query-fetcher
```

Quickstart
-------
>Get value using by destructuring assignment syntax
```js
import { useQueryFetcher } from "use-query-fetcher";

function App() {

  // example URL : http://localhost:3000/?name=tech&age=31&address=america
  const { name, age, address } = useQueryFetcher();

  return (
    <div>
      {name} <br />
      {age} <br />
      {address}
    </div>
  );
}

export default App;
```


you can get query string values with only one line of code 😝 Happy hacking!
