# DanaDrorProperties

Real estate website for buying land, houses and apartments in Portugal.
Hebrew is the main language (right-to-left), with an English switch aimed at international buyers.

This is a plain static site: HTML, CSS and JavaScript, with no build step and no server code.
It is hosted on **Cloudflare Pages**, connected to this repository, so every push to `main` goes live in about a minute.

> The site is currently a **draft** and hidden from search engines (see [Going live](#going-live)).

## Pages

| Page | What it shows |
|---|---|
| `index.html` | Home: headline, the six price-range buttons, photo slider, featured properties, team section |
| `listings.html` | Property cards next to a satellite map. `?range=1` … `?range=6` filters by price |
| `property.html` | One property: photo gallery, facts, description, map, WhatsApp/phone/email contact. `?id=DD-101` etc. |
| `services.html` | Our services and why to buy through us |
| `why-portugal.html` | Why buy property in Portugal, main regions |
| `contact.html` | WhatsApp, phone, email and a contact form |

## Where to change things

| To change… | Edit |
|---|---|
| Business name, phone, WhatsApp, email | `js/config.js` |
| Price ranges | `js/config.js` → `ranges` |
| Map style (currently `satellite`) | `js/config.js` → `defaultMapStyle` |
| Properties (add, remove, edit) | `js/properties.js` |
| Property photos | `images/properties/<id>/1.jpg, 2.jpg, …` (`1.jpg` is the cover) |
| Team members | `js/home.js` → `team` |
| Colours, fonts, layout | `css/style.css` |
| Header, footer, logo, shared helpers | `js/layout.js` |
| Browser tab icon | `images/favicon.svg` |

### Adding a property

1. Create a folder `images/properties/DD-107/` and put the photos in it as `1.jpg`, `2.jpg`, … (about 1400px wide is plenty).
2. Add an entry to the list in `js/properties.js`, copying an existing one: `id`, `price`, `type`
   (`house`, `apartment`, `townhouse`, `villa`, `land`, `farm`, `penthouse`, `business`),
   `region`, `city`, `lat`/`lng` for the map pin, `beds`, `baths`, `area`, `plot`, and Hebrew + English `title` and `description`.
3. The property appears automatically in the right price range, on the map and on the home page.

## Text in two languages

Static text is written twice in the HTML: `<span data-lang="he">…</span><span data-lang="en">…</span>`.
Text built in JavaScript uses `{ he: '…', en: '…' }` objects. The chosen language is remembered in the browser.
English text should speak to a general international audience, not specifically to Israelis.

## Running locally

```bash
python -m http.server 5500
```

Then open http://localhost:5500.

## Current status

- The 6 listings are **demo properties** taken from RE/MAX brochures. Descriptions were written from the brochure facts and should be reviewed. Map pins are approximate (town level).
- The team section still uses **placeholders** (`[Team member 1 name]` and photo boxes).
- The contact forms **don't send anywhere yet**. They only show a thank-you message (see the `TODO` in `js/layout.js`).
- Most "Services" and "Why Portugal" texts are drafts to be reviewed.

## Going live

When the site is ready for the public, remove the three things that hide it from Google:

1. `<meta name="robots" content="noindex, nofollow">` in every `.html` file
2. `robots.txt` (or change it to allow everything)
3. The `X-Robots-Tag` line in `_headers`

Also remove the "Photos and listings on this site are samples only" line from the footer in `js/layout.js`.

## Libraries

Loaded from CDNs, nothing to install:
[Leaflet](https://leafletjs.com/) 1.9.4 and Leaflet.markercluster 1.5.3 for the maps,
Esri World Imagery for the satellite tiles, and Google Fonts (Frank Ruhl Libre, Heebo).
