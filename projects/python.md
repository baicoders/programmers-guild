# Python Projects

[← Back to the board](../README.md)

**You'll need:** [Python 3](https://www.python.org/downloads/) (3.10 or newer). Check with `python --version` or `python3 --version`.
**Tip:** from the intermediate level on, learn to use a **virtual environment** (`venv`) and a `requirements.txt`, even when you
have no dependencies yet. It's a habit every Python job expects.

---

## 🟢 1. Guess the Number

**Level:** Beginner · **Time:** 1–3 hours · **Repo name:** `python-guess-the-number`

### The mission

The computer picks a secret number. The player guesses it. The computer says "higher" or "lower" until they get it.

### Requirements

- [ ] The computer picks a random number between 1 and 100.
- [ ] The player keeps guessing until they're correct.
- [ ] After each guess: "Too high", "Too low", or "Correct!"
- [ ] Count the attempts and show the total at the end.
- [ ] **Never crash**, even if the player types `banana`, `-5`, or nothing at all.
- [ ] Ask "Play again? (y/n)" at the end.

### Example session

```
I'm thinking of a number between 1 and 100.
Your guess: 50
Too high!
Your guess: banana
That's not a number. Try again.
Your guess: 25
Correct! You got it in 2 attempts.
Play again? (y/n):
```

### Things to research

`random` module · `while` loops · `input()` · `int()` · `try` / `except ValueError` · `break`

<details>
<summary>💡 Hint 1</summary>

What happens when you call `int("banana")`? Run it and read the error name. That name is what you need to catch.
</details>

<details>
<summary>💡 Hint 2</summary>

A loop that runs "forever until something happens" is often written as `while True:` with a `break` inside.
</details>

### Stretch goals

- Difficulty levels (1–10, 1–100, 1–1000) with a limited number of attempts.
- Save the best score to a file so it persists between runs.

---

## 🟢 2. Password Generator

**Level:** Beginner · **Time:** 2–3 hours · **Repo name:** `python-password-generator`

### The mission

Build a command-line tool that generates strong random passwords, and rates how strong a password is.

### Requirements

- [ ] The user chooses a length (minimum 8) and which character types to include: lowercase, uppercase, digits, symbols.
- [ ] The generated password contains **at least one** of every chosen type.
- [ ] Option to generate several passwords at once.
- [ ] A separate "check strength" mode: the user types a password and gets a rating (Weak / Medium / Strong) with reasons.
- [ ] Uses a **cryptographically secure** source of randomness.
- [ ] Invalid choices (length 3, no character types selected) are handled gracefully.

### Things to research

`secrets` module vs `random` module · `string` module constants · list comprehensions · `any()` / `all()` · `getpass`

<details>
<summary>💡 Hint 1</summary>

Python's docs for the `random` module include a big warning box. Read it. It explains why this project needs a different module.
</details>

<details>
<summary>💡 Hint 2</summary>

Picking random characters from all the types combined won't *guarantee* one of each. What if you picked one from each type
first, filled the rest, then shuffled?
</details>

### Stretch goals

- Passphrase mode: random words, like `correct-horse-battery-staple` (look up the xkcd comic).
- Copy the result to the clipboard.
- Check against a list of the most common passwords.

---

## 🟡 3. Expense Tracker

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `python-expense-tracker`

### The mission

Build a command-line app that tracks where your money goes. Data must be saved to a file so nothing is lost when the
program closes.

### Requirements

- [ ] Menu: Add expense · List expenses · Show summary · Delete expense · Quit.
- [ ] Each expense has: amount, category, description, date.
- [ ] The date defaults to today if the user leaves it blank.
- [ ] Summary shows the total spent and the total **per category**.
- [ ] Data is saved to a **CSV or JSON** file and loaded on startup.
- [ ] Validates input: no negative amounts, no invalid dates.
- [ ] Code is split into functions, and **no single function is longer than ~30 lines**.

### Example session

```
=== Expense Tracker ===
1. Add expense
2. List expenses
3. Summary
4. Delete expense
5. Quit
> 3

Total: 142.50
  Food ........ 87.00
  Transport ... 40.00
  Fun ......... 15.50
```

### Things to research

`csv` or `json` module · `datetime` · dictionaries · `with open(...)` · f-string formatting · `if __name__ == "__main__":`

<details>
<summary>💡 Hint 1</summary>

Think about what happens the **very first time** the program runs, when the data file doesn't exist yet.
</details>

<details>
<summary>💡 Hint 2</summary>

Load all expenses into a list when the program starts, work with that list, and save it back whenever it changes.
</details>

<details>
<summary>💡 Hint 3</summary>

Add `expenses.csv` (or `.json`) to your `.gitignore`. Your personal spending doesn't belong on GitHub.
</details>

### Stretch goals

- Filter by month or by category.
- Monthly budget per category with a warning when exceeded.
- Split into multiple modules (`storage.py`, `reports.py`, `main.py`).
- Write tests with `pytest`.

---

## 🟡 4. Contact Book

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `python-contact-book`

### The mission

A command-line address book backed by a real **SQL database**, using SQLite, which is built into Python.

### Requirements

