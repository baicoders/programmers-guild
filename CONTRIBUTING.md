# Contributing a Project Brief

Want to add a new project, or a whole new language? Great. Please keep it in the spirit of the Guild.

Briefs live in two folders:

- `projects/school/`: school-themed systems. Students build these inside the baicoders org.
- `projects/hobby/`: projects for fun. Students build these on their personal GitHub and must deploy them.

## The golden rules for briefs

1. **Describe the *what*, never the *how*.** Requirements say what the finished project does. They don't say which functions to write.
2. **No solution code.** Sample *output* is fine (it clarifies the spec). Sample *implementation* is not.
3. **Hints nudge, they don't solve.** A good hint is a question, a concept to search, or a warning about a common trap. Always put hints inside `<details>` so students choose to open them.
4. **Keep it small.** A Beginner project should take hours, not weeks. If a requirement list is longer than ~8 items, split the project.
5. **Teach one real-world lesson.** Every project should leave students with something professionals care about: validation, persistence, testing, security, concurrency, accessibility…

## How to add one

1. Copy [`projects/_TEMPLATE.md`](projects/_TEMPLATE.md).
2. Add it to the right language file in `projects/school/` or `projects/hobby/`, or create a new language file in **both** folders.
3. Add it to the **Project Catalog** table in the [README](README.md).
4. Open a Pull Request explaining who the project is for and what it teaches.

## Keep the format: the website reads it

The project website (`index.html`) builds itself from these Markdown files every time someone loads it. There's no build
step, but it relies on a few formatting rules:

- Each project heading is exactly `## <🟢|🟡|🔴> <number>. <Title>`.
- The line under it starts with `**Level:** … · **Time:** … · **Repo name:** \`repo-name\``.
- Sections use `### The mission`, `### Requirements`, `### Things to research`, and so on.
- Requirements are `- [ ]` checkboxes. Students tick them on the website.
- **New language?** Create `projects/school/<id>.md` **and** `projects/hobby/<id>.md`, then add it to the `LANGUAGES` list at the top of `assets/app.js`.
- School briefs should use fake data only and fit a real school setting. Hobby briefs keep the language's deploy rule in the file intro.

To preview your change, serve the repository folder and open it in a browser:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. (Opening `index.html` directly from disk won't work, because browsers block it from reading the Markdown files.)

## Publishing the website (maintainers)

The site is plain static files, so **GitHub Pages** can host it for free:

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and the `/ (root)` folder, and save.
3. After a minute, the site is live at **https://baicoders.github.io/programmers-guild/**.
4. Put that link in the repository's **About** section as well (the README already links to it).

### Let students create school repos in the org

School projects are created **inside** the baicoders org, so members need permission to create repositories:

1. Go to the org's **Settings → Member privileges**.
2. Under **Repository creation**, allow members to create repositories (public, private, or both, depending on whether school work should be visible outside the org).
3. Consider giving teachers a **team** with read access to all repositories, so they can review submissions.

Every merged pull request updates the site automatically.

**Changed `assets/app.js` or `assets/style.css`?** Bump the `?v=` number on both links in `index.html` (e.g. `?v=2` → `?v=3`).
GitHub Pages lets browsers cache files for 10 minutes, and without a new number some visitors will get the old script,
which may no longer match the Markdown files. The empty `.nojekyll` file tells GitHub Pages to serve the Markdown files as they are.
