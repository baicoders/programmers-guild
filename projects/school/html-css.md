# HTML / CSS School Projects

[← Back to the board](../../README.md)

**You'll need:** a browser and a code editor. That's it.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-html-class-schedule`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Rule for this track:** no CSS frameworks (no Bootstrap, no Tailwind) and no JavaScript. Learn the fundamentals first.

> 🏫 **Tip:** the people who use school websites are students on cheap phones, parents in a hurry and teachers printing things out. Test on a small screen and in print preview, not just on your laptop.

---

## 🟢 1. School Announcement Board

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `html-announcement-board`

### The mission

The student council posts announcements on a cork board that nobody reads. Build a single web page that shows the latest
announcements clearly, so students can check it on their phones between classes.

### Requirements

- [ ] At least 6 announcements, each with a title, a date, a short description and who posted it (a club or office, not a real person).
- [ ] Each announcement has one or more **category tags** (for example Exams, Events, Holiday, Sports), and each category has its own look.
- [ ] Urgent announcements stand out (a border, a label, a different background: your call) and appear first.
- [ ] Dates are marked up so a machine can read them, not just a human.
- [ ] Use **semantic HTML**: each announcement is its own self-contained element, not a pile of `<div>`s.
- [ ] Long titles or descriptions wrap nicely and never overflow their card, even on a narrow phone.
- [ ] Tags aren't told apart by color alone (someone who is colorblind should still know which is which).

### Things to research

`<article>` · `<time>` and the `datetime` attribute · `<header>` and `<footer>` inside an article · CSS classes vs IDs · `overflow-wrap` · color-blind friendly design

<details>
<summary>💡 Hint 1</summary>

Ask yourself: if this announcement were copied onto another page on its own, would it still make sense? If yes, there's
a semantic element made for exactly that.
</details>

<details>
<summary>💡 Hint 2</summary>

Paste a very long word (like a long URL) into one of your descriptions. Does it break your layout? Find out which CSS
property controls where words are allowed to break.
</details>

### Stretch goals

- An "archived" section for past announcements that looks faded.
- Show only one category at a time using radio buttons and the sibling selector, no JavaScript.
- Host it on GitHub Pages.

---

## 🟢 2. Class Schedule Timetable

**Level:** Beginner · **Time:** 3–4 hours · **Repo name:** `html-class-schedule`

### The mission

A class adviser wants to post the section's weekly class schedule online so students stop asking "what's our next
subject?" It has to work on phones and look clean when printed for the classroom wall.

### Requirements

- [ ] A weekly timetable built with a real HTML **table**: days across the top, time slots down the side.
- [ ] Each class shows the subject, the room and the teacher (use made-up teacher names).
- [ ] Headers are marked up so a screen reader can announce "Monday, 8:00 AM" for any cell.
- [ ] Each subject has a color, and a **legend** explains the colors. Subject names are still written in the cells.
- [ ] Classes longer than one time slot span multiple rows, and breaks or lunch are shown differently.
- [ ] Empty slots are clearly empty, not confusing blank gaps.
- [ ] On a phone the table stays readable without squashing the text into nothing.
- [ ] When printed, it fits on one page, in landscape, with no wasted background ink.

### Things to research

`<caption>` · `<th>` and the `scope` attribute · `rowspan` and `colspan` · `<thead>` / `<tbody>` · responsive tables · `overflow-x: auto` · `@media print` · `@page`

<details>
<summary>💡 Hint 1</summary>

Turn on a screen reader (Narrator on Windows, VoiceOver on Mac or iPhone, TalkBack on Android) and move through your table.
Does it tell you which day and time each cell belongs to? If not, look at how your header cells are marked up.
</details>

<details>
<summary>💡 Hint 2</summary>

There are a few common approaches to tables on small screens. Search "responsive tables" and compare them. Some are
friendlier to screen readers than others.
</details>

<details>
<summary>💡 Hint 3</summary>

Use your browser's print preview often. Background colors usually don't print by default. Decide if your legend still
works when that happens.
</details>

### Stretch goals

- Highlight the current row or column when you hover over a cell.
- A second table for a different section, using the same stylesheet without changes.

---

## 🟡 3. School Website Homepage

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `html-school-homepage`

### The mission

A small made-up school (give it a name, a logo and a motto) has an outdated website. The principal wants a new homepage
that tells parents and incoming students what the school offers and how to enroll, in under a minute of scrolling.

### Requirements

- [ ] A header with the school name, logo and a navigation bar.
- [ ] A **programs offered** section (strands, courses or grade levels) laid out as a grid of cards.
- [ ] An **admissions** section showing the enrollment steps in order, with the required documents.
- [ ] A **news** section with at least 3 recent items, each with a date and a "Read more" link.
- [ ] A **contact** section with office hours, an email, a phone number and an embedded map. Use a public landmark or a made-up address, never someone's home.
- [ ] A footer with quick links, social links and copyright.
- [ ] **Responsive** from a small phone to a wide desktop, and the nav still works on phones.
- [ ] Every image has meaningful alt text, and decorative images are hidden from screen readers.
- [ ] The embedded map has a title and doesn't break the layout on small screens.

### Things to research

CSS Grid · `repeat()` and `minmax()` · `<ol>` for ordered steps · embedding a map with `<iframe>` · the `title` attribute on iframes · empty `alt=""` for decorative images · `loading="lazy"` · `<address>`

<details>
<summary>💡 Hint 1</summary>

The admissions steps happen in a specific order. Which list element tells the browser (and screen readers) that the order
matters?
</details>

<details>
<summary>💡 Hint 2</summary>

Iframes have a fixed size by default. Search how to make an embedded map scale with its container. The `aspect-ratio`
property is a good place to start.
</details>

<details>
<summary>💡 Hint 3</summary>

Try to build the program cards so they reflow on their own as the screen gets wider, without a media query for every size.
</details>

### Stretch goals

- A "Skip to main content" link for keyboard users.
- A hamburger menu on mobile using only CSS.
- Score 90+ on accessibility in Lighthouse.

---

## 🟡 4. Enrollment Form

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `html-enrollment-form`

### The mission

The registrar still hands out paper enrollment forms that come back half-filled and unreadable. Build an online version
that catches mistakes before a student finishes, and prints cleanly so the registrar can file it. Nothing is actually
submitted anywhere.

### Requirements

- [ ] Sections for **personal information**, **parent or guardian**, **previous school**, **program choice** and a **requirements checklist** (birth certificate, report card, ID photo and so on).
- [ ] Each section is grouped with a proper group element and a visible title for the group.
- [ ] Every field has a visible label that is linked to its input. No placeholder-only fields.
- [ ] Use the right input type for each field (email, phone, date, number, radio, checkbox, select).
- [ ] Required fields are marked, and the form explains what the marker means.
- [ ] Use HTML validation to reject bad input: an impossible birth date, a malformed email, a phone number with letters, a missing required field.
- [ ] Invalid fields show a clear error style, but only **after** the user has interacted with them, not the moment the page loads.
- [ ] A consent checkbox about how the data will be used, which must be ticked before the form can be submitted.
- [ ] A **print stylesheet**: the filled form prints on paper cleanly, without buttons, nav or background colors.

### Things to research

`<fieldset>` and `<legend>` · `<label for>` · input types · `required`, `pattern`, `min`, `max`, `maxlength` · `:invalid` vs `:user-invalid` · `autocomplete` values · `@media print` · data privacy in forms

<details>
<summary>💡 Hint 1</summary>

Style your invalid fields with `:invalid` and reload the page. Everything is red before you've typed anything. That's
the problem the newer pseudo-class solves.
</details>

<details>
<summary>💡 Hint 2</summary>

Try to break your own form. Type letters into the phone field, pick a birth date in the future, paste 500 characters into
the name. Every one you can get through is a bug.
</details>

<details>
<summary>💡 Hint 3</summary>

Your `<form>` needs somewhere to go when submitted. Find out what happens when you leave `action` empty, and make sure
no real data ever leaves the page.
</details>

### Stretch goals

- A short "Data Privacy Notice" section explaining what each piece of data is for (research the Philippine Data Privacy Act of 2012).
- Show or hide the "previous school" section based on a "transferee" checkbox, using only CSS.
- Make the whole form usable with the keyboard alone, and test it.

---

## 🔴 5. Department Microsite

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `html-department-site`

### The mission

A college department (for example the Computer Science department of a made-up university) wants its own small website.
Students should be able to find their faculty, see the subjects for each year level and check upcoming events, all with
the same look on every page.

### Requirements

- [ ] At least 4 pages: **Home**, **Faculty**, **Curriculum** and **Events**.
- [ ] One shared stylesheet used by every page, so no copy-pasted CSS.
- [ ] The same header, navigation and footer on every page, with the **current page** clearly marked in the nav, visually and for screen readers.
- [ ] A **faculty directory** of cards: made-up name, position, specialization and a placeholder photo. No real faculty photos or contact details.
- [ ] A **curriculum** page listing subjects per year level and semester, with course codes and units.
- [ ] An **events** page with upcoming and past events, where past events look clearly finished.
- [ ] Fully responsive and navigable by keyboard alone.
- [ ] Accessible: logical heading order on every page, alt text, readable color contrast.
- [ ] No broken links: every link and image path works when you open the site from a different folder or host it.

### Things to research

Multi-page folder structure · relative file paths · `aria-current` · CSS custom properties · CSS Grid for card layouts · heading hierarchy · WCAG color contrast · link checkers · GitHub Pages

<details>
<summary>💡 Hint 1</summary>

Draw your folder structure on paper before writing any HTML. Where do pages, images and styles live? Most "my CSS isn't
loading" bugs are path bugs.
</details>

<details>
<summary>💡 Hint 2</summary>

Changing the color of the current nav link helps sighted users. Look up which attribute tells a screen reader the same
thing.
</details>

<details>
<summary>💡 Hint 3</summary>

Before building 4 pages, finish one page completely and make it your template. Fixing a mistake once is better than
fixing it four times.
</details>

### Stretch goals

- A custom 404 page in the same style.
- Deploy it on GitHub Pages and put the live link in your README.
- Filter faculty cards by specialization using only CSS.

---

## 🔴 6. Student Handbook

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `html-student-handbook`

### The mission

Every student gets a printed handbook that they lose in the first week. The Office of Student Affairs wants it online as
a documentation-style website that is easy to read, easy to search by scrolling, and still prints well for those who
want paper.

### Requirements

- [ ] Multiple pages, one per chapter, for at least: **school rules**, **grading system**, **attendance policy**, **dress code** and **student discipline**. Write the content yourself (it can be made up).
- [ ] A **sticky sidebar** table of contents that stays visible while reading on wide screens and moves out of the way on phones.
- [ ] Each chapter has sections with **anchor links**, so a teacher can send a link that jumps straight to "Tardiness".
- [ ] Anchored headings are not hidden under a sticky header when you jump to them.
- [ ] A "Back to top" link on long pages.
- [ ] The grading system includes a proper data table (grade ranges and their equivalents).
- [ ] **Excellent readability:** comfortable line length, line height and font size on every screen.
- [ ] **Dark mode** that follows the user's system setting, with readable contrast in both themes.
- [ ] A **print stylesheet**: no sidebar or nav, sensible page breaks (no heading stuck alone at the bottom of a page), and link URLs visible on paper.

### Things to research

`position: sticky` · fragment identifiers (`#id` links) · `scroll-margin-top` · `ch` units and line length · `line-height` · `prefers-color-scheme` · `@media print` · `break-before` / `break-after` / `break-inside` · printing link URLs with `::after`

<details>
<summary>💡 Hint 1</summary>

Sticky elements only stick inside their parent. If your sidebar refuses to stick, inspect its parent in DevTools and
check its height and overflow.
</details>

<details>
<summary>💡 Hint 2</summary>

Research the recommended number of characters per line for body text. Then find the CSS unit that is based on the width
of a character.
</details>

<details>
<summary>💡 Hint 3</summary>

Print preview a long chapter. Where do the pages split? Look up the CSS properties that control page breaks and which
browsers support them.
</details>

### Stretch goals

- A "Last updated" date on every chapter and a changelog page.
- A glossary page with anchor links to each term from the chapters.
- Score 90+ in all four Lighthouse categories and screenshot it for your README.
