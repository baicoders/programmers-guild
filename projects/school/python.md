# Python School Projects

[← Back to the board](../../README.md)

**You'll need:** [Python 3](https://www.python.org/downloads/) (3.10 or newer). Check with `python --version` or `python3 --version`.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-python-final-grade`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** every project here has a "user" who isn't you: a teacher, a librarian, a registrar. Before you code, write down what
they would type and what they expect to see. If it confuses them, it's a bug, even if it doesn't crash.

---

## 🟢 1. Final Grade Calculator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `python-final-grade`

### The mission

At the end of every term, a teacher computes final grades by hand with a calculator and a class record. Build a
command-line tool that does it for them, one student at a time, without mistakes.

### Requirements

- [ ] The teacher enters the weight of each component: quizzes, assignments, exam, project.
- [ ] The weights **must add up to 100%**. If they don't, say so and ask again.
- [ ] For each student, the teacher enters a score (0–100) for every component.
- [ ] Prints the final grade, its grade-point equivalent (for example `1.00` to `5.00`) and a **Passed** / **Failed** remark.
- [ ] The grade-point table and passing grade are defined in one place, so another school can change them easily.
- [ ] **Never crash** on bad scores: `105`, `-3`, `abc` or an empty line gets a clear message and a retry.
- [ ] Can process several students in one run, and asks "Next student? (y/n)" after each one.

### Example session

```
Weights (%) - quizzes, assignments, exam, project: 20 20 40 30
Weights add up to 110%. They must add up to 100%.
Weights (%) - quizzes, assignments, exam, project: 20 20 40 20

Student name: Student A
Quizzes: 88
Assignments: ninety
Please enter a number from 0 to 100.
Assignments: 92
Exam: 79
Project: 95

Final grade: 86.60  |  Grade point: 1.75  |  Remark: PASSED
Next student? (y/n):
```

### Things to research

`input()` · `float()` · `try` / `except ValueError` · functions with return values · `round()` · dictionaries · f-string formatting

<details>
<summary>💡 Hint 1</summary>

You'll ask for a valid number between 0 and 100 many times. How many times do you want to write that loop? Once, inside a function.
</details>

<details>
<summary>💡 Hint 2</summary>

Converting a final grade to a grade point is a "which range does this fall into?" question. Think about the order you
check the ranges in. What happens at the exact boundary, like `74.5` or `75`?
</details>

<details>
<summary>💡 Hint 3</summary>

Try `0.1 + 0.2 == 0.3` in Python. Keep that result in mind when you check whether the weights add up to 100.
</details>

### Stretch goals

- Print a summary at the end: how many passed, how many failed, the class average.
- Let the teacher enter several quiz scores and average them automatically.
- Save the results of the run to a CSV file.

---

## 🟢 2. Seat Plan Generator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `python-seat-plan`

### The mission

On the first day of class, the adviser needs a seat plan. Build a tool that reads the class list from a file and
produces a fair, random seat plan for any classroom size.

### Requirements

- [ ] Reads student names from a text file, one name per line. Blank lines and extra spaces are ignored.
- [ ] The user enters the number of rows and columns in the classroom.
- [ ] Students are placed **randomly** and printed as a neat grid, with the front of the room clearly marked.
- [ ] Certain students (for example, poor eyesight) can be marked to always sit in the **front rows**.
- [ ] If there are more students than seats, the program says so clearly and doesn't silently drop anyone.
- [ ] Handles a missing or empty class list file with a friendly message, not a traceback.
- [ ] Option to save the seat plan to a text file.

### Example output

```
                 [ FRONT / BOARD ]
Row 1 | Student B    | Student K    | Student E    |
Row 2 | Student A    | Student H    | Student D    |
Row 3 | Student F    | Student C    | (empty)      |

8 students, 9 seats. Saved to seatplan.txt
```

### Things to research

`open()` and `with` · `str.strip()` · `random.shuffle` · lists of lists · slicing · `str.ljust()` or f-string alignment · `FileNotFoundError`

<details>
<summary>💡 Hint 1</summary>

A seat plan is a list of rows, and each row is a list of seats. Try building a 3×3 grid of `"(empty)"` first and printing it nicely before adding any names.
</details>

<details>
<summary>💡 Hint 2</summary>

For front-row students, think in two groups: place the priority group first, then everyone else. What if there are more
priority students than front-row seats?
</details>

<details>
<summary>💡 Hint 3</summary>

