# C++ School Projects

[← Back to the board](../../README.md)

**You'll need:** a C++ compiler. Options: **g++** (via MinGW-w64 or MSYS2 on Windows, or built in on Linux), **clang++** (macOS
via Xcode Command Line Tools), or **MSVC** (Visual Studio). Check with `g++ --version` or `clang++ --version`.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-cpp-honor-roll`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** compile with warnings on (`-Wall -Wextra`) and treat every warning as a bug. Don't commit compiled binaries (`.exe`, `a.out`, `.o`).
**Tip:** your teacher will want to run your project. Put the exact build and run commands in your README, plus a sample data file if the app reads one.

---

## 🟢 1. Honor Roll Checker

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `cpp-honor-roll`

### The mission

The class adviser has to figure out who makes the honor roll every quarter, by hand. Write a console app that takes each
student's grades, works out their average and tells the adviser which honor they earned.

### Requirements

- [ ] Ask for the number of subjects, then a name and one grade per subject for each student.
- [ ] Grades must be between 60 and 100. Anything else (or letters) shows an error and asks again.
- [ ] Compute the average and print it with 2 decimal places.
- [ ] Honors use these thresholds: **With Highest Honors** 98–100, **With High Honors** 95–97.99, **With Honors** 90–94.99, otherwise none.
- [ ] Any grade below 75 is failing and disqualifies the student from honors, no matter the average.
- [ ] After each student, ask whether to enter another one.
- [ ] At the end, print a class honor list grouped by honor, and the number of students in each group.

### Example session

```
Number of subjects: 4

Student name: Ana
Grade 1: 97
Grade 2: 99
Grade 3: 105
Error: grade must be 60-100
Grade 3: 98
Grade 4: 100
Average: 98.50 -> With Highest Honors
Another student? (y/n): y

Student name: Ben
Grade 1: 99
Grade 2: 98
Grade 3: 74
Grade 4: 100
Average: 92.75 -> No honors (failing grade in subject 3)
Another student? (y/n): n

=== Honor List ===
With Highest Honors (1): Ana
With High Honors (0): -
With Honors (0): -
```

### Things to research

`std::cin` input validation · `while` and `do-while` loops · `if` / `else if` chains · `std::vector` · `<iomanip>` (`std::fixed`, `std::setprecision`) · functions

<details>
<summary>💡 Hint 1</summary>

The order of your `if` checks matters. Should you check the average first, or the failing grade first?
</details>

<details>
<summary>💡 Hint 2</summary>

What exactly happens to a student with an average of 97.5? Test the values right on the edges of every threshold.
</details>

<details>
<summary>💡 Hint 3</summary>

Adding whole-number grades and dividing by the count can give a surprising result. Look up integer division.
</details>

### Stretch goals

- Let the adviser change the thresholds at the start instead of hard-coding them.
- Sort each honor group by average, highest first.
- Save the honor list to a text file.

---

## 🟢 2. Math Drill for Pupils

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `cpp-math-drill`

### The mission

A Grade 3 teacher wants her pupils to practice arithmetic on the computer lab PCs. Build a drill that asks 10 random
questions, checks each answer right away and shows a score at the end.

### Requirements

- [ ] The pupil picks an operation (`+`, `-`, `×`, `÷` or mixed) and a difficulty (easy, medium, hard).
- [ ] Each difficulty uses a different number range. State the ranges in your README.
- [ ] Every round has exactly 10 randomly generated questions, different each time the program runs.
- [ ] After each answer, show "Correct!" or the right answer.
- [ ] On easy, subtraction never gives a negative answer.
- [ ] Division questions always have a whole-number answer, and never divide by zero.
- [ ] Non-number answers show a friendly message and ask the same question again.
- [ ] At the end, show the score (e.g. `8/10`) and how long the round took in seconds.
- [ ] Ask whether to play again.

### Example session

```
Operation (+ - x / m): -
Difficulty (1 easy, 2 medium, 3 hard): 1

