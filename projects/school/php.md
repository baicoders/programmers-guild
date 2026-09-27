# PHP School Projects

[← Back to the board](../../README.md)

**You'll need:** PHP 8.1 or newer. Check with `php --version`. You can run everything with PHP's built-in server:
`php -S localhost:8000`. Bundles like **XAMPP** or **Laragon** also work.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-php-grade-inquiry`), so your teachers can find it.

> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Rule for this track:** no frameworks (no Laravel or Symfony yet). Learn what they do for you by doing it yourself first.

> 🔐 **Security matters even more in school apps.** They hold grades, attendance and personal details, and curious classmates will poke at them.
> Each project below teaches one real security lesson. Treat those requirements as seriously as the features.

---

## 🟢 1. Grade Inquiry Page

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `php-grade-inquiry`

### The mission

Students keep asking the registrar for their grades. Build a page where a student types their student number and PIN
and sees only **their own** grades.

### Requirements

- [ ] A **JSON file** with at least 10 fake students. Each has a student number, name, PIN (or birthdate) and a list of subjects with grades.
- [ ] A form asks for the student number and PIN.
- [ ] A correct combination shows the student's name, each subject with its grade, and their general average.
- [ ] A wrong combination shows **one generic message**, like "Student number or PIN is incorrect." It never says which part was wrong.
- [ ] Empty fields show a friendly message, not a PHP warning.
- [ ] The JSON file can't be opened directly in the browser.
- [ ] 🔐 **Security lesson:** the page doesn't leak whether a student number exists. The response for a wrong PIN and an unknown student number looks exactly the same.
- [ ] 🔐 Everything printed on the page is **escaped**, even data from your own JSON file.

### Things to research

`$_POST` · `json_decode` · `file_get_contents` · `foreach` · `number_format` · `htmlspecialchars` · user enumeration · keeping files outside the public folder

<details>
<summary>💡 Hint 1</summary>

Why a generic error? Imagine a classmate trying student numbers one by one. If your page says "PIN is wrong", it just
confirmed that the student number is real.
</details>

<details>
<summary>💡 Hint 2</summary>

Try visiting `localhost:8000/students.json` (or whatever you named it). If you can see the file, so can everyone else.
Where can you put it so PHP can read it but the browser can't reach it?
</details>

<details>
<summary>💡 Hint 3</summary>

Should the student number and PIN end up in the URL? Think about the browser history on a shared computer lab PC.
</details>

### Stretch goals

- Show "Passed" or "Failed" next to each grade, based on a passing grade you choose.
- Block further attempts for a while after 5 wrong tries in one session.
- A print-friendly view of the grades.

---

## 🟢 2. School Event Registration

**Level:** Beginner · **Time:** 4–6 hours · **Repo name:** `php-event-registration`

### The mission

The student council is running Foundation Week and needs sign-ups for workshops. Each workshop has limited seats, and
the organizers want a spreadsheet of who registered.

### Requirements

- [ ] Fields: full name, grade/year and section, T-shirt size (dropdown), and workshop choice (at least 3 workshops).
- [ ] Each workshop has a slot limit. Use small numbers like 5 so you can test it filling up.
- [ ] Server-side validation: all fields required, and the T-shirt size and workshop must be from your allowed list.
- [ ] If validation fails, show the form again **with the user's input still filled in** and an error next to each bad field.
- [ ] Each registration is saved as a row in a **CSV file**.
- [ ] The form shows how many slots are left in each workshop. A full workshop can't be picked, and the server rejects it even if someone tries.
- [ ] When every workshop is full, the form is replaced by a "Registration is closed" message.
- [ ] 🔐 **Security lesson:** a name like `=HYPERLINK(...)` or anything starting with `=`, `+`, `-` or `@` does **not** become a formula when an organizer opens the CSV in a spreadsheet.
- [ ] 🔐 User input is escaped whenever it's printed back to the page.

### Things to research

`fputcsv` · `fgetcsv` · `fopen` modes · `in_array` · `flock` · sticky forms · CSV injection (formula injection) · `htmlspecialchars`

<details>
<summary>💡 Hint 1</summary>

To show remaining slots, do you really need to store a counter somewhere? Or can you work it out from the CSV itself?
</details>

<details>
<summary>💡 Hint 2</summary>

Open DevTools and add a new option to the workshop dropdown, like `Secret Workshop`. Submit it. If it gets saved,
your server is trusting the browser.
</details>

<details>
<summary>💡 Hint 3</summary>

Register with the name `=1+1`, then open the CSV in Excel or Google Sheets. If you see `2`, the spreadsheet ran your
input as a formula. Search "CSV injection" to see why that's dangerous.
</details>

### Stretch goals

- A password-protected organizer page that lists registrants per workshop and lets them download the CSV.
- Prevent the same person from registering twice.
- A waiting list for full workshops.

---

## 🟡 3. Lost and Found Board

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `php-lost-and-found`

### The mission

The guidance office has a box full of lost IDs, umbrellas and tumblers. Build an online board where found items are
posted, so students can check before lining up at the office.

### Requirements

- [ ] Anyone can post a found item: what it is, a short description, category (dropdown), where it was found, and the date.
- [ ] The board lists items newest first, with pagination (10 per page).
- [ ] Search by keyword and filter by category. Both still work when you move between pages.
- [ ] A password-protected staff page lets staff mark an item as **claimed**, recording the claimer's name, section and the date.
- [ ] The public board shows claimed items as "Claimed". The claimer's details are visible **only** on the staff page.
- [ ] Data stored in **SQLite or MySQL** using **PDO**.
- [ ] 🔐 **Security lesson:** every query uses **prepared statements**, including search and pagination. No user input is ever inserted directly into a SQL string.
- [ ] Output is escaped everywhere.
- [ ] A `schema.sql` file with some fake seed items, and database credentials that are **not** committed to the repo.

### Things to research

PDO · prepared statements · SQL injection · `LIKE` · `LIMIT` / `OFFSET` · `COUNT(*)` · `UPDATE` · `$_SESSION` · config files + `.gitignore`

<details>
<summary>💡 Hint 1</summary>

Search plus prepared statements plus `LIKE` trips up a lot of people. Where should the `%` wildcards go: inside the SQL,
or inside the value you bind?
</details>

<details>
<summary>💡 Hint 2</summary>

Type `' OR '1'='1` into your search box. If the results look strange or you get a SQL error, you have an injection bug.
</details>

<details>
<summary>💡 Hint 3</summary>

To show "Page 2 of 7", you need to know how many items match in total, not just the 10 on this page.
</details>

### Stretch goals

- Add a photo of each item (reuse the upload lessons from the hobby Image Gallery).
- Auto-archive items that stay unclaimed for 30 days.
- A "lost something?" form where students describe what they lost, which staff can match to found items.

---

## 🟡 4. Teacher Attendance App

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `php-teacher-attendance`

### The mission

Teachers still take attendance on paper and lose the sheets. Build an app where a teacher logs in, opens a class, and
marks attendance in a few clicks.

### Requirements

- [ ] Teachers log in with a username and password. Seed at least 2 fake teachers, each with their own classes and students.
- [ ] After logging in, a teacher sees **only their own** classes.
- [ ] Pick a class and a date, then mark each student **present**, **late** or **absent** in one form.
- [ ] Saving the same class and date again updates the record instead of creating a duplicate. Future dates are not allowed.
- [ ] Past dates can be opened and edited.
- [ ] A student history page shows every recorded date with its status, plus totals for present, late and absent.
- [ ] 🔐 Passwords are stored **hashed**, never in plain text.
- [ ] 🔐 The session ID changes when a teacher logs in (**session fixation** protection), and logging out really ends the session.
- [ ] 🔐 **Security lesson:** only a class's own teacher can view or change its attendance. This is checked on the server, even if someone edits the URL or the form.
- [ ] Prepared statements, escaped output, a `schema.sql` with seed data, and no credentials in the repo.

### Things to research

`password_hash` / `password_verify` · `session_start` · `session_regenerate_id` · session fixation · `session_destroy` · unique constraints · upsert (`ON DUPLICATE KEY UPDATE` / `ON CONFLICT`) · `JOIN` · `GROUP BY`

<details>
<summary>💡 Hint 1</summary>

Sketch your tables on paper first: teachers, classes, students, attendance. Can a student belong to more than one class?
What does that mean for your tables?
</details>

<details>
<summary>💡 Hint 2</summary>

Log in as Teacher A, open a class, and change the class ID in the URL to one of Teacher B's classes. If you can see or
save it, you've found a real vulnerability.
</details>

<details>
<summary>💡 Hint 3</summary>

Search "session fixation". Why would an attacker want you to log in using a session ID they already know?
</details>

### Stretch goals

- A monthly summary per class, exportable to CSV.
- Highlight students with 3 or more absences.
- Quick buttons: "mark everyone present", then change the few who aren't.

---

## 🔴 5. School Library System

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `php-school-library`

### The mission

The school library runs on a logbook and index cards. Build a system where students browse and reserve books, and
librarians handle borrowing, returns and fines.

### Requirements

- [ ] A book catalog (title, author, ISBN, category, number of copies) with search and category filter. Each book shows how many copies are available.
- [ ] Two roles: **student** and **librarian**. Librarian accounts come from seed data, not public sign-up. Passwords are hashed.
- [ ] Librarians check out books to students. A student can borrow at most 3 books at a time, each due in 7 days.
- [ ] A student with overdue books or unpaid fines can't borrow more.
- [ ] Librarians record returns. Late returns get a fine per day overdue, which the librarian can mark as paid.
- [ ] When all copies are out, a student can **reserve** the book. Reservations form a queue. A returned book is held for the next student in line for 2 days.
- [ ] A student page shows current loans, due dates, fines and reservation positions.
- [ ] A librarian dashboard shows books currently out, overdue loans, unpaid fines and the most borrowed books.
- [ ] 🔐 **Security lesson:** every form that changes data is protected with a **CSRF token**, and **every action** checks the user's role on the server.
- [ ] 🔐 Prepared statements everywhere, output escaped everywhere.
- [ ] Code organized into folders for database access, templates and page logic, plus a `schema.sql` with seed data.

### Things to research

CSRF tokens · role-based access control · `DateTime` / `DateInterval` · database transactions · `JOIN` · queues ordered by timestamp · `password_hash` · the `includes/` or `templates/` pattern

<details>
<summary>💡 Hint 1</summary>

Log in as a student, then use DevTools to copy the librarian's "mark as returned" form into the page and submit it.
If it works, your role check is only hiding buttons.
</details>

<details>
<summary>💡 Hint 2</summary>

Should a fine be stored, or calculated from dates whenever it's needed? What happens to old fines if the rate per day
changes next school year?
</details>

<details>
<summary>💡 Hint 3</summary>

You can't wait a week to test overdue books. Is there a way to control what "today" means in your app while testing?
</details>

### Stretch goals

- One renewal per loan, allowed only if nobody has reserved the book.
- Reminders shown on the student page when a book is due tomorrow.
- Monthly reports: most active borrowers, most popular categories.

---

## 🔴 6. Enrollment & Grades Portal

**Level:** Challenge · **Time:** 6–8 days · **Repo name:** `php-enrollment-portal`

### The mission

Enrollment day means long lines and paper forms, and grades live in scattered spreadsheets. Build one portal where
admins set up the term, students enroll, teachers submit grades, and students see their report card.

### Requirements

- [ ] Three roles: **admin**, **teacher** and **student**. Admins create the accounts. Passwords are hashed.
- [ ] Admins manage school years and terms (only one is active), subjects (code, title, units) and sections (a subject with a schedule, a capacity and an assigned teacher).
- [ ] Students enroll in sections for the active term. They can't go over a unit limit, join a full section, or take the same subject twice.
- [ ] Teachers see only **their own** sections and encode a grade for each enrolled student. Grades can be saved as a draft.
- [ ] When a teacher **submits** grades, they're locked. Only an admin can unlock them.
- [ ] Students view their grades per term and a printable report card with their general weighted average.
- [ ] 🔐 **Security lesson:** every page and action checks authorization on the server. Changing an ID in the URL never shows or changes someone else's data.
- [ ] 🔐 Every form that changes data is protected with a CSRF token.
- [ ] 🔐 An **audit log** records every grade change: who changed it, which student and section, the old and new value, and when. Admins can view it, but nobody can edit or delete it through the app.
- [ ] Prepared statements, escaped output, organized folders, a `schema.sql` with seed data, and no credentials in the repo.

### Things to research

role-based access control · IDOR (insecure direct object reference) · CSRF tokens · audit logging · database transactions · foreign keys and unique constraints · weighted averages · `@media print`

<details>
<summary>💡 Hint 1</summary>

Make a table of every page and action in your app, and which roles may use it. Then log in as each role and try every
row, including by typing URLs by hand. Any surprise is a bug.
</details>

<details>
<summary>💡 Hint 2</summary>

Two students click "Enroll" on the last seat at the same moment. Who gets it? Look up **transactions** and think about
when you check the capacity.
</details>

<details>
<summary>💡 Hint 3</summary>

If grades can change from several pages, you'll forget to log one of them. What if there were only one place in your code
that changes a grade?
</details>

### Stretch goals

- Block enrollment in two sections whose schedules overlap.
- Compute grades from components (for example written work, performance tasks and exams, each with a weight).
- A transcript page covering every term a student has taken.
