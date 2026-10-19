# Brokr Docs

Source for **docs.brokrapp.se**: Brokr's public policies and support pages. The Brokr app itself lives at
[www.brokrapp.se](https://www.brokrapp.se) (Brokr-App web build) and in the App Store and Google Play.

## Pages

| Path | Content |
|---|---|
| `/` | Docs hub linking every page below and the app |
| `/integritet` | Privacy policy |
| `/villkor` | Terms of use |
| `/cookies` | Cookies and local storage used by the web app |
| `/support`, `/Kontakt` | Support contact |
| `/waitlist` | Legacy link; redirects to www.brokrapp.se |

Shipped app binaries and store listings used to link to these paths on `brokrapp.se`. The web app's Amplify
config 301-redirects the old paths here, so keep the paths stable. When adding a route, update both
`src/App.tsx` and `scripts/emit-route-pages.mjs` so the path returns HTTP 200.

The cookies page must match the storage registry in Brokr-App (`app/_config/storageRegistry.ts`). Update both
in the same change.

## Development

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
```

Copy `.env.example` to `.env`. `npm run check:release` verifies the legal identity variables before a release.

## Hosting

AWS Amplify builds from Git using `amplify.yml`. Response headers (HSTS, CSP and others) are defined in
`customHttp.yml`.
