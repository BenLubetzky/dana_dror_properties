// Business details — edit these in one place and the whole site updates.
// All values below are placeholders until the real details are provided.
window.SITE = {
  name: { he: 'DanaDrorProperties', en: 'DanaDrorProperties' },
  tagline: { he: 'נדל״ן בפורטוגל', en: 'Portugal Real Estate' },

  phone: '+972 504 002 077',      // shown on the site
  phoneHref: '+972504002077',     // used for tel: links (no spaces)
  whatsapp: '972504002077',       // international format, digits only
  email: 'info@example.com',

  // Map look — one of: gray, sand, natgeo, topo, soft, street, satellite, smooth, toner, terrain
  defaultMapStyle: 'satellite',

  // Price ranges — each one is its own listings page (listings.html?range=N)
  ranges: [
    { id: 1, min: 0,      max: 100000 },
    { id: 2, min: 100000, max: 150000 },
    { id: 3, min: 150000, max: 200000 },
    { id: 4, min: 200000, max: 250000 },
    { id: 5, min: 250000, max: 300000 },
    { id: 6, min: 300000, max: null }
  ]
};
