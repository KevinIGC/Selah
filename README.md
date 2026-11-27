# Selah showcase

Spanish-first, responsive showcase for the in-development Christian social app Selah. Branding and feature direction are grounded in the SELAH project context and supplied app screenshots.

No build or dependencies required. From the repository root, preview with `python3 -m http.server 4173`. Website files are served directly from the repository root.

Pages: `index.html` introduces Selah and its app features; `equipo.html` presents founder Kevin Isaac G.C. and designer Dulce Lluvia M.C. The founder portrait is supplied by the project owner.

`privacy/index.html` adds the Spanish privacy policy at `/privacy` (served as `/privacy/` by static hosting). It includes an index, metadata, light/dark appearance, and links from both existing footers. Translation is left to the browser. The policy is visibly marked as a draft because the iOS implementation has not been verified. See `PRIVACY-REVIEW.md` for the evidence, outstanding decisions, and GitHub Pages publication checks before using the URL for App Store or AdMob.


Community coverage includes topic groups (up to 8 members and 2 memberships per person, based on the Selah group specifications), testimonies, and prayer requests. The website presents these app features; it does not accept posts, prayers, or group memberships.

Features: screenshot phone frames, centered scroll narrative, keyboard-accessible links between the three app previews, FAQ disclosures, native sharing or clipboard fallback, scroll reveals, and reduced-motion support. Original supplied images are retained in the parent folder; optimized website copies live in `assets`.

There is no email collection, launch date, download link, or fabricated testimonial. App features are labeled as in development. The SELAH wordmark uses Hurricane Regular. Site text uses Arimo Regular and Bold, with Avenir and Arial fallbacks. Fonts load through Google Fonts.

Appearance automatically follows the device with `prefers-color-scheme`: warm ivory and dark text in light mode, black and gold in dark mode. Browser chrome also adapts. Screenshots retain their original appearance. Change the operating system appearance or use browser developer tools to test both modes.
