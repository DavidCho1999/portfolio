# How to edit your portfolio (no code)

Your projects now live in editable files, and you can manage them visually
through **Pages CMS** — a free website that logs in with your GitHub account.
No installs, nothing to run. Every change you save commits to GitHub and your
site rebuilds and goes live automatically in a minute or two.

## One-time setup (about 2 minutes)

1. Go to **https://app.pagescms.org**
2. Click **Sign in with GitHub** and authorize it.
3. Choose your repository: **DavidCho1999/portfolio**.
4. That's it — it reads the `.pages.yml` file in your repo and shows you a
   "Projects" editor.

## Editing day-to-day

Open https://app.pagescms.org, pick your repo, and click **Projects**.

- **Edit a project** — click it, change any text, save.
- **Add a project** — click **Add an entry**, fill in the fields, save.
  - Give it a unique **Slug** (lowercase, dashes, no spaces) — this is its URL.
  - Set **Display order** (lower number = appears earlier on the homepage).
- **Delete a project** — open it and choose delete.
- **Images** — use the **Thumbnail** field (homepage) and the **Images** list
  (the project page). The **first** image in the list is the big hero image.
  Click an image field to upload a new file or pick an existing one.
- **Reorder projects** — change the **Display order** number on each.

### Image tips

- The first image in **Images** is the hero shown at the top of the page.
- For a **slideshow**, set an image's **Type** to `slideshow` and add files to
  the **Slideshow images** list. "Slideshow speed" is in milliseconds
  (3000 = 3 seconds).
- For a **video**, set **Type** to `video` (use an `.mp4` file).
- Large photos are automatically compressed when the site builds, so you don't
  need to shrink them yourself — but smaller files still upload faster.

## Where things are (for reference)

- **Project content:** `src/content/projects/*.json` (one file per project)
- **Images:** `public/projects/...`
- **CMS configuration:** `.pages.yml`

You can keep editing through Pages CMS without ever touching these directly.
