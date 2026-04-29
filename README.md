# Digital Business Card

This project is ready for GitHub Pages and built so one page can serve multiple people.

## Where to add data

Add or edit each person's data in `profiles.js`.

## Where to add photos

Put each PNG here:

- `assets/profiles`

Example:

- `assets/profiles/saed-kamel.png`
- `assets/profiles/john-doe.png`

The `image` field in `profiles.js` must match the file name.

## How to open each person's card

You can use any of these:

- `https://your-domain.github.io/?person=saed-kamel`
- `https://your-domain.github.io/#saed-kamel`
- `https://your-domain.github.io/saed-kamel`

The clean `/saed-kamel` route works because this project includes `404.html` for GitHub Pages fallback.

## Photo positioning

If a head is too high or low in the circle, change `imagePosition` in `profiles.js`.

Examples:

- `"center 18%"` moves the photo up a little
- `"center 30%"` moves the photo down a little

## Publish on GitHub Pages

1. Push these files to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `Deploy from a branch`.
4. Choose your main branch and root folder.
5. Your QR code can point directly to the person's slug URL.