Names have different lengths. Find the longest one before you print, and use it to decide how wide every column should be.
</details>

### Stretch goals

- Keep certain pairs of students apart (not next to each other).
- Alternate boys and girls, or mix sections, based on an extra column in the file.
- Generate a new plan each quarter that avoids giving anyone the same seat twice.

---

## 🟡 3. Report Card Generator

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `python-report-cards`

### The mission

The adviser has a spreadsheet of every student's grades per subject. Build a tool that turns that one CSV file into a
clean report card for every student, plus a summary for the whole class.

### Requirements

- [ ] Reads a CSV with a student ID, name, and one column per subject. Subjects come from the header, not from your code.
- [ ] Computes each student's **general average** and their **rank** in the class. Ties get the same rank.
- [ ] Assigns honors based on the average (for example, With Honors / With High Honors / With Highest Honors). The cut-offs are easy to change.
- [ ] Writes **one report card file per student** (text or HTML) into an output folder.
- [ ] Writes a class summary: class average, highest and lowest per subject, list of honor students.
- [ ] **Validates the CSV:** missing grades, grades that aren't numbers, grades outside 0–100 and duplicate IDs are reported **with their line number**.
- [ ] Bad rows are skipped and listed at the end. One bad row doesn't stop the other report cards.
- [ ] The sample CSV in your repo contains **only made-up students**.

### Example output

```
Reading grades.csv ...
  Line 7: grade for "Math" is "9O" (not a number). Skipped.
  Line 12: duplicate student ID 2024-0031. Skipped.

38 report cards written to output/
Class summary written to output/summary.txt
2 rows skipped. Fix them and run again.
```

### Things to research

`csv.DictReader` · `enumerate()` · `pathlib` and creating folders · `sorted()` with `key=` · string templates or f-strings for layout · basic HTML tables · file naming rules

<details>
<summary>💡 Hint 1</summary>

Split the work into three steps that don't know about each other: **read and validate**, **compute**, **write files**.
You can test each step alone.
</details>

<details>
<summary>💡 Hint 2</summary>

Ranking looks easy until two students have the same average. Look up "competition ranking" (1, 2, 2, 4) and decide which style your school uses.
</details>

<details>
<summary>💡 Hint 3</summary>

A student's name might contain characters that aren't allowed in file names on Windows. What's a safer thing to name each file after?
</details>

### Stretch goals

- Weighted subjects (units), so a 3-unit subject counts more than a 1-unit one.
- Generate PDF report cards.
- A second CSV for attendance, shown on the same report card.

---

## 🟡 4. School Library System

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `python-school-library`

### The mission

The school librarian still tracks borrowed books in a logbook. Build a command-line library system backed by an SQLite
database so she always knows who has which book, and who is late.

### Requirements

