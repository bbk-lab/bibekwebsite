# Bibek Regmi Portfolio

This is the source code for Bibek Regmi's civil engineering portfolio. The portfolio app is in `artifacts/bibek-portfolio`; keep the full workspace together when you move it to VS Code or GitHub because it uses shared workspace configuration.

## Connect this project to GitHub

1. In Replit, open **Tools → Setup → Git** and connect this project to a GitHub repository. Replit's [Git pane guide](https://docs.replit.com/features/workspace-tools/git-interface) explains the connection and sync controls.
2. If your existing repository contains the old website and you are unsure about replacing it, make a backup or create a new repository first. Keep the old repository until you have checked the new site.
3. After the first push, copy the repository's GitHub URL. On your computer, clone it and open the folder in VS Code:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   cd YOUR-REPOSITORY
   code .
   ```

You can also edit the Replit project from VS Code over SSH; see Replit's [SSH guide](https://docs.replit.com/features/workspace-tools/ssh).

## Edit and preview in VS Code

1. Open the **project root** in VS Code. It is the folder that contains `pnpm-workspace.yaml`.
2. Install Node.js 24 and Git if they are not already installed.
3. Open **Terminal → New Terminal** in VS Code and run:

   ```bash
   corepack enable
   pnpm install
   pnpm --filter @workspace/bibek-portfolio run dev
   ```

4. Open the local address printed in the terminal. The page refreshes when you save edits.
5. To update wording, search the files under `artifacts/bibek-portfolio/src` in VS Code (`Ctrl+Shift+F` on Windows/Linux, `Cmd+Shift+F` on macOS). The CSS and visual styling are in the same `src` folder.
6. Replace `public/Bibek_Regmi_CV.pdf` when your CV changes. Keep that filename unless you also update the page's download link.

## Add ongoing-site photos later

The two frames in the **On site** section are intentionally blank. When you have photos:

1. Add each optimized image to `artifacts/bibek-portfolio/public/`, for example `site-01.jpg`.
2. In `artifacts/bibek-portfolio/src/App.tsx`, find `ongoingSites` near the top. For the matching frame, change `image: null` to `image: '/site-01.jpg'`, then add a descriptive `alt` text and short `caption`. Leave `image: null` on any frame that should stay empty.
3. Run the local preview commands above, then use the GitHub steps below to commit and push the changes.

Use a compressed JPG or WebP around 1600 pixels wide to keep the repository light.

If `corepack enable` is blocked by your computer, install pnpm 10.26.1 using the official pnpm installation instructions, then run the remaining commands.

## Save changes to GitHub

Open a terminal at the project root. Check the changes before committing:

```bash
git status
git add .
git commit -m "Update personal portfolio"
git push origin main
```

If your GitHub repository uses a branch other than `main`, push that branch instead. If this is your first time connecting a local copy to GitHub, create an empty repository on GitHub, then follow GitHub's **…or push an existing repository** instructions before the first push. Do not upload only the `artifacts/bibek-portfolio` folder; the workspace files at the project root are needed to install and build the site.

## Publish with GitHub Pages

The root `.github/workflows/deploy-portfolio.yml` workflow builds the portfolio and publishes it to GitHub Pages whenever you push to `main`. **A push to `main` will replace the site currently served by that repository**, so preview your changes before pushing.

1. Push the complete project to GitHub.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. Open the repository's **Actions** tab and wait for **Publish portfolio to GitHub Pages** to finish.
4. The original custom-domain file is kept at `artifacts/bibek-portfolio/public/CNAME` (`www.bibekreg.com.np`). In **Settings → Pages**, confirm the custom domain is `www.bibekreg.com.np`. Keep your current domain DNS records unless GitHub reports a specific domain configuration problem.

For future edits, save in VS Code, preview locally, then repeat the GitHub commands above. GitHub Pages will publish the updated site after the push.
