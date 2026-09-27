# C# School Projects

[← Back to the board](../../README.md)

**You'll need:** the [.NET SDK](https://dotnet.microsoft.com/download) (8 or newer). Check with `dotnet --version`.
**Editor:** Visual Studio Community, VS Code with the C# Dev Kit, or JetBrains Rider.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-csharp-canteen-kiosk`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** write a short README that explains who the app is for and how to run it. Your teacher should be able to clone it and try it in five minutes.
Don't commit the `bin/` and `obj/` folders. Search for "dotnet gitignore".

---

## 🟢 1. Canteen Ordering Kiosk

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `csharp-canteen-kiosk`

### The mission

The school canteen line is too long at lunch. Build a console kiosk where students pick their food, pay in cash and get the right change.

### Requirements

- [ ] Show a numbered menu of at least 8 canteen items, each with a price and the stock left.
- [ ] A student can order several items, each with a quantity, before checking out.
- [ ] Show a running total after every item added.
- [ ] Sold-out items can't be ordered. Ordering more than the stock left is refused with a clear message.
- [ ] At checkout, the student enters the cash they hand over. Not enough cash is rejected, and they can try again or cancel.
- [ ] Correct change is shown, and a receipt lists each item, quantity, subtotal, total, cash and change.
- [ ] Stock goes down after every completed order. A cancelled order changes nothing.
- [ ] All money is stored as `decimal`. Bad input (letters, negative numbers, empty lines) never crashes the program.

### Example output

```
===== RECEIPT =====
2 x Pancit Canton     ₱40.00
1 x Iced Tea          ₱20.00
-------------------
Total:                ₱60.00
Cash:                ₱100.00
Change:               ₱40.00
```

### Things to research

`decimal` · `decimal.TryParse` · `int.TryParse` · classes and properties · `List<T>` · loops · format strings (`{value:N2}`)

<details>
<summary>💡 Hint 1</summary>

Try adding `0.1 + 0.2` as `double` and print it with lots of decimal places. Would you trust that for someone's change?
</details>

<details>
<summary>💡 Hint 2</summary>

When should the stock actually go down: when the item is added to the order, or when the order is paid? Think about what happens if the student cancels.
</details>

### Stretch goals

- An admin mode (behind a simple code) to restock items and change prices.
- A daily sales summary: total sales and the best-selling item.

---

## 🟢 2. Class Attendance Console

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `csharp-class-attendance`

### The mission

A teacher still calls the roll on paper. Build a console app that walks through the class list, records who is here, and saves it for the day.

### Requirements

- [ ] Load the class list from a text file, one (fake) student name per line.
- [ ] For each student, the teacher types `P` (Present), `L` (Late) or `A` (Absent), case-insensitive.
- [ ] Anything else is rejected and the same student is asked again.
- [ ] Save today's attendance to a file named with the date, e.g. `attendance-2026-09-28.txt`.
- [ ] If today's file already exists, ask before overwriting it.
- [ ] Show a summary: how many Present, Late and Absent, and the names of the absentees.
- [ ] A missing or empty class list file gives a friendly message, not a crash.

### Example output

```
Attendance for 2026-09-28 (BSIT 1-A)
Present: 28   Late: 3   Absent: 2
Absent today: Maria Santos, Paolo Reyes
Saved to attendance-2026-09-28.txt
```

### Things to research

`File.ReadAllLines` · `File.WriteAllLines` · `File.Exists` · `DateTime.Today` · date format strings (`yyyy-MM-dd`) · `enum` · `Dictionary<TKey, TValue>`

<details>
<summary>💡 Hint 1</summary>

Why is `yyyy-MM-dd` a better date format for file names than `MM-dd-yyyy`? Try sorting a folder full of both.
</details>

<details>
<summary>💡 Hint 2</summary>

A student's status can only be one of three things. Is a `string` the best type for that, or is there something that makes typos impossible?
</details>

<details>
<summary>💡 Hint 3</summary>

Blank lines at the end of a text file are easy to miss. Does your app think there's a student with no name?
</details>

### Stretch goals

