# Multiverse Landings — Modular Responsive Landing Page

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://<your-username>.github.io/<repo-name>/)

> **Notice:** This project is a satirical, humorous concept built strictly as a frontend demonstration piece for a developer portfolio.

A responsive landing page engineered to showcase modular CSS architecture, clean vanilla JavaScript DOM interactions, and software design pre-planning.

---

## Live Demo

Experience the live application here:  
**[https://<your-username>.github.io/<repo-name>/](https://<your-username>.github.io/<repo-name>/)**

---

## Architecture & Tech Stack

* **HTML5**: Semantic document structure optimized for accessibility and SEO.
* **CSS3 / Sass (SCSS)**: Component-isolated styling using mixins, fluid typography, flexbox/grid, custom CSS animations, and an automated vendor-prefixing build pipeline.
* **JavaScript (ES6+)**: Zero-dependency vanilla implementation handling UI state toggling, modal operations, and interactive components.
* **Asset & Build Tooling**: Node.js, npm, Sass CLI, and PostCSS/Autoprefixer.
* **Pre-Implementation Modeling**: Architectural flows planned via UML in Astah (`Landings page.asta`) and user journey mapping (`Mental Map.png`).

---

## Key Features

* **Satirical Multi-Tier Plans**: Parody subscription packages spanning Planetary, Cosmic, Multiverse, and themed tiers.
* **Modular Sass Architecture**: Structured component breakdown (`_modal.scss`, `_plans.scss`, `_testimonials.scss`, `_landings.scss`) driven by global variables and design tokens (`_variables.scss`, `_typography.scss`).
* **Interactive Modal Controllers**: Vanilla JavaScript modal system handling user interaction flows and media viewing without external frameworks.
* **Automated Prefixing & Compilation**: Integrated scripts to ensure cross-browser compatibility and source-map-driven debugging.

---

## Project Structure

```text
├── .gitignore
├── LICENSE
├── Landings page.asta        # System model (Astah UML)
├── Mental Map.png             # User flow & architecture diagram
├── index.html                 # Main markup entry point
├── package.json               # Development dependencies and build scripts
├── src/
│   ├── css/                   # Compiled, prefixed CSS & source maps
│   │   ├── style.comp.css
│   │   ├── style.css
│   │   └── style.prefix.css
│   ├── img/                   # Visual assets and icons
│   ├── js/
│   │   └── script.js          # Modal controls and DOM logic
│   └── sass/                  # SCSS source tree
│       ├── _animations.scss
│       ├── _base.scss
│       ├── _complements.scss
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _landings.scss
│       ├── _mixins.scss
│       ├── _modal.scss
│       ├── _music.scss
│       ├── _plans.scss
│       ├── _testimonials.scss
│       ├── _typography.scss
│       ├── _variables.scss
│       └── main.scss          # Compilation entry hub
```

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v16.0.0+)
* [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

* **Compile SCSS**:
  ```bash
  npm run compile:sass
  ```
* **Watch Mode**:
  ```bash
  npm run watch:sass
  ```
* **Production Build** (compile, prefix, minify):
  ```bash
  npm run build:css
  ```

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.