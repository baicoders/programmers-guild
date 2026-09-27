# JavaScript School Projects

[← Back to the board](../../README.md)

**You'll need:** a browser and a code editor. These are **browser** projects: plain HTML + CSS + JavaScript, with no frameworks
(no React or Vue yet).
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-js-gwa-calculator`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** build these for a real person. Show your app to a classmate or a teacher halfway through and watch them use it
without helping. Whatever confuses them is your next fix.

---

## 🟢 1. General Weighted Average Calculator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `js-gwa-calculator`

### The mission

Every enrollment season, students grab a calculator to check if they made the Dean's List. Build a web app that
computes a General Weighted Average (GWA) from subjects, units and grades, and updates the moment anything changes.

### Requirements

- [ ] Add a subject with a name, number of units and a grade (use the 1.00–5.00 scale, where 1.00 is highest and 5.00 is failing).
- [ ] Subjects appear in a list, and each one can be removed.
- [ ] The GWA updates **live** every time a subject is added or removed. A subject with more units counts more.
- [ ] Show the total number of units.
- [ ] Show a remark based on the GWA (for example "Dean's Lister", "Passed", "Failed"). Keep the cutoffs in **one place** in your code so they're easy to change for a different school.
- [ ] Handles bad input: empty names, zero or negative units, grades outside the scale, letters. No `NaN` should ever reach the screen.
- [ ] When there are no subjects yet, show a friendly message instead of a GWA of `0.00` or `NaN`.
- [ ] The GWA is always shown with 2 decimal places.

### Example output

```
Subject         Units   Grade
Math 101          3     1.50
Filipino 1        3     1.25
PE 1              2     1.00

