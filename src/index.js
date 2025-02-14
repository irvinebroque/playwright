global.__dirname = 'foo';
__dirname = 'foo'
globalThis.__dirname = 'foo'
process.env.__dirname = 'foo'

export default {
	async fetch(request, env, ctx) {

		const playwright = await import("playwright-core");

		console.log(Object.keys(playwright))

		const browser = await playwright.chromium.connectOverCDP(
			`wss://connect.browserbase.com?apiKey=KEY`
		  );
		
		  // Getting the default context to ensure the sessions are recorded.
		  const defaultContext = browser.contexts()[0];
		  const page = defaultContext.pages()[0];
		
		  await page.goto("https://browserbase.com/");
		  await page.close();
		  await browser.close();


		return new Response('Hello World!');
	},
};
