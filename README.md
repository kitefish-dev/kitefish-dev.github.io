# kitefish.dev

Website for Kitefish, an independent game studio. Plain static HTML, hosted on GitHub Pages.

## Files

- `index.html`: the one-page site (games, about, contact)
- `privacy.html`: privacy policy, linkable from Google Play listings
- `favicon.svg`: logo / favicon

## Publish on GitHub Pages

1. Create a public repo named `kitefish-dev.github.io` in the `kitefish-dev` organisation.
2. Push these files to the `main` branch.
3. In the repo, go to **Settings > Pages**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site goes live at <https://kitefish-dev.github.io>.

### Custom domain (kitefish.dev)

1. Add a file named `CNAME` containing `kitefish.dev`.
2. At your DNS provider, add `A` records for `kitefish.dev` pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`,
   and a `CNAME` record for `www` pointing to `kitefish-dev.github.io`.
3. In **Settings > Pages**, enter `kitefish.dev` as the custom domain and enable **Enforce HTTPS**.

## Adding a game

In `index.html`, find the `<div class="games">` block. Copy the commented template inside it, fill in the title, description, image and Google Play link, and remove the "First title" placeholder card when you no longer need it. Put screenshots in an `images/` folder.
