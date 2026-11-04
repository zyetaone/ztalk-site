# zTalk site and downloads

This repository serves two things, and they belong together:

1. The **public website and documentation** at
   <https://zyetaone.github.io/ztalk-site/>.
2. Every **installer and update file** that people download, held in this
   repository's Releases.

It is public because GitHub needs a public repository for anonymous downloads
and for Pages. The application source lives in
[`zyetaone/ztalk`](https://github.com/zyetaone/ztalk).

## Layout

```
index.html      download page
styles.css      styles for the page and the docs
script.js       behaviour for the page
config.js       every external link in one place
assets/         images and fonts
docs/           documentation site, served at /docs/
```

## Releases

Each product version is one release, tagged `v<version>`, for example `v1.0.12`.
Release asset names never change between versions, so a link keeps working:

| File | Platform |
| --- | --- |
| `zTalk-mac-arm64.dmg` | macOS installer |
| `zTalk-mac-arm64.zip` | macOS payload for the in-app update |
| `latest-mac.yml` | update metadata the macOS app reads |
| `zTalk-win-x64.exe` | Windows installer |
| `latest.yml` | update metadata the Windows app reads |
| `zTalk-<version>-android.apk` | Android package |

Runtime helper binaries sit in their own releases: `runtime-0.0.11`,
`meeting-aec-helper-v1.0.0`, `windows-*` helpers, and `linux-text-monitor-*`.

The installed apps poll `releases/latest` here every four hours. A new release
therefore reaches every user without a website change.

## Change the website

The website source lives in `apps/website` of the application repository. Copy
it here, commit, and GitHub Pages rebuilds.

```sh
rsync -a --exclude=.git ../ztalk/apps/website/ ./
git add -A && git commit -m "Website: <change>" && git push
```

## Check before you publish

1. Open the site. Every download button must resolve. Each link points into
   `releases/download/...`.
2. Confirm the newest release has `latest-mac.yml` for macOS and `latest.yml` for
   Windows.
3. Confirm each installer matches the checksum in its metadata file.