Total units: 8
GWA: 1.28 (Dean's Lister)
```

### Things to research

Weighted average · `addEventListener` · the `submit` event · `Number()` · `isNaN` · `toFixed()` · arrays of objects · `createElement`

<details>
<summary>💡 Hint 1</summary>

Work out a GWA by hand on paper first, with three subjects. If you can't explain the math out loud, you can't code it.
</details>

<details>
<summary>💡 Hint 2</summary>

Keep the subjects in an array. Every time the array changes, recalculate and redraw everything from it. Don't try to
"patch" the total by adding and subtracting.
</details>

<details>
<summary>💡 Hint 3</summary>

A grade of `1.1` looks fine as a number. Is it a real grade on your school's scale? Decide which grades are allowed.
</details>

### Stretch goals

- Many schools don't give honors if you have any grade below a certain mark, no matter how good the GWA is. Add that rule.
- Let the user pick between the 1.00–5.00 scale and a percentage scale.
- Compute the GWA for two semesters and show the combined GWA.

---

## 🟢 2. Recitation Picker

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `js-recitation-picker`

### The mission

A teacher wants to call on students fairly, not just the ones in the front row. Build a web app that picks a random
student and never picks the same one twice until everyone has had a turn.

### Requirements

- [ ] The teacher pastes a class list into a text box, one name per line, and clicks "Load".
- [ ] Blank lines and extra spaces are ignored. Duplicate names are flagged so the teacher can fix them.
- [ ] A big "Pick" button shows one random student's name, large enough to read from the back of the room.
- [ ] Nobody is picked twice until **every** student has been called.
- [ ] Show two lists: students still waiting and students already called.
- [ ] An "Undo" button puts the last picked student back in the waiting list.
- [ ] A "Reset" button starts a new round with the full class.
- [ ] When everyone has been called, show a clear message instead of picking nothing or crashing.

### Things to research

`textarea` · `split` · `trim` · `filter` · `Math.random()` · `Math.floor()` · `splice` · `Set` for finding duplicates

<details>
<summary>💡 Hint 1</summary>

Think of it like drawing names from a box. Once a name is drawn, where does it go? What does "undo" mean for the box?
</details>

<details>
<summary>💡 Hint 2</summary>

`Math.floor(Math.random() * n)` gives you a number from `0` to `n - 1`. Test it on a list with exactly one name left.
</details>

<details>
<summary>💡 Hint 3</summary>

Is "Juan" the same student as "juan " with a trailing space? Your duplicate check should say yes.
</details>

### Stretch goals

- A short "rolling names" animation before the final name appears.
- Pick a group of 2–5 students at once for group recitation.
- Save the class list in `localStorage` so it's still there tomorrow.

---

## 🟡 3. Attendance Tracker

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `js-attendance-tracker`

### The mission

A class adviser still checks attendance on paper and loses the sheet every few weeks. Build a web app that records
attendance per day, keeps it safe after a refresh, and turns it into a report the adviser can hand to the office.

### Requirements

- [ ] Add and remove students from the class roster. Empty or duplicate names aren't allowed.
- [ ] Pick a date, then mark each student as **Present**, **Late** or **Absent** for that date.
- [ ] Switching to a date you already recorded shows what you saved for it. You can change it.
- [ ] **All data survives a page refresh.**
- [ ] A summary per student: number of presents, lates and absences, plus an attendance percentage.
- [ ] Highlight students whose attendance falls below a limit you choose (for example 80%).
- [ ] Export the records as a **CSV file** that opens correctly in Excel or Google Sheets.
- [ ] Removing a student asks for confirmation first, because it also affects their records.

### Things to research

`localStorage` · `JSON.stringify` / `JSON.parse` · `<input type="date">` · radio buttons · objects as lookup tables · the CSV format · `Blob` · `URL.createObjectURL` · the `download` attribute

<details>
<summary>💡 Hint 1</summary>

Design your data **before** you write any HTML. Sketch it on paper: how do you store "on this date, this student was
Late"? Try it with 3 students and 3 dates. Can you easily answer "how many times was Maria absent?"
</details>

<details>
<summary>💡 Hint 2</summary>

Does a Late count as present when you calculate the percentage? There's no single right answer. Pick a rule and show it on the page.
</details>

<details>
<summary>💡 Hint 3</summary>

Open your CSV in a spreadsheet and add a student named `Cruz, Ana`. What happens to the columns? Look up how CSV handles commas inside values.
</details>

### Stretch goals

- Support more than one class section, each with its own roster.
- A "Mark everyone present" button, so the teacher only changes the few who are absent.
- Import a roster from a CSV file.

---

## 🟡 4. Exam Reviewer Flashcards

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `js-flashcards`

### The mission

Midterms are next week and your reviewer is a messy pile of notes. Build a flashcard app that sorts cards by subject
and shows you the cards you keep getting wrong more often than the ones you already know.

### Requirements

- [ ] Create, rename and delete **decks**, one per subject.
- [ ] Add, edit and delete cards in a deck. Each card has a front (question) and a back (answer). Empty sides aren't allowed.
- [ ] Study mode shows one card at a time. Clicking or pressing a key flips it.
- [ ] After flipping, the student marks "Knew it" or "Didn't know".
- [ ] Cards marked "Didn't know" come back **more often** in the same session than cards you knew.
- [ ] Progress per deck: how many cards you know and how many still need work.
- [ ] **Everything survives a page refresh.**
- [ ] Export a deck as a `.json` file and import one back, so classmates can share reviewers.
- [ ] Importing a broken or wrong file shows a friendly error and does **not** wipe your existing decks.

### Things to research

`localStorage` · `JSON.parse` in `try` / `catch` · `<input type="file">` · `FileReader` or `file.text()` · `Blob` · spaced repetition · the Leitner system · CSS transforms for flipping · keyboard events

<details>
<summary>💡 Hint 1</summary>

Look up the **Leitner system**. It's a simple way to decide which card comes next using boxes, and it works on paper
before it works in code.
</details>

<details>
<summary>💡 Hint 2</summary>

Never trust an imported file. It could be empty, not JSON at all, or JSON with the wrong shape. Check it **before** you touch your saved data.
</details>

<details>
<summary>💡 Hint 3</summary>

What happens if a classmate imports a deck with the same name as one they already have? Decide: replace, merge, or rename.
</details>

### Stretch goals

- A "cram mode" that only shows cards you missed.
- Shuffle cards at the start of each session.
- Support images on cards.

---

## 🔴 5. Class Schedule Planner

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `js-schedule-planner`

### The mission

Enrollment day: you have a list of subjects and sections, and you need a schedule with no overlaps and not too many
units. Build a planner that shows your week as a grid and warns you the moment two classes clash.

### Requirements

- [ ] Add a subject with a code, name, units, and one or more time slots (day, start time, end time). For example, a MWF class has three slots.
- [ ] Reject slots where the end time is before or equal to the start time.
- [ ] Show a **weekly grid** (Monday to Saturday, with time rows) with each subject placed in its slots.
- [ ] Detect **time conflicts** and highlight every subject involved, with a message saying which ones clash and when.
- [ ] Show total units, with a maximum you can set (for example 24). Going over it shows a warning.
- [ ] Place subjects on the grid by dragging them or by clicking a slot.
- [ ] Edit and remove subjects. The grid and conflict warnings update right away.
- [ ] **Everything survives a page refresh.**
- [ ] A print-friendly view: only the grid, on one page, readable in black and white.

### Example output

```
⚠ Conflict: CS 102 (Tue 10:00–11:30) overlaps with MATH 201 (Tue 11:00–12:30)
Total units: 26 / 24 ⚠ Over the limit
```

### Things to research

Comparing times · converting `"10:30"` to minutes · interval overlap · CSS Grid · `grid-row` / `grid-column` · the Drag and Drop API · `@media print` · `localStorage`

<details>
<summary>💡 Hint 1</summary>

Times as strings like `"9:00"` and `"10:30"` are painful to compare. Could you turn every time into a single number first?
</details>

<details>
<summary>💡 Hint 2</summary>

Two time slots overlap under one simple rule. Draw a few pairs on a number line, including ones that only touch at the
edge (one ends at 10:00, the next starts at 10:00). Is that a conflict?
</details>

<details>
<summary>💡 Hint 3</summary>

Drag and drop doesn't work with a keyboard or on many phones. That's why the click-to-place option matters. Don't skip it.
</details>

### Stretch goals

- Save several schedule options (Plan A, Plan B) and switch between them.
- Show free time gaps, like "3 hours free on Wednesday afternoon".
- Export the schedule as an image or `.ics` calendar file.

---

## 🔴 6. Quiz Maker for Teachers

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `js-quiz-maker`

### The mission

A teacher wants to give quick online quizzes without signing up for another platform. Build an app with two sides:
a **builder** where the teacher creates a quiz, and a **player** where students take it and get their score.

### Requirements

- [ ] Builder: add questions of three types: **multiple choice**, **true/false** and **identification** (type the answer).
- [ ] Builder: edit, delete and reorder questions, and set a time limit for the whole quiz.
- [ ] Builder: a quiz can't be saved if a question has no text, no correct answer, or a multiple choice question has fewer than 2 choices.
- [ ] Export the quiz as a `.json` file **or** as a shareable link that contains the quiz.
- [ ] Player: a student loads the quiz from the file or the link, enters a name, and starts the quiz.
- [ ] Player: a visible countdown. When time runs out, the quiz submits itself.
- [ ] Identification answers are checked fairly: extra spaces and capital letters don't make a right answer wrong.
- [ ] Results screen: score, percentage, and a review of every question with the student's answer and the correct one.
- [ ] The student can download their result as a file to send to the teacher.
- [ ] In your README, write a short section explaining **how a student could see the answers before taking the quiz**, and why that happens.

### Things to research

Data modeling · `JSON` · `Blob` and downloads · `FileReader` · URL query strings and hashes · `encodeURIComponent` · `btoa` / `atob` · `setInterval` · string normalization · client-side vs server-side validation

<details>
<summary>💡 Hint 1</summary>

Design the quiz data first. What fields does every question need? What fields only some types need? Write one quiz of
each type by hand as JSON before building the builder.
</details>

<details>
<summary>💡 Hint 2</summary>

Everything you send to the browser, the student can read. Open DevTools on your own player and look for the answers.
Encoding the data only makes it harder to read, not secret. What would a real quiz website need that yours doesn't have?
</details>

<details>
<summary>💡 Hint 3</summary>

URLs have length limits. Try putting a 50-question quiz in a link. What happens, and what should your app tell the teacher?
</details>

### Stretch goals

- Shuffle questions and choices for each student.
- A teacher view that loads several student result files and shows the class average and the hardest questions.
- Make it harder for students to fake their result file, and explain in your README why it still isn't fully safe.
