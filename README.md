# Winterlead Website (Jekyll + GitHub Pages)

## Getting started

1) Install dependencies:

```bash
bundle install
```

Recommended Ruby version: `3.3.4` (see `.ruby-version`).

2) Run locally:

```bash
bundle exec jekyll serve --baseurl=""
```

3) Build locally:

```bash
bundle exec jekyll build
```

## Content overview

- Home page content: `index.md`.
- Layout shell: `_layouts/default.html`.
- Styles and JS: `assets/css/style.css` and `assets/js/theme.js`.
- Site configuration: `_config.yml`.

## GitHub Pages constraints

This site uses the `github-pages` gem and the supported plugins `jekyll-seo-tag` and
`jekyll-sitemap` to stay compatible with GitHub Pages. Avoid adding unsupported plugins
or custom build steps to the default Pages build.

## License

Code (templates, styles, scripts, and configuration) is licensed under the MIT License
in `LICENSE`. Personal content is reserved by the author in `LICENSE-CONTENT`.
