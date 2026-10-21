# kitefish.dev

Website for Kitefish, an independent card game studio. Plain static HTML and CSS (no build step), hosted on GitHub Pages at <https://kitefish-dev.github.io>.

## Files

- `index.html`: the one-page site (hero, games, studio, contact)
- `privacy.html`: privacy policy, linked from Google Play listings
- `styles.css`: shared styles (cascade layers, nesting, container queries, scroll-driven animations, popover menu)
- `site.js`: small enhancements (copy email button, footer year, closing the mobile menu)
- `favicon.svg`: the logo mark
- `images/logo.png`: 512 × 512 app-icon version of the mark (GitHub avatar, Google Play developer icon)
- `images/mark.png`: 1024 × 1024 transparent mark
- `images/og.png`: 1200 × 630 social preview image

## Brand

"Sticker Pop": sunshine `#FFD23F`, bubblegum `#FF5C93`, sky `#3DB8FF`, navy outline `#16213E`, white. Display type is Lilita One and body type is Nunito. Elements get a 3px navy outline and a solid navy drop shadow, like die-cut stickers.

## Adding a game

In `index.html`, find the `<div class="games">` block. Copy the commented template inside it, put the game's 512 × 512 icon in `images/games/`, fill in the name and description, and link to the game's Google Play page.

## Custom domain (kitefish.dev)

The domain's DNS is at Spaceship. To serve the site at kitefish.dev:

1. At Spaceship, add `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`, and a `CNAME` record for `www` pointing to `kitefish-dev.github.io`. Leave the existing MX records for email alone.
2. In the repo's **Settings > Pages**, enter `kitefish.dev` as the custom domain (this adds a `CNAME` file) and turn on **Enforce HTTPS** once the certificate is issued.
