# Portfolio Site

This project is a Create React App portfolio site with two public destinations:

- `/` for the portfolio home page
- `/support` for the shared support page that other apps can link to

## Development

Use Node `20` for the cleanest Create React App experience.

```bash
npm install
npm start
```

## Support Page

The support page is intentionally shared and app-agnostic. Other apps can link into it with query params such as:

```text
/support?source=recipe-sorter&entry=hero-support
```

Supported query params:

- `source`
- `entry`

If `source` is present, the page renders a subtle attribution line like:

```text
You're supporting the developer behind Recipe Sorter.
```

## Environment Variables

Copy `.env.example` to `.env` and provide the Stripe Payment Links you want the support page to use.

```bash
cp .env.example .env
```

Available variables:

- `REACT_APP_API_KEY` for the NASA APOD section on the home page
- `REACT_APP_SUPPORT_ONE_TIME_5_URL`
- `REACT_APP_SUPPORT_ONE_TIME_15_URL`
- `REACT_APP_SUPPORT_ONE_TIME_30_URL`
- `REACT_APP_SUPPORT_MONTHLY_3_URL`
- `REACT_APP_SUPPORT_MONTHLY_8_URL`
- `REACT_APP_SUPPORT_CUSTOMER_PORTAL_URL`

The support page fails gracefully if any Stripe links are missing.

## Routing Notes

The app now uses client-side routing for `/support`. Common SPA rewrite helpers are included for:

- Netlify via `public/_redirects`
- Vercel via `vercel.json`

If you deploy elsewhere, configure an equivalent rewrite to `index.html`.
