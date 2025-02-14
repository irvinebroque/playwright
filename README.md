```
console.log(Object.keys(playwright))
[
  '_android',  '_electron',
  'chromium',  'default',
  'devices',   'errors',
  'firefox',   'request',
  'selectors', 'webkit'
]

const browser = await playwright.chromium.connectOverCDP(
    `wss://connect.browserbase.com?apiKey=KEY`
);

[wrangler:err] TypeError: Cannot read properties of undefined (reading 'connectOverCDP')
    at Object.fetch (file:///Users/brendan/src/playwright/src/index.js:13:45)
```