- [ ] Add, view, search, update and delete contacts (CRUD).
- [ ] Each contact has: first name, last name, phone, email, birthday (optional), notes (optional).
- [ ] Search by any part of a name, email or phone.
- [ ] Email and phone are validated before saving.
- [ ] No duplicate emails allowed. Enforce this **in the database**, not just in Python.
- [ ] "Upcoming birthdays" shows anyone with a birthday in the next 30 days.
- [ ] Export all contacts to CSV.
- [ ] Every query uses **parameterized** SQL, never string formatting.

### Things to research

`sqlite3` module · `CREATE TABLE` · `UNIQUE` constraints · parameterized queries (`?` placeholders) · SQL injection · `LIKE` · `re` module · `csv.DictWriter` · classes

<details>
<summary>💡 Hint 1</summary>

`f"SELECT * FROM contacts WHERE name = '{name}'"` works, and it's a security hole. Find out what happens if someone's "name" is `' OR '1'='1`.
</details>

<details>
<summary>💡 Hint 2</summary>

Put all database code in one module or class (e.g. `ContactRepository`). The menu code should never write SQL directly.
</details>

<details>
<summary>💡 Hint 3</summary>

Birthdays that "wrap around" the new year (today is Dec 20, birthday is Jan 5) are the tricky case. Test them specifically.
</details>

### Stretch goals

- Import contacts from a CSV file.
- Groups/tags (a second table plus a relationship).
- Tests with `pytest` using an in-memory database (`:memory:`).

---

## 🔴 5. File Organizer

**Level:** Challenge · **Time:** 2–4 days · **Repo name:** `python-file-organizer`

### The mission

Everyone's Downloads folder is a mess. Build a tool that sorts a folder's files into subfolders by type:
`Images/`, `Documents/`, `Videos/`, `Archives/`, `Other/`.

> ⚠️ **This tool moves real files.** Build and test it on a **practice folder full of dummy files**, never on your real Downloads.
> That's a real-world lesson in itself.

### Requirements

- [ ] Takes the target folder as a **command-line argument**: `python organize.py ~/practice-folder`
- [ ] A `--dry-run` flag that prints what **would** happen without moving anything. Build this **first**.
- [ ] File type → folder mapping is easy to change (not hard-coded all over the place).
- [ ] Handles name collisions: if `photo.jpg` already exists in `Images/`, don't overwrite it.
- [ ] Skips hidden files and folders.
- [ ] Prints a summary at the end: how many files moved to each folder.
- [ ] A `--undo` option that reverses the last run.

### Things to research

`pathlib` · `shutil.move` · `argparse` · file extensions · `Path.iterdir()` · logging moves to a file · JSON for storing state

<details>
<summary>💡 Hint 1</summary>

Write a small script that **creates** a practice folder full of empty dummy files (`.jpg`, `.pdf`, `.zip`, …). Now you can
reset your test environment in one second.
</details>

<details>
<summary>💡 Hint 2</summary>

For undo, you need a record of where every file came from and where it went. Where could you store that between runs?
</details>

<details>
<summary>💡 Hint 3</summary>

Separate **deciding** what to do (a list of planned moves) from **doing** it. Then dry-run is just "print the plan instead of executing it."
</details>

### Stretch goals

- Organize by date (`2025/03/`) as an alternative mode.
- A config file (JSON/TOML) for custom rules.
- Watch mode: automatically sort new files as they arrive (research `watchdog`).

---

## 🔴 6. Habit Tracker Web App

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `python-habit-tracker`

### The mission

Your first Python **web app**. Users track daily habits ("drink water", "read 20 pages") and see their streaks.

### Requirements

- [ ] Built with **Flask** and stored in SQLite.
- [ ] Create, rename and delete habits.
- [ ] Mark a habit as done for today (and undo it).
- [ ] Each habit shows its **current streak** and **longest streak**.
- [ ] A history view showing the last 30 days as a grid of done/not-done squares.
- [ ] Uses HTML **templates** with a shared base layout, not HTML strings in Python.
- [ ] Forms validate input and show error messages.
- [ ] Dependencies listed in `requirements.txt`. README explains how to set up a virtual environment and run it.
- [ ] Secret key and config come from environment variables, not committed code.

### Things to research

Flask routing · Jinja2 templates and template inheritance · `request.form` · POST/Redirect/GET pattern · `sqlite3` or Flask-SQLAlchemy · `datetime.date` · `venv` · environment variables · `python-dotenv`

<details>
<summary>💡 Hint 1</summary>

Don't store the streak as a number in the database. Store **which days** each habit was completed, and calculate streaks from that.
Why is that more reliable?
</details>

<details>
<summary>💡 Hint 2</summary>

After a form POST, redirect instead of rendering a page directly. Then find out what happens when a user presses refresh if you don't.
</details>

<details>
<summary>💡 Hint 3</summary>

Streak logic is pure date maths, with no web stuff. Put it in its own function and test it with `pytest` before wiring it to a page.
</details>

### Stretch goals

- User accounts, so each person sees only their own habits.
- Weekly habits ("gym 3× per week"), not just daily.
- Deploy it somewhere free and put the live link in your README.