Q1: 9 - 4 = 5
Correct!
Q2: 7 - 2 = six
Please type a number.
Q2: 7 - 2 = 6
Not quite. The answer is 5.
...
Score: 8/10 in 74 seconds. Great job!
Play again? (y/n):
```

### Things to research

`<random>` (`std::mt19937`, `std::uniform_int_distribution`) · seeding a random generator · `<chrono>` for timing · `switch` · functions · input validation with `std::cin`

<details>
<summary>💡 Hint 1</summary>

For subtraction without negatives, you don't have to throw away bad questions. What if you just make sure the first number is the bigger one?
</details>

<details>
<summary>💡 Hint 2</summary>

For whole-number division, think backwards. Which two numbers do you pick first so that the answer is guaranteed to be whole?
</details>

<details>
<summary>💡 Hint 3</summary>

If you get the same "random" questions every run, your generator isn't being seeded. Look up what `rand()` without `srand()` does, and why `<random>` is preferred.
</details>

### Stretch goals

- Keep a high score for each difficulty in a file.
- Repeat wrongly answered questions at the end of the round.
- Add a time limit per question.

---

## 🟡 3. Library Catalog

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `cpp-library-catalog`

### The mission

The school librarian still tracks books in a notebook. Build a console catalog that lets her add books, find them
quickly, and keep track of how many copies are on the shelf.

### Requirements

- [ ] A `Book` class: ISBN, title, author, year published, total copies and available copies.
- [ ] Add a book. Reject duplicate ISBNs, empty titles, negative copies and years in the future.
- [ ] Search by title or author. Matches are **partial** and **case-insensitive** (`harry` finds *Harry Potter*).
- [ ] Remove a book by ISBN, but only when no copies are borrowed.
- [ ] Borrow and return a copy by ISBN. You can't borrow when none are available, or return more than were borrowed.
- [ ] List all books in a neat table.
- [ ] Save the catalog to a file on exit and load it on start. A missing file means an empty catalog, not a crash.
- [ ] Split the code into headers (`.h`) and source files (`.cpp`).
- [ ] Build with a **Makefile** or **CMake**.

### Example output

```
ISBN            Title                      Author            Year  Avail
--------------------------------------------------------------------------
978-0000000001  Noli Me Tangere            Jose Rizal        1887   2/3
978-0000000002  El Filibusterismo          Jose Rizal        1891   0/2
978-0000000003  Florante at Laura          F. Balagtas       1838   4/4

> borrow 978-0000000002
Sorry, no copies of "El Filibusterismo" are available.
```

### Things to research

Classes and encapsulation · header files and include guards · `std::vector` or `std::map` · `std::string::find` · `std::tolower` · `<fstream>` · `std::getline` · Makefile or CMake basics

<details>
<summary>💡 Hint 1</summary>

Book titles contain spaces and sometimes commas. Pick a file format that can't be confused by them before you write save/load code.
</details>

<details>
<summary>💡 Hint 2</summary>

Case-insensitive search is easier than it sounds. What if you compare lowercase copies of both strings?
</details>

<details>
<summary>💡 Hint 3</summary>

Should other code be able to set `availableCopies` directly? Think about which member functions the class should offer instead, so the numbers can never go wrong.
</details>

### Stretch goals

- Track who borrowed each copy (fake borrower IDs) and a due date.
- List overdue books.
- Sort the list by title, author or year.

---

## 🟡 4. Schedule Conflict Checker

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `cpp-schedule-checker`

### The mission

Every enrollment season, students accidentally pick two classes that overlap. Write a tool that reads a student's
planned subjects from a file and points out every conflict before they enroll.

### Requirements

- [ ] Read subjects from a text file: subject code, units, day(s), start time and end time.
- [ ] Days use the usual codes (`M`, `T`, `W`, `Th`, `F`, `S`), and a subject can meet on several days (e.g. `MWF`, `TTh`).
- [ ] Lines with a bad time (`25:00`, `8.30`, end before start) or unknown day are reported with their line number and skipped.
- [ ] Detect every pair of subjects that overlap on the same day. A class ending at 9:00 and one starting at 9:00 do **not** conflict.
- [ ] Print each conflict clearly: both subjects, the day and the overlapping time.
- [ ] Print the schedule sorted by day, then by start time.
- [ ] Draw a weekly grid in the terminal (days as columns, time slots as rows).
- [ ] Show the total number of units, and a warning above a limit you choose (e.g. 24).

### Example input and output

```
CS101 3 MWF 08:00 09:00
MATH11 3 TTh 09:00 10:30
PE1 2 F 08:30 10:30
ENG1 3 TTh 10:00 11:30
HIST 3 W 7:70 9:00
```

```
Line 5: invalid time "7:70" (skipped)

CONFLICTS
  CS101 and PE1 on F, 08:30-09:00
  MATH11 and ENG1 on T, 10:00-10:30
  MATH11 and ENG1 on Th, 10:00-10:30