- A monthly report: for each student, total Present, Late and Absent days, read from all the dated files.
- Flag students who were absent 3 or more times this month.

---

## 🟡 3. Student Information System

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `csharp-student-info-system`

### The mission

The registrar's office keeps student records in a messy spreadsheet. Build a **desktop app** where staff can add, find and update records safely.

Pick one: **WinForms** or **WPF** (Windows only), or **Avalonia** (cross-platform).

### Requirements

- [ ] A `Student` record: student ID, first name, last name, course, year level, contact number.
- [ ] Add, edit and delete students from a form.
- [ ] Show all students in a grid that can be sorted by clicking a column header.
- [ ] A search box that filters by ID or name as you type (partial, case-insensitive).
- [ ] Validation with visible error messages next to the field: required fields, year level 1–4 (or 1–6), valid contact number format, and **no duplicate student IDs**.
- [ ] Ask for confirmation before deleting.
- [ ] Data is saved to a JSON file or SQLite database and loaded on start.
- [ ] The app starts cleanly with no data file at all.

### Things to research

Your chosen UI framework's getting-started guide · `DataGridView` (WinForms) or `DataGrid` (WPF/Avalonia) · data binding · `ObservableCollection<T>` · `ErrorProvider` or validation rules · `MessageBox` · `System.Text.Json` or `Microsoft.Data.Sqlite` · regular expressions

<details>
<summary>💡 Hint 1</summary>

Where should the "no duplicate IDs" rule live: in the button click handler, or in a class that manages students? What if you add a second screen later?
</details>

<details>
<summary>💡 Hint 2</summary>

When you edit a student, do you change the original object right away, or only after the user clicks Save? What should happen if they click Cancel?
</details>

<details>
<summary>💡 Hint 3</summary>

Is a contact number really a number? Try storing `09171234567` as an `int` and see what happens.
</details>

### Stretch goals

- Export the current (filtered) list to CSV.
- Filter by course and year level with dropdowns.
- Try the MVVM pattern (WPF/Avalonia).

---

## 🟡 4. School Clinic Log

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `csharp-clinic-log`

### The mission

The school nurse writes every clinic visit in a notebook, and finding patterns is impossible. Build a console app that records visits and produces useful reports, while keeping health information private.

### Requirements

- [ ] The app asks for a nurse PIN at start. Three wrong tries and it exits.
- [ ] The PIN is not written in plain text in your code or your repo.
- [ ] Record a visit: student ID, date and time (defaults to now), complaint, action taken, sent home (yes/no).
- [ ] List visits for one student ID, or for one day.
- [ ] Reports using **LINQ**: visits per day this week, the top 5 most common complaints, and students with 3 or more visits this month.
- [ ] Reports show counts and student IDs only, never complaint details next to names.
- [ ] Data is saved to and loaded from a JSON file.
- [ ] Empty or invalid input (blank complaint, bad date) is rejected with a clear message.

### Example output

```
Top complaints (September)
1. Headache      14
2. Stomachache    9
3. Fever          6

Frequent visitors this month
2024-00187   4 visits
2024-00342   3 visits
```

### Things to research

LINQ (`Where`, `GroupBy`, `OrderByDescending`, `Count`, `Take`) · `DateTime` and `DateOnly` · `System.Text.Json` · password hashing · `Console.ReadKey` for hidden input · environment variables or a config file kept out of git

<details>
<summary>💡 Hint 1</summary>

"Headache", "headache " and "HEADACHE" are the same complaint to a human but not to `GroupBy`. How will you clean the text before grouping?
</details>

<details>
<summary>💡 Hint 2</summary>

If the PIN is in your code, anyone who can see the repo knows it. Look up why systems store a **hash** of a password instead of the password itself.
</details>

<details>
<summary>💡 Hint 3</summary>

Ask yourself: who actually needs to see each piece of information? A report on "most common complaints" doesn't need to know who had them.
</details>

### Stretch goals

- Export a monthly summary (counts only, no student IDs) for the principal.
- Mark a visit as "follow-up needed" and list open follow-ups.
- Unit tests with xUnit for the report calculations.

---

## 🔴 5. Faculty Evaluation System

