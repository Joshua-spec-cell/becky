# Becky Esther — Birthday Site

A static Next.js site. No backend, no database. Builds to plain HTML/CSS/JS and
deploys straight to GitHub Pages.

---

## 1. Folder structure

```
/
├── app/
│   ├── layout.js          fonts + page metadata
│   ├── page.js            section order
│   └── globals.css        all styling (design tokens at the top)
├── components/            one file per section
├── lib/
│   ├── content.js         ← EDIT THIS. Captions, timeline, messages, photos.
│   └── asset.js           handles the GitHub Pages URL prefix
├── public/
│   ├── images/            ← your photos go here
│   └── audio/             ← your song goes here
├── next.config.mjs
└── README.md
```

---

## 2. Add your photos

Drop the files into `public/images/`:

| File | Used for |
|---|---|
| `becky-hero.jpg` | the big portrait on the landing page |
| `photo1.jpg` … `photo8.jpg` | the gallery, timeline and memory box |

For the hero portrait, a **PNG with a transparent background** (a cut-out) gives
the magazine look — the photo then sits inside the coloured arch shape instead of
in a rectangle. A normal JPG still works fine.

Photos in the gallery are rendered at their **true aspect ratio and never
cropped**, so portrait and landscape shots can be mixed freely. Resize anything
over ~2000px wide before uploading so the site stays fast on mobile data.

Using different filenames? Just change the paths in `lib/content.js`.

## 3. Add the music

Put the track at `public/audio/birthday-song.mp3`.

The site tries to autoplay on load. Browsers block unmuted autoplay, so if that
fails it starts silently on the visitor's first tap or key press instead. The
music keeps playing across sections and never restarts on scroll. The floating
button bottom-right toggles it and shows an animated equaliser while playing.

To change the file or the volume, edit the `music` object in `lib/content.js`.

## 4. Change the words

Everything editable lives in **`lib/content.js`**:

- `person` — name, date, hero paragraph
- `memories` — gallery photos and captions (`tilt` sets each photo's rotation)
- `timeline` — years, titles, descriptions, photos
- `messages` — the message cards
- `randomMemories` — photo + line pairs for the "Want another memory?" box
- `wish` / `finale` — closing copy, including the personal paragraph to replace

Add or remove items from any array and the layout adapts. No other file needs
touching.

## 5. Change the colours

Top of `app/globals.css`, under `:root`. Every colour in the site comes from
those six variables.

---

## 6. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 7. Deploy to GitHub Pages

1. Open `next.config.mjs` and set `repo` to your repository name:
   ```js
   const repo = "becky-birthday";
   ```
   If you're publishing to `yourname.github.io` (a user site), set it to `""`.

2. Push the project to GitHub on the `main` branch.

3. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes on
   every push. Your site appears at
   `https://<username>.github.io/<repo>/`

### Manual alternative

```bash
npm run build      # writes the static site to ./out
touch out/.nojekyll
```
Then publish the `out` folder however you like (or push it to a `gh-pages` branch).

---

## Notes

- Images lazy-load below the fold; animations run through `IntersectionObserver`
  and CSS transforms only.
- `prefers-reduced-motion` disables the confetti canvas, the drifting blobs and
  all entrance animations.
- The lightbox supports arrow keys and Escape on desktop, swipe on mobile.
