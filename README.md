# Musician Biography Website — Collaborative Project

A clean, responsive static website showcasing the biography, gallery, music, and contact information for a musician. This repository is a collaborative project intended for contributors, collaborators, and maintainers to build and improve an artist portfolio or press kit. Built with plain HTML, CSS and vanilla JavaScript.

**Key features**

- Responsive layout and navigation shared across pages
- Photo gallery with lightbox and video support
- Music listing and simple interactive elements
- Centralized styling in `css/style.css` and behaviour in `js/script.js`

**Demo / Preview**
Serve the project folder locally and open `views/index.html` in your browser.

Quick preview using Python's simple HTTP server:

```bash
# from the project root
python -m http.server 8000
# then open http://localhost:8000/views/index.html
```

Or use VS Code Live Server extension to preview with auto-reload.

**Getting started (development)**

1. Clone or copy the repository to your machine.
2. Serve the folder (see commands above).
3. Edit HTML files in `views/`, images in `images/`, styles in `css/style.css`, and scripts in `js/script.js`.

**Project structure**

- `views/` — all site pages (index.html, about.html, gallery.html, music.html, contact.html)
- `css/style.css` — main stylesheet
- `js/script.js` — site JavaScript (navbar, gallery, lightbox, etc.)
- `images/` — image and media assets (jpg, jpeg, mp4)
- `assets/` — additional assets used by the site
- `LICENSE` — project license

**How to update content**

- Add or replace images in the `images/` folder and reference them from pages in `views/` using relative paths (`../images/your-image.jpg`).
- Update copy directly inside the HTML files in `views/`.
- For styling changes, edit `css/style.css` and test responsively by resizing your browser.

**Contributing**
If you want to collaborate:

1. Create an issue describing the change or improvement.
2. Make a branch for your feature/fix.
3. Open a pull request with a short description and screenshots if relevant.

**Collaboration & Contributors**

- This project is maintained collaboratively. Contributions are welcome from designers, developers, photographers, and content editors.
- Please include your name and role when opening a pull request so we can credit contributors.

**How to contribute (summary)**

1. Fork the repository (or clone the main repo if you have push privileges).
2. Create a descriptive branch: `feature/your-feature` or `fix/issue-number`.
3. Make small, focused commits and include screenshots for visual changes.
4. Open a pull request targeting `main` with a clear title and description.
5. After merge, the contributor will be added to the `Contributors` section in this README.

**Contributors**

- Kamushabe Ampulira — Developer / Project lead
- Felice Ferrara - Developer / Project owner

**License**
This project includes a `LICENSE` file. Review it for usage and distribution rights.

**Credits & Contact**

- Developer: Felice Ferrara / Kamushabe Ampulira
- Project: Musician Biography Website
