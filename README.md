# Playwright demo test

A small JavaScript project that runs browser tests against an included local demo page. No external website or account is required. Tests cover the page title, heading, greeting form, and whitespace-only input.

## Get started

Install Node.js 24 LTS (including npm), then run:

```sh
npm ci
npx playwright install chromium
npm test
```

On Linux, install browser system dependencies with `npx playwright install --with-deps chromium`.

Tests open the included HTML file directly and run headlessly in Chromium. No server or available port is required for testing.

## Useful commands

| Command | Purpose |
| --- | --- |
| `npm test` | Run all tests |
| `npm run test:headed` | Run tests with a visible browser |
| `npm run test:ui` | Open Playwright's interactive test runner |
| `npm run test:report` | Open the latest HTML report |
| `npm start` | Explore the demo at http://127.0.0.1:3000 |

The optional demo server uses port 3000; it is only needed for manually exploring the page over HTTP.

## Project structure

- `tests/demo.spec.js`: UI tests using accessible locators and auto-retrying assertions.
- `playwright.config.js`: browser, reporting, and CI settings.
- `demo/`: the local page and a minimal Node.js HTTP server.
- `.github/workflows/playwright.yml`: automated test workflow.

## GitHub Actions

The workflow runs on every push and pull request, and can be started manually from the Actions tab. It installs locked dependencies and Chromium, runs the tests, and uploads an HTML report retained for 14 days. Download and extract the `playwright-report` artifact, then open `index.html` to inspect results.

CI retries failures twice and captures a trace on the first retry. Failure screenshots appear in the report. Focused tests (`test.only`) are rejected in CI.

## Add tests

Add `*.spec.js` files in `tests/` and prefer role or label locators. The example resolves the included HTML file to a portable file URL. To test your own web application, add `baseURL` and `webServer` to the configuration and navigate to your application instead.

See the official [Playwright documentation](https://playwright.dev/docs/intro) and [CI guide](https://playwright.dev/docs/ci-intro).

Connection test: this line was added and pushed directly from ChatGPT via the GitHub connector.