Total units: 11
```

### Things to research

`std::istringstream` · parsing strings · `struct` / classes · `std::sort` with a custom comparison · interval overlap · `<iomanip>` (`std::setw`) · `std::map`

<details>
<summary>💡 Hint 1</summary>

Comparing times like `"9:00"` and `"10:30"` as strings gives the wrong order. What single number could represent a time of day?
</details>

<details>
<summary>💡 Hint 2</summary>

Two time ranges overlap under one simple condition. Draw a few pairs of ranges on paper, including ones that just touch, and find it.
</details>

<details>
<summary>💡 Hint 3</summary>

`TTh` is tricky: is it `T`, `T`, `h` or `T`, `Th`? Write the day parser as its own function and test it on its own.
</details>

### Stretch goals

- Also detect when a student has no break for more than 4 hours straight.
- Accept the room of each subject and check that back-to-back classes aren't in far-apart buildings.
- Export the weekly grid as an HTML table.

---

## 🔴 5. Registrar Queue Simulator

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `cpp-registrar-queue`

### The mission

The registrar's office has long lines during enrollment, and the school is deciding whether to open a third service
window. Build a simulation of a full school day so they can see the numbers before spending the money.

### Requirements

- [ ] Simulate one day (e.g. 8:00 to 17:00) with a configurable number of service windows.
- [ ] Students arrive at random intervals, with a configurable average arrival rate.
- [ ] Each visitor has a transaction type (e.g. enrollment, request for records, payment inquiry), and each type takes a different amount of time.
- [ ] A **priority lane** for PWD, senior and pregnant visitors: they are served before the regular line.
- [ ] Use `std::queue` for the regular line and `std::priority_queue` (or a second queue) for priority visitors.
- [ ] Report: visitors served, average wait, longest wait, visitors still waiting at closing, and each window's utilization (percent of the day busy).
- [ ] Run the same day with 2 windows and with 3 windows, and print the results side by side.
- [ ] The random generator takes a **seed** from the command line, so the same seed always gives the same results.
- [ ] Settings (hours, rates, service times) come from a config file or command-line options, not magic numbers in the code.
- [ ] Built with **CMake**.

### Example output

```
Seed: 42 | Day: 08:00-17:00 | Avg arrival: every 2.5 min

                     2 windows   3 windows
Visitors served          198         214
Avg wait (min)          23.4         6.1
Longest wait (min)      61.0        19.5
Priority avg wait        3.2         1.1
Still waiting at 17:00    16           0
Window utilization    97% 96%   81% 79% 74%
```

### Things to research

Discrete-event simulation · `std::queue` · `std::priority_queue` and custom comparators · `<random>` (`std::mt19937`, `std::exponential_distribution`) · seeds and reproducibility · command-line arguments (`argc`, `argv`) · CMake basics

<details>
<summary>💡 Hint 1</summary>

You can move the clock one minute at a time, or jump straight to the next "event" (an arrival or a window finishing). Try to reason about which is simpler and which is more accurate.
</details>

<details>
<summary>💡 Hint 2</summary>

If priority visitors keep arriving, a regular student might never get served. Is that acceptable for your office? Decide on a rule and write it in your README.
</details>

<details>
<summary>💡 Hint 3</summary>

To compare 2 and 3 windows fairly, both runs must see the **same** visitors. How can you make sure of that?
</details>

### Stretch goals

- Let visitors give up and leave if they've waited too long, and report how many did.
- Run each setup 100 times with different seeds and report averages.
- Find the smallest number of windows that keeps the average wait under 10 minutes.

---

## 🔴 6. Campus Navigator

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `cpp-campus-navigator`

### The mission

New students and visitors get lost looking for rooms on campus. Build a navigator that finds the shortest walking route
between any two places, including a route that avoids stairs for wheelchair users.

### Requirements

- [ ] Load the campus map from a text file: places (buildings, rooms, gates, stairwells) and the walking paths between them, each with a distance in meters.
- [ ] Each path is marked as either accessible or using stairs.
- [ ] Include a sample map of a made-up campus with at least 15 places.
- [ ] Given a start and a destination, find the **shortest** route using Dijkstra's algorithm, and print the full path and total distance.
- [ ] An "avoid stairs" option finds the shortest accessible route and ignores paths with stairs.
- [ ] Unknown place names, unreachable destinations and a start equal to the destination each get a clear message.
- [ ] Bad lines in the map file (missing fields, negative distances) are reported with their line number.
- [ ] **Unit tests** for the route finder, covering at least: a normal route, an unreachable place, and an accessible route that is longer than the normal one.
- [ ] Built with **CMake**, with the tests runnable from CMake.

### Example session

```
> route Gate1 CS-204
Gate1 -> Main Hall -> Stairs-B -> CS-204
Distance: 180 m

> route Gate1 CS-204 --avoid-stairs
Gate1 -> Main Hall -> Ramp-East -> Elevator-CS -> CS-204
Distance: 265 m

> route Gate1 Chapel-Loft --avoid-stairs
No accessible route from Gate1 to Chapel-Loft.
```

### Things to research

Graphs (adjacency lists) · Dijkstra's algorithm · `std::priority_queue` · `std::unordered_map` · rebuilding a path from "previous" links · unit testing frameworks (GoogleTest, Catch2, doctest) · CTest

<details>
<summary>💡 Hint 1</summary>

Dijkstra tells you the shortest distance, but not the path by itself. What extra piece of information could you remember for each place as you go?
</details>

<details>
<summary>💡 Hint 2</summary>

"Avoid stairs" doesn't need a second algorithm. Think about what the graph looks like if the stair paths weren't there.
</details>

<details>
<summary>💡 Hint 3</summary>

Keep the route finder separate from the code that reads input and prints output. Then your tests can call it directly with a tiny hand-made graph.
</details>

### Stretch goals

- Directions in plain words ("walk 40 m to Main Hall, then take the ramp").
- Add opening hours so closed buildings can't be walked through.
- Show the route on an ASCII map of the campus.