- [ ] Manage books (title, author, ISBN, number of copies) and borrowers (student ID, name, grade/section).
- [ ] Borrow a book: records the borrower, the date, and a **due date** (for example, 7 days later).
- [ ] A book can't be borrowed when **all copies are out**. The count is checked in the database, not guessed.
- [ ] Return a book, and show the fine if it's late (a fixed amount per day, easy to change).
- [ ] An **overdue list**: who, which book, how many days late, and how much they owe.
- [ ] Search books by title, author or ISBN, showing how many copies are available.
- [ ] Every query uses **parameterized** SQL, never string formatting.
- [ ] Invalid input (unknown student ID, a book that doesn't exist, returning a book that was never borrowed) is handled with a clear message.

### Things to research

`sqlite3` module · primary and foreign keys · `JOIN` · `COUNT` and `GROUP BY` · parameterized queries (`?` placeholders) · SQL injection · `datetime.date` and `timedelta` · transactions (`commit` / `rollback`)

<details>
<summary>💡 Hint 1</summary>

Don't store "available copies" as a number you add to and subtract from. What can you **calculate** from the borrow
records instead? Which one can't get out of sync?
</details>

<details>
<summary>💡 Hint 2</summary>

Borrowing is two steps: check availability, then insert a record. What should happen if the second step fails halfway? Look up transactions.
</details>

<details>
<summary>💡 Hint 3</summary>

To test overdue fines, you don't want to wait a week. How could you make "today" something your code receives instead of something it always looks up?
</details>

### Stretch goals

- A limit on how many books one student can borrow at a time.
- Reservations: join a waiting list for a book that's fully borrowed.
- Tests with `pytest` using an in-memory database (`:memory:`).

---

## 🔴 5. Enrollment System

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `python-enrollment-system`

### The mission

Enrollment week means long lines at the registrar. Build a web app where an admin sets up subjects and sections, and
students enroll themselves, while the system blocks every mistake the registrar usually catches by hand.

### Requirements

- [ ] Built with **Flask** and stored in SQLite.
- [ ] Admin pages: create subjects (code, title, units, prerequisites) and sections (schedule days, start/end time, room, slot limit).
- [ ] Student pages: see available sections with **remaining slots**, and enroll or drop.
- [ ] Enrollment is blocked, with a clear reason, when the section is **full**, the schedule **conflicts** with a section the student already has, a **prerequisite** hasn't been passed, or the student is already in another section of the same subject.
- [ ] Each student has a **study load** page: their sections, weekly schedule and total units.
- [ ] Uses HTML **templates** with a shared base layout. Forms validate input and show error messages.
- [ ] Secret key and database path come from **environment variables**, not committed code.
- [ ] `requirements.txt` and a README that explains setup. Seed data uses **fake students only**.

### Things to research

Flask routing · Jinja2 template inheritance · `request.form` · POST/Redirect/GET pattern · `sqlite3` or Flask-SQLAlchemy · many-to-many tables · comparing time ranges · environment variables · `python-dotenv` · race conditions

<details>
<summary>💡 Hint 1</summary>

Two time slots overlap when one starts before the other ends. Draw a few cases on paper first: back-to-back classes
(8:00–9:00 and 9:00–10:00) should **not** count as a conflict.
</details>

<details>
<summary>💡 Hint 2</summary>

Write each rule (full, conflict, prerequisite, duplicate) as its own plain function with no Flask in it. Test them with `pytest` before building any page.
</details>

<details>
<summary>💡 Hint 3</summary>

Two students click "Enroll" on the last slot at the same moment. Both checks pass. What happens? Research how to make the check and the insert happen as one step.
</details>

### Stretch goals

- Login for admins and students, with each role seeing only its own pages.
- A maximum-units limit per student per term.
- Export a section's class list to CSV for the teacher.

---

## 🔴 6. Exam Scheduler

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `python-exam-scheduler`

### The mission

Every exam week, someone builds the timetable by hand and a few students always end up with two exams at the same
time. Build a program that creates a clash-free exam timetable automatically, or proves that one isn't possible.

### Requirements

- [ ] Reads input files for: subjects, which students take which subject, rooms (with capacity), and available time slots.
- [ ] **No student** has two exams in the same time slot.
- [ ] **No room** holds more students than its capacity. A big subject may use more than one room.
- [ ] If no valid timetable exists, the program says so and gives a useful reason (for example, which subjects couldn't be placed).
- [ ] Prints a readable timetable grouped by day and time slot, and can save it to a file.
- [ ] Input errors (unknown subject, a student listed twice for one subject, a room with capacity 0) are reported clearly.
- [ ] **Includes tests** with `pytest`: small hand-made cases where you already know the right answer, including one that is impossible.
- [ ] Sample input files use **made-up student IDs only**.

### Example output

```
EXAM TIMETABLE
Mon 08:00-10:00   MATH101 (Room 201, Room 202)   HIST110 (Room 105)
Mon 10:30-12:30   PHYS101 (Room 201)             ENG102 (Room 105, Room 106)
Tue 08:00-10:00   CHEM101 (Room 201)

5 subjects scheduled in 3 slots. 0 clashes. Checked 214 students.
```

### Things to research

graph colouring · backtracking · recursion · sets and set intersection · `argparse` · `pytest` · "most constrained first" heuristics · JSON or CSV input

<details>
<summary>💡 Hint 1</summary>

Draw each subject as a dot, and connect two dots with a line if at least one student takes both. Now "no clashes" means
"connected dots never share a time slot." Search what that problem is called.
</details>

<details>
<summary>💡 Hint 2</summary>

Backtracking means: place one subject, move on, and if you get stuck, undo the last choice and try the next option.
Which subject would you place first to get stuck less often?
</details>

<details>
<summary>💡 Hint 3</summary>

Write a separate function that **checks** a finished timetable for clashes and room overflows. It's much simpler than
the scheduler, and it makes your tests trustworthy.
</details>

### Stretch goals

- Soft rules: avoid giving a student more than two exams in one day.
- Assign a proctor (teacher) to each room, with no teacher in two places at once.
- Compare your backtracking solver's speed with a simple greedy approach on a large generated dataset.
