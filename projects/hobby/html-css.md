# HTML / CSS Hobby Projects

[← Back to the board](../../README.md)

**You'll need:** a browser and a code editor. That's it.
**Rule for this track:** no CSS frameworks (no Bootstrap, no Tailwind). Learn the fundamentals first.
**Where it goes:** your **personal** GitHub account (`github.com/<your-username>/<repo-name>`). These projects are yours to keep and show off.

> 🚀 **Deploy it (required):** every project must be live on **GitHub Pages**. Put the live link at the top of your README and in the repo's **About** section.

---

## 🟢 1. Profile Card

**Level:** Beginner · **Time:** 2–3 hours · **Repo name:** `html-profile-card`

### The mission

Build a single "digital business card" page about yourself (or a made-up character) that you'd be happy to share.

### Requirements

- [ ] A card centered on the page, both horizontally and vertically.
- [ ] A profile image, a name, a short bio and a job title or role.
- [ ] At least 3 links (GitHub, email, anything else), styled as buttons.
- [ ] A hover effect on the buttons.
- [ ] Use **semantic HTML** (not just `<div>` everywhere).
- [ ] CSS lives in a separate `.css` file, not inline.

### Things to research

Semantic HTML elements · the CSS box model · Flexbox · `:hover` · `border-radius` · Google Fonts · the `alt` attribute

<details>
<summary>💡 Hint 1</summary>

Centering something vertically used to be hard. It isn't anymore. Look up "center a div with flexbox" and learn **why** it works,
not just the three lines that make it work.
</details>

<details>
<summary>💡 Hint 2</summary>

If your page looks different from what you expected, open your browser's **DevTools** (F12) and inspect the element.
You can edit CSS live in there before changing your file.
</details>

### Stretch goals

- Add a light/dark toggle using only CSS (look up `prefers-color-scheme`).
- Add a subtle entrance animation with `@keyframes`.
- Host it on GitHub Pages.

---

## 🟢 2. Pricing Table

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `html-pricing-table`

### The mission

A made-up app or streaming service needs a pricing section showing three plans: **Basic**, **Pro** and **Team**.

### Requirements

- [ ] Three plan cards side by side, each with a name, price, billing period, feature list and a "Choose plan" button.
- [ ] The middle plan is **highlighted** as "Most popular" (bigger, a badge, a different color: your call).
- [ ] Features that a plan doesn't include are shown differently (e.g. crossed out or greyed).
- [ ] All cards are the same height, even when their feature lists are different lengths.
- [ ] On narrow screens the cards stack vertically.
- [ ] Buttons have hover **and** keyboard focus styles.

### Things to research

Flexbox `align-items: stretch` · `:focus-visible` · `<ul>` styling · `position: relative` / `absolute` for badges · `transform: scale()` · media queries

<details>
<summary>💡 Hint 1</summary>

Press **Tab** on your page. Can you see where you are? Keyboard users need to, which is why focus styles are a requirement.
</details>

<details>
<summary>💡 Hint 2</summary>

To push every button to the bottom of its card no matter how many features there are, look at making the card itself a
flex container with a vertical direction.
</details>

### Stretch goals

- A monthly/yearly toggle that changes the prices, using only CSS (radio buttons + the sibling selector).
- A comparison table below the cards for wide screens.

---

## 🟡 3. Responsive Landing Page

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `html-landing-page`

### The mission

A local coffee shop, gym or bakery (made up, or a real one you like) wants a one-page website. It has to look good on
**phones**, **tablets**, and **desktops**.

### Requirements

- [ ] A navigation bar with links that jump to each section of the page.
- [ ] A "hero" section with a headline, a short tagline and a call-to-action button.
- [ ] A features/menu/services section with at least 3 items laid out in a grid.
- [ ] A testimonials or "about us" section.
- [ ] A footer with contact info and copyright.
- [ ] **Responsive:** on narrow screens the grid stacks into one column and the nav still works.
- [ ] A contact form (name, email, message). It doesn't need to send anything, but the fields should validate using HTML attributes.

### Things to research

CSS Grid · media queries · mobile-first design · `rem` vs `px` · CSS variables (`--custom-properties`) · form validation attributes · anchor links · `scroll-behavior`

<details>
<summary>💡 Hint 1</summary>

Design for the **smallest** screen first, then add media queries for larger screens. It's usually easier than the reverse.
</details>

<details>
<summary>💡 Hint 2</summary>

Put your colors and spacing in CSS variables at the top of your stylesheet. When you want to change the brand color later,
you'll only change it once.
</details>

<details>
<summary>💡 Hint 3</summary>

DevTools has a "device toolbar" that lets you preview different screen sizes. Use it constantly.
</details>

### Stretch goals