**Level:** Challenge · **Time:** 4–6 days · **Repo name:** `csharp-faculty-evaluation`

### The mission

Every term, students rate their teachers. Students only answer honestly if they trust it's truly **anonymous**. Build a web app where they can rate teachers and admins can see the results, but never who said what.

### Requirements

- [ ] Built with ASP.NET Core (Razor Pages or MVC, your choice) and **Entity Framework Core** with SQLite.
- [ ] The database is created with **migrations**, and seeded with fake teachers, subjects and students.
- [ ] A student logs in (a simple login is fine) and sees only the teachers of their own classes this term.
- [ ] They rate each teacher from 1 to 5 on at least 5 criteria (e.g. clarity, preparedness, fairness) and can add an optional comment.
- [ ] A student can evaluate each teacher only **once per term**. A second try is blocked on the server, not just hidden in the page.
- [ ] Validation: every criterion must be rated, ratings must be 1–5, comments have a max length.
- [ ] An admin dashboard shows, per teacher: number of responses, the average for each criterion, and the comments.
- [ ] **Anonymity by design:** the stored evaluation can't be linked back to the student, even by someone reading the database directly.
- [ ] Results for a teacher are hidden until they have at least 5 responses.

### Things to research

ASP.NET Core Razor Pages or MVC · Entity Framework Core · migrations · seeding data · model validation (data annotations) · `[Authorize]` · LINQ `GroupBy` and `Average` · database relationships · anonymity and de-identification

<details>
<summary>💡 Hint 1</summary>

You need to know **whether** a student has evaluated a teacher, but not **what** they said. Does that have to be stored in the same table row?
</details>

<details>
<summary>💡 Hint 2</summary>

Even without a student ID, timestamps and small class sizes can give people away. Why might the "at least 5 responses" rule matter?
</details>

<details>
<summary>💡 Hint 3</summary>

Build the student side with fake data first and check the averages by hand for one teacher. Then build the dashboard.
</details>

### Stretch goals

- An admin can open and close the evaluation period.
- Charts on the dashboard for each criterion.
- Compare a teacher's averages across terms.

---

## 🔴 6. Online Grade Portal

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `csharp-grade-portal`

### The mission

Students want to check their grades online, and teachers want to stop emailing spreadsheets. Build a grade portal where everyone sees exactly what they're allowed to see, and nothing more.

### Requirements

- [ ] Built with ASP.NET Core MVC, **ASP.NET Core Identity**, and Entity Framework Core with SQLite.
- [ ] Three roles: **Admin**, **Teacher**, **Student**. Seed one fake account of each role for testing.
- [ ] Admins manage subjects, sections, and which teacher and students belong to each section.
- [ ] Teachers see only their own sections and can encode or update grades for those students only.
- [ ] Students see only their own grades and their **GWA** (general weighted average, using subject units).
- [ ] Grades are validated using your school's grading scale (e.g. 1.00–5.00, or 60–100).
- [ ] Every permission is checked **on the server**. Changing an ID in the URL or form must never show or change someone else's data.
- [ ] Integration tests prove at least: a student can't view another student's grades, and a teacher can't edit grades in a section they don't teach.

### Things to research

ASP.NET Core Identity · role-based authorization · `[Authorize(Roles = "...")]` · resource-based authorization · IDOR (Insecure Direct Object Reference) · Entity Framework Core relationships · anti-forgery tokens · `WebApplicationFactory` · integration testing

<details>
<summary>💡 Hint 1</summary>

Log in as a student, open your grades page, and look at the URL. What happens if you change the number in it? That's the bug this project is about.
</details>

<details>
<summary>💡 Hint 2</summary>

"Is this user a Teacher?" and "Does this teacher teach **this** section?" are two different questions. Roles only answer the first one.
</details>

<details>
<summary>💡 Hint 3</summary>

Is GWA a simple average of the grades? Check how units affect it, and what should happen to subjects with no grade yet.
</details>

### Stretch goals

- An audit log: who changed which grade, when, and from what value.
- Teachers can import grades for a section from a CSV file.
- Students can download their grades as a PDF.
