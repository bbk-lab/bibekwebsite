---
name: Publishing portfolio assets
description: Keep static portfolio images available to GitHub Pages and other deployments.
---

Static files needed by the portfolio deployment must live in tracked app assets, not only in Replit's `attached_assets` directory. The environment's global Git ignore excludes `attached_assets/*`, even though Vite can import those files during a local build.

**Why:** A local preview or production build can succeed while GitHub Pages silently omits an image that Git never tracked.

**How to apply:** When a user provides an image for the portfolio, optimize it and place the deployable copy in `artifacts/bibek-portfolio/public/` (or another tracked asset directory) before referencing it. Check `git status` to confirm it will be included in a push.