- A hamburger menu on mobile, **without JavaScript** (research "checkbox hack").
- Score 90+ on accessibility in Lighthouse (it's built into Chrome DevTools).

---

## 🟡 4. Photo Gallery

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `html-photo-gallery`

### The mission

A photographer wants a portfolio gallery. Photos of different shapes (tall, wide, square) should fit together nicely,
and clicking one should show it large.

### Requirements

- [ ] At least 12 images of **mixed** sizes and orientations (use your own photos or free-license images, and credit them).
- [ ] A grid layout where some images span 2 columns or 2 rows.
- [ ] Images never get stretched or squished.
- [ ] Hover effect: the image zooms slightly and a caption appears.
- [ ] Clicking an image opens a larger version in a **lightbox** with a close button, using **no JavaScript**.
- [ ] Images load lazily and are reasonably sized (no 8 MB files).
- [ ] Responsive from phone to widescreen.

### Things to research

CSS Grid `grid-column: span` · `grid-auto-flow: dense` · `object-fit` · the `:target` pseudo-class · `loading="lazy"` · image compression · `aspect-ratio` · image licensing (Unsplash, Pexels)

<details>
<summary>💡 Hint 1</summary>

A link to `#photo-3` makes the element with `id="photo-3"` the **target**. CSS can style targeted elements differently,
for example showing an overlay that's normally hidden.
</details>

<details>
<summary>💡 Hint 2</summary>

Check your repo size before you push. Large images make a repo slow to clone. Resize them first.
</details>

### Stretch goals

- "Previous" / "Next" links inside the lightbox.
- Category filter (Nature / City / People) using radio buttons and CSS only.
- Serve modern formats (`.webp`) with a fallback using `<picture>`.

---

## 🔴 5. Recipe Book

**Level:** Challenge · **Time:** 2–4 days · **Repo name:** `html-recipe-book`

### The mission

Build a multi-page recipe website with at least **5 recipes**. It needs a consistent design across every page, and it
has to be pleasant to read in the kitchen and when printed.

### Requirements

- [ ] A home page listing all recipes as cards (image, title, cook time, difficulty).
- [ ] A separate page for each recipe: ingredients list, numbered steps, prep/cook time, servings.
- [ ] One shared stylesheet used by every page, so no copy-pasted CSS.
- [ ] Consistent header and footer on every page.
- [ ] Fully responsive.
- [ ] A **print stylesheet**: when printed, hide the nav and images and use black text on white.
- [ ] Dark mode that follows the user's system setting.
- [ ] Accessible: proper heading order, alt text, readable color contrast.

### Things to research

`@media print` · `prefers-color-scheme` · CSS custom properties for theming · `<figure>` and `<figcaption>` · heading hierarchy · WCAG color contrast · relative file paths

<details>
<summary>💡 Hint 1</summary>

Plan the folder structure **before** you start: where do pages, images and styles live? Relative paths between folders
are the #1 cause of "my CSS isn't loading."
</details>

<details>
<summary>💡 Hint 2</summary>

If you define all your colors as CSS variables, dark mode is just redefining those variables inside one media query.
</details>

### Stretch goals

- A pure-CSS filter (e.g. show only "easy" recipes) using `:target` or radio buttons.
- Host on GitHub Pages with a custom 404 page.

---

## 🔴 6. Developer Portfolio

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `portfolio` (or `<your-username>.github.io`)

### The mission

Build **your own** portfolio website, and make it good enough to put on a CV. It should show off the other projects you've
built from this board.

### Requirements

- [ ] Sections: About, Skills, Projects, Contact.
- [ ] A project card for **every** Guild project you've finished, linking to its GitHub repo (and live demo, if it has one).
- [ ] Your own visual identity: pick a color palette and a font pairing on purpose, and explain your choices in the README.
- [ ] At least one tasteful CSS animation or transition that respects `prefers-reduced-motion`.
- [ ] Responsive, with dark mode.
- [ ] **Lighthouse score of 90+ in all four categories** (Performance, Accessibility, Best Practices, SEO). Screenshot it for your README.
- [ ] Proper `<head>`: title, meta description, favicon, and social preview tags.
- [ ] Deployed on **GitHub Pages**.

### Things to research

GitHub Pages user sites · Open Graph meta tags · favicons · `prefers-reduced-motion` · color palette tools · font pairing · Lighthouse · web performance basics

<details>
<summary>💡 Hint 1</summary>

Look at 10 developer portfolios you like before designing anything. Write down **what** you like about each one. Then close them all and design your own.
</details>

<details>
<summary>💡 Hint 2</summary>

A repo named exactly `<your-username>.github.io` is special on GitHub. Find out what it does.
</details>

<details>
<summary>💡 Hint 3</summary>

Low Performance score? It's usually images or fonts. Lighthouse tells you exactly which ones.
</details>

### Stretch goals

- A blog section with at least one post about something you learned.
- A custom domain.
- Keep it updated: this is a project that's never really "done."
