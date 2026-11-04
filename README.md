# zTalk website

Static marketing site for zTalk. Structure mirrors a modern dictation landing page:
hero, privacy, features, platform downloads, FAQ, CTA and footer. All copy and
artwork are zTalk's; no files are loaded from another site.

## Run locally

```bash
cd website
python3 -m http.server 4173
# http://localhost:4173
```

Any static host works (Vercel, Netlify, Cloudflare Pages, S3, nginx). There is no
build step and no client-side framework.

## Set the download links

Edit `config.js` — every button reads from it:

```js
window.ZTALK_LINKS = {
  mac: "https://…/zTalk-1.0.0-arm64.dmg",
  windows: "https://…/zTalk-1.0.0-win-x64.exe",
  releases: "#download",
  ios: "",     // paste the App Store URL when live
  android: "", // paste the Google Play URL when live
  ...
};
```

An empty `ios` value renders the button as **App Store — soon** instead of
linking nowhere. Installer URLs are the exact files on the download host.

### Installer files

`config.js` points at the exact hosted files:

```
zTalk-1.0.0-arm64.dmg
zTalk-1.0.0-win-x64.exe
zTalk-1.0.0-android.apk
```

Update the version in those URLs on every release.

## Deploy

- **Vercel/Netlify/Cloudflare Pages**: set the project root to `website`, no build command, output `.`.
- **Any web server**: copy the `website/` directory as-is.

Point `ztalk.zyeta.ai` at the deployment and update `zyetaone.github.io/ztalk-site/docs` separately
(the docs site is a different service).

## Notes

- No analytics, cookies, external fonts or third-party scripts.
- Fonts are the system stack; images are local WebP/PNG.
- `assets/` is generated from the app's brand files — replace them together when
  the logo changes.
