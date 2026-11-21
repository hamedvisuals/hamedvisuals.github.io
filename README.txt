Hamed Ashraf - portfolio site (static export)
=============================================

This is the complete site as plain static files: index.html, main.js, main.css, assets/.
No build step, no server code. Any static host can serve it.

Deploy on GitHub Pages:
1. Create a GitHub account at github.com (free) if you do not have one.
2. Create a new PUBLIC repository named: <your-username>.github.io
   (exactly that name gives you the free address https://<your-username>.github.io)
3. Upload ALL files from this folder into the repository (Add file > Upload files, drag the whole folder contents, commit).
   Keep the structure: index.html at the top level, assets/ as a folder, and keep the .nojekyll file.
4. In the repo: Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root). Save.
5. Wait 1-2 minutes, then open https://<your-username>.github.io

Custom domain later (optional):
- Buy the domain, then in Settings > Pages > Custom domain enter it and add the DNS records GitHub shows at your registrar.

Notes:
- The "Download CV" button links to the CV on Google Drive (same as the live site).
- Sound effects are generated in the browser (WebAudio), nothing extra to host.
- The site updates independently from now on: this copy does not change when the Instinct-hosted version changes.
