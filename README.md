# ⚔️ Programmers Guild — Project Board

> Pick a project. Make it yours. Ship it to GitHub.

This repository is a **quest board**, not a tutorial. Every project here is a brief, like the ones you'd get at a real job:
it says **what** to build. Working out **how** is up to you.

You won't find solution code here. You'll find a goal, requirements, things to research, and a few hints hidden
behind a click. The struggle is where the learning happens.

> 🌐 **Prefer browsing?** The whole board is also a website where you can filter projects, tick off requirements and track
> your progress: **[baicoders.github.io/programmers-guild](https://baicoders.github.io/programmers-guild/)**

---

## 🧭 The Journey

This is how every guild member goes from zero to a shipped project. Tick the boxes as you go.

- [ ] **1. Create a GitHub account.** Pick a professional username: recruiters will see it one day.
- [ ] **2. Join the Guild.** Ask a maintainer to invite you to the [**baicoders**](https://github.com/baicoders) organization, then accept the invite from your email or at [github.com/orgs/baicoders/invitation](https://github.com/orgs/baicoders/invitation).
- [ ] **3. Browse this repository.** Read this README to the end. Seriously.
- [ ] **4. Do the [Warm-up Quest](projects/warm-up.md).** It teaches you the Git workflow you'll use for every other project.
- [ ] **5. Pick a project** from the [Project Catalog](#-project-catalog): a **school** project or a **hobby** project (see [Two Tracks](#-two-tracks)).
- [ ] **6. Create the repository in the right place.** School projects go in the baicoders org. Hobby projects go on your personal account.
- [ ] **7. Build it.** Commit early, commit often.
- [ ] **8. Push to GitHub** and make sure your repo meets the [Definition of Done](#-definition-of-done).
- [ ] **9. Hand it in or ship it.** School: send the repo link to your teacher. Hobby: deploy it, then add it to the [Showcase](SHOWCASE.md) with a Pull Request.

```
GitHub account ─► join org ─► browse board ─► pick project ─► new repo ─► build ─► push ─► hand in / deploy
                                                                  ▲           │
                                                                  └─ commit ◄─┘
```

---

## 🎒 Two Tracks

| | 🏫 School projects | 🎨 Hobby projects |
|---|---|---|
| **What** | Systems a school would use: grading, enrollment, attendance, library, clinic… | Anything fun: games, tools, apps, websites |
| **Where the repo goes** | Inside the **[baicoders](https://github.com/baicoders)** org | Your **personal** GitHub account |
| **Repo name** | `<your-username>-<repo-name>`, e.g. `juandelacruz-python-final-grade` | `<repo-name>`, e.g. `python-expense-tracker` |
| **Deployed?** | Not required (but welcome) | **Required.** Every hobby project must be live or downloadable |
| **Who sees it** | Your teachers review it in the org | The whole world: it's your portfolio |

**Why the username prefix?** Many students build the same school project, and every repo in an organization needs a unique name.
Starting with your username keeps yours apart, and teachers can find all of your work at a glance.

**What counts as "deployed"?**

- **Websites and web apps:** a live URL anyone can open. Use GitHub Pages for static sites, or a free hosting service for back-ends (research which ones currently support your language, because free tiers change often).
- **Command-line and desktop apps:** a **GitHub Release** with a downloadable build (an `.exe`, a `.jar`, a binary) and clear install steps.
- Either way, the link goes at the top of your README and in the repo's **About** section.

> 🔒 **School projects use fake data only.** Never put real students' names, grades, IDs or contact details in a project or a repo.

---

## 🧰 Before You Start

You need three things. Installing and setting them up is part of the exercise.

| Tool | Why | Where to learn |
|---|---|---|
| **Git** | Tracks changes to your code | [git-scm.com](https://git-scm.com/downloads) · [Pro Git book (free)](https://git-scm.com/book/en/v2) |
| **A code editor** | Somewhere to write code | [VS Code](https://code.visualstudio.com/) is a good default, but use whatever you like |
| **Your language's toolchain** | To run your code | Each project file lists what you need |

> 💡 **First test:** open a terminal and run `git --version`. If you get a version number, you're ready.
> If you get an error, working out why is your first debugging session.

---

## 📜 Rules of the Guild

1. **No copy-pasting solutions.** Copying code you don't understand teaches you nothing. Copying code you **do** understand, then adapting it, is fine: that's how professionals work.
2. **Read the error message.** The whole thing. Then search it. Most answers are in the error itself.
3. **Official docs first.** Blog posts go out of date. Documentation doesn't (as much).
4. **AI is a tutor, not a ghostwriter.** Ask it to *explain* a concept or an error. Don't ask it to write your project. If you can't explain every line of your repo, it isn't your repo yet.
5. **The 30-minute rule.** Stuck for 30 minutes? Take a break, then ask for help (see [Getting Help](#-getting-help)). Always say what you've already tried.
6. **Hints are one at a time.** Each project has collapsed hints. Open one, try again, and only then open the next.
7. **Done beats perfect.** Ship the requirements first. Stretch goals come after.

---

## 🗺️ Project Catalog

**Levels:** 🟢 Beginner · 🟡 Intermediate · 🔴 Challenge

Start with 🟢 in any language. You don't have to finish every level in one language before trying another.
Each language has **6 school projects** and **6 hobby projects**, two at each level. New here? Start with the
[Warm-up: Your First Repo](projects/warm-up.md).

### 🏫 School Projects

Repo goes in the **baicoders** org, named `<your-username>-<repo-name>`.

| Language | 🟢 Beginner | 🟡 Intermediate | 🔴 Challenge |
|---|---|---|---|
| **HTML / CSS** | [School Announcement Board](projects/school/html-css.md#-1-school-announcement-board)<br>[Class Schedule Timetable](projects/school/html-css.md#-2-class-schedule-timetable) | [School Website Homepage](projects/school/html-css.md#-3-school-website-homepage)<br>[Enrollment Form](projects/school/html-css.md#-4-enrollment-form) | [Department Microsite](projects/school/html-css.md#-5-department-microsite)<br>[Student Handbook](projects/school/html-css.md#-6-student-handbook) |
| **JavaScript** | [General Weighted Average Calculator](projects/school/javascript.md#-1-general-weighted-average-calculator)<br>[Recitation Picker](projects/school/javascript.md#-2-recitation-picker) | [Attendance Tracker](projects/school/javascript.md#-3-attendance-tracker)<br>[Exam Reviewer Flashcards](projects/school/javascript.md#-4-exam-reviewer-flashcards) | [Class Schedule Planner](projects/school/javascript.md#-5-class-schedule-planner)<br>[Quiz Maker for Teachers](projects/school/javascript.md#-6-quiz-maker-for-teachers) |
| **Python** | [Final Grade Calculator](projects/school/python.md#-1-final-grade-calculator)<br>[Seat Plan Generator](projects/school/python.md#-2-seat-plan-generator) | [Report Card Generator](projects/school/python.md#-3-report-card-generator)<br>[School Library System](projects/school/python.md#-4-school-library-system) | [Enrollment System](projects/school/python.md#-5-enrollment-system)<br>[Exam Scheduler](projects/school/python.md#-6-exam-scheduler) |
| **Java** | [Student Registration & ID Generator](projects/school/java.md#-1-student-registration--id-generator)<br>[Tuition Fee Calculator](projects/school/java.md#-2-tuition-fee-calculator) | [Classroom Reservation System](projects/school/java.md#-3-classroom-reservation-system)<br>[Student Council Election](projects/school/java.md#-4-student-council-election) | [School Management System](projects/school/java.md#-5-school-management-system)<br>[Grades REST API](projects/school/java.md#-6-grades-rest-api) |
| **C#** | [Canteen Ordering Kiosk](projects/school/csharp.md#-1-canteen-ordering-kiosk)<br>[Class Attendance Console](projects/school/csharp.md#-2-class-attendance-console) | [Student Information System](projects/school/csharp.md#-3-student-information-system)<br>[School Clinic Log](projects/school/csharp.md#-4-school-clinic-log) | [Faculty Evaluation System](projects/school/csharp.md#-5-faculty-evaluation-system)<br>[Online Grade Portal](projects/school/csharp.md#-6-online-grade-portal) |
| **C++** | [Honor Roll Checker](projects/school/cpp.md#-1-honor-roll-checker)<br>[Math Drill for Pupils](projects/school/cpp.md#-2-math-drill-for-pupils) | [Library Catalog](projects/school/cpp.md#-3-library-catalog)<br>[Schedule Conflict Checker](projects/school/cpp.md#-4-schedule-conflict-checker) | [Registrar Queue Simulator](projects/school/cpp.md#-5-registrar-queue-simulator)<br>[Campus Navigator](projects/school/cpp.md#-6-campus-navigator) |
| **PHP** | [Grade Inquiry Page](projects/school/php.md#-1-grade-inquiry-page)<br>[School Event Registration](projects/school/php.md#-2-school-event-registration) | [Lost and Found Board](projects/school/php.md#-3-lost-and-found-board)<br>[Teacher Attendance App](projects/school/php.md#-4-teacher-attendance-app) | [School Library System](projects/school/php.md#-5-school-library-system)<br>[Enrollment & Grades Portal](projects/school/php.md#-6-enrollment--grades-portal) |
| **Go** | [Grade Report CLI](projects/school/go.md#-1-grade-report-cli)<br>[Group Maker](projects/school/go.md#-2-group-maker) | [School Announcements API](projects/school/go.md#-3-school-announcements-api)<br>[Gate Attendance Log Analyzer](projects/school/go.md#-4-gate-attendance-log-analyzer) | [Room Booking Service](projects/school/go.md#-5-room-booking-service)<br>[Bulk Report Card Generator](projects/school/go.md#-6-bulk-report-card-generator) |
| **Rust** | [GPA Calculator](projects/school/rust.md#-1-gpa-calculator)<br>[Student Number Validator](projects/school/rust.md#-2-student-number-validator) | [Grade Book CLI](projects/school/rust.md#-3-grade-book-cli)<br>[Quiz Engine](projects/school/rust.md#-4-quiz-engine) | [Plagiarism Checker](projects/school/rust.md#-5-plagiarism-checker)<br>[Library Search Engine](projects/school/rust.md#-6-library-search-engine) |

### 🎨 Hobby Projects

Repo goes on your **personal** GitHub, and it **must be deployed**.

| Language | 🟢 Beginner | 🟡 Intermediate | 🔴 Challenge |
|---|---|---|---|
| **HTML / CSS** | [Profile Card](projects/hobby/html-css.md#-1-profile-card)<br>[Pricing Table](projects/hobby/html-css.md#-2-pricing-table) | [Responsive Landing Page](projects/hobby/html-css.md#-3-responsive-landing-page)<br>[Photo Gallery](projects/hobby/html-css.md#-4-photo-gallery) | [Recipe Book](projects/hobby/html-css.md#-5-recipe-book)<br>[Developer Portfolio](projects/hobby/html-css.md#-6-developer-portfolio) |
| **JavaScript** | [Tip Calculator](projects/hobby/javascript.md#-1-tip-calculator)<br>[Stopwatch & Timer](projects/hobby/javascript.md#-2-stopwatch--timer) | [To-Do List](projects/hobby/javascript.md#-3-to-do-list)<br>[Quiz App](projects/hobby/javascript.md#-4-quiz-app) | [Weather Dashboard](projects/hobby/javascript.md#-5-weather-dashboard)<br>[Memory Match Game](projects/hobby/javascript.md#-6-memory-match-game) |
| **Python** | [Guess the Number](projects/hobby/python.md#-1-guess-the-number)<br>[Password Generator](projects/hobby/python.md#-2-password-generator) | [Expense Tracker](projects/hobby/python.md#-3-expense-tracker)<br>[Contact Book](projects/hobby/python.md#-4-contact-book) | [File Organizer](projects/hobby/python.md#-5-file-organizer)<br>[Habit Tracker Web App](projects/hobby/python.md#-6-habit-tracker-web-app) |
| **Java** | [Grade Calculator](projects/hobby/java.md#-1-grade-calculator)<br>[Tic-Tac-Toe](projects/hobby/java.md#-2-tic-tac-toe) | [Bank Account System](projects/hobby/java.md#-3-bank-account-system)<br>[Parking Lot System](projects/hobby/java.md#-4-parking-lot-system) | [Library Manager](projects/hobby/java.md#-5-library-manager)<br>[Multi-Client Chat Server](projects/hobby/java.md#-6-multi-client-chat-server) |
| **C#** | [Unit Converter](projects/hobby/csharp.md#-1-unit-converter)<br>[Hangman](projects/hobby/csharp.md#-2-hangman) | [Inventory Manager](projects/hobby/csharp.md#-3-inventory-manager)<br>[Pomodoro Timer (Desktop App)](projects/hobby/csharp.md#-4-pomodoro-timer-desktop-app) | [Notes API](projects/hobby/csharp.md#-5-notes-api)<br>[Turn-Based Battle Game](projects/hobby/csharp.md#-6-turn-based-battle-game) |
| **C++** | [Calculator](projects/hobby/cpp.md#-1-calculator)<br>[ATM Simulator](projects/hobby/cpp.md#-2-atm-simulator) | [Student Records](projects/hobby/cpp.md#-3-student-records)<br>[Matrix Calculator](projects/hobby/cpp.md#-4-matrix-calculator) | [Text Adventure](projects/hobby/cpp.md#-5-text-adventure)<br>[Game of Life](projects/hobby/cpp.md#-6-game-of-life) |
| **PHP** | [Contact Form](projects/hobby/php.md#-1-contact-form)<br>[Quote of the Day](projects/hobby/php.md#-2-quote-of-the-day) | [Guestbook](projects/hobby/php.md#-3-guestbook)<br>[Image Upload Gallery](projects/hobby/php.md#-4-image-upload-gallery) | [Mini Blog](projects/hobby/php.md#-5-mini-blog)<br>[Shopping Cart](projects/hobby/php.md#-6-shopping-cart) |
| **Go** | [Word Counter](projects/hobby/go.md#-1-word-counter)<br>[Dice Roller](projects/hobby/go.md#-2-dice-roller) | [URL Shortener](projects/hobby/go.md#-3-url-shortener)<br>[Duplicate File Finder](projects/hobby/go.md#-4-duplicate-file-finder) | [Site Status Checker](projects/hobby/go.md#-5-site-status-checker)<br>[Static Site Generator](projects/hobby/go.md#-6-static-site-generator) |
| **Rust** | [Rock Paper Scissors](projects/hobby/rust.md#-1-rock-paper-scissors)<br>[Caesar Cipher](projects/hobby/rust.md#-2-caesar-cipher) | [To-Do CLI](projects/hobby/rust.md#-3-to-do-cli)<br>[Directory Tree](projects/hobby/rust.md#-4-directory-tree) | [Log Analyzer](projects/hobby/rust.md#-5-log-analyzer)<br>[Key-Value Store](projects/hobby/rust.md#-6-key-value-store) |

---

## ✅ Definition of Done

A project counts as **done** when your repository has all of these:

- [ ] **The right place and name.** School: inside the baicoders org as `<your-username>-<repo-name>`. Hobby: on your personal account with a descriptive name (e.g. `python-expense-tracker`, not `project1`).
- [ ] **A `README.md`** that covers:
  - what the project does (one or two sentences)
  - how to install and run it (someone else should be able to follow this)
  - a screenshot or sample output
  - what you learned, or what you'd improve next
- [ ] **A `.gitignore`** so build output, dependencies and editor junk aren't committed.
- [ ] **Meaningful commit history.** Many small commits, not one giant "final version" commit.
- [ ] **No secrets.** No passwords, API keys or personal data anywhere in the repo, **including old commits**.
- [ ] **All requirements met** from the project brief.
- [ ] **Hobby projects only: deployed.** A live link or a GitHub Release, linked at the top of your README.
- [ ] **School projects only: fake data.** No real student information anywhere.

> 🧪 **The real test:** ask a friend to clone your repo and run it using only your README.
> If they have to ask you anything, your README needs work.

### Writing good commit messages

Write a short summary in the imperative mood, as if giving an order:

```
✅ Add input validation for negative amounts
✅ Fix crash when file is empty
❌ stuff
❌ fixed it
❌ asdfgh
```

---

## 🆘 Getting Help

Stuck after the 30-minute rule? [Open a **Help Request** issue](https://github.com/baicoders/programmers-guild/issues/new?template=help-request.md) in this repository. A good help request includes:

- a link to your repo
- what you expected to happen
- what actually happened (paste the **full** error)
- what you've already tried

People are much more likely to help you if you've clearly tried things yourself.

---

## 🏆 Showcase

Finished and deployed a hobby project? Add it to [SHOWCASE.md](SHOWCASE.md) with a Pull Request. That means learning to **fork**, **branch**,
**commit**, and **open a PR**: the workflow you'll use on every team you ever join.

---

## 🛠️ Contributing a Project

Got an idea for a new project brief? See [CONTRIBUTING.md](CONTRIBUTING.md).
