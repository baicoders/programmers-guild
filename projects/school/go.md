# Go School Projects

[← Back to the board](../../README.md)

**You'll need:** [Go](https://go.dev/dl/) 1.22 or newer. Check with `go version`.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-go-grade-report`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** start every project with `go mod init github.com/baicoders/<your-username>-<repo-name>`. Put a small sample data file (fake, of course) in your repo so anyone can try your tool in one command.

---

## 🟢 1. Grade Report CLI

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `go-grade-report`

### The mission

At the end of every quarter, an adviser copies grades into a spreadsheet and works out averages and rankings by hand. Build a CLI that reads the exported CSV and does it in one second.

### Requirements

- [ ] Usage: `go run . grades.csv`
- [ ] The CSV has a header row, then one row per student: name followed by one grade per subject.
- [ ] Prints each student's **average**, **rank** in the class, and **PASSED** or **FAILED** (passing mark is 75).
- [ ] Prints the class **top 3** at the end.
- [ ] Students with the same average get the same rank.
- [ ] Malformed rows (missing grades, text instead of numbers, grades outside 0–100) are **reported with their line number and skipped**. The program never crashes on bad data.
- [ ] Table-driven tests for the average and ranking logic.

### Example output

```
$ go run . grades.csv
Rank  Name               Average  Remarks
1     Maria Santos        93.50   PASSED
2     Jose Reyes          88.25   PASSED
2     Ana Cruz            88.25   PASSED
4     Pedro Garcia        72.00   FAILED

Top 3: Maria Santos, Jose Reyes, Ana Cruz

Skipped rows:
  line 6: "ninety" is not a number
  line 9: expected 4 grades, found 3
```

### Things to research

`encoding/csv` · `os.Open` · `strconv.ParseFloat` · structs · `sort.Slice` · `fmt.Printf` width and precision · returning `(value, error)` · table-driven tests

<details>
<summary>💡 Hint 1</summary>

Keep reading the file and doing the maths in separate functions. A function that takes a slice of grades and returns an average is easy to test. One that also opens a file is not.
</details>

<details>
<summary>💡 Hint 2</summary>

If two students tie for 2nd place, what rank does the next student get: 3rd or 4th? Pick a rule, write it in your README, and write a test for it.
</details>

<details>
<summary>💡 Hint 3</summary>

By default `encoding/csv` complains when rows have different numbers of fields. Look up the option that lets you handle that yourself.
</details>

### Stretch goals

- A `--subject` flag that prints the ranking for one subject only.
- Write the report to a new CSV file with an `--out` flag.
- Show the class average and the highest and lowest grade per subject.

---

## 🟢 2. Group Maker

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `go-group-maker`

### The mission

Every time a teacher assigns a group project, someone complains that the groups are unfair. Build a CLI that splits a class list into random, balanced groups so nobody can blame the teacher.

### Requirements

- [ ] Usage: `go run . --file class.txt --size 4` or `go run . --file class.txt --groups 6`.
- [ ] The class list is a text file with one student name per line. Blank lines are ignored.
- [ ] Students are shuffled, then split so group sizes **differ by at most one**. No group of 1 left over at the end.
- [ ] A `--seed` flag gives the same groups every time for the same seed.
- [ ] An `--absent` flag (a file or a comma-separated list) leaves those students out.
- [ ] Writes the groups to an output file as well as printing them.
- [ ] Clear errors for bad input: missing file, empty list, size of 0, more groups than students, both `--size` and `--groups` given.

### Example output

```
$ go run . --file class.txt --groups 3 --seed 42
Group 1 (4): Ana, Carlo, Bea, Miguel
Group 2 (4): Rhea, Paolo, Lea, Jun
Group 3 (3): Kim, Tony, Joy

Saved to groups.txt
```

### Things to research

`flag` package · `bufio.Scanner` · `strings.TrimSpace` · `math/rand` and seeding · `rand.Shuffle` · integer division and remainder (`/` and `%`) · `os.WriteFile`

<details>
<summary>💡 Hint 1</summary>

Try it on paper first: 11 students into 3 groups. How many groups get an extra person? The `%` operator tells you.
</details>

<details>
<summary>💡 Hint 2</summary>

A random number generator started with the same seed produces the same sequence every time. Look up how to create your own generator from a seed instead of using the global one.
</details>

<details>
<summary>💡 Hint 3</summary>

What if the absent list has a name that isn't in the class, or has different capitalisation ("ana" vs "Ana")? Decide what should happen.
</details>

### Stretch goals

- A `--keep-apart` file listing pairs of students who should not be in the same group.
- Output as CSV so the teacher can open it in a spreadsheet.
- Tests that check group sizes never differ by more than one, for many class sizes.

---

## 🟡 3. School Announcements API

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `go-announcements-api`

### The mission

Announcements get lost in group chats. The student council wants one place for them, and a future mobile app will need an API to read from. Build that API.

### Requirements

- [ ] `POST /announcements` creates one with a title, body, category (e.g. `event`, `exam`, `suspension`), audience (e.g. `All`, `Grade 11`) and an optional expiry date.
- [ ] `GET /announcements` lists them **newest first**, with optional filters: `?category=exam&audience=Grade%2011`.
- [ ] `GET /announcements/{id}`, `PUT /announcements/{id}` and `DELETE /announcements/{id}` work as expected. Unknown IDs return a 404.
- [ ] **Expired** announcements are hidden from the list.
- [ ] Invalid JSON or missing fields return a **400 with a message that says what is wrong** (for example `"title is required"`).
- [ ] Data is saved to a JSON file so it survives restarts, and stays correct when many requests arrive at once.
- [ ] Uses only the standard library (`net/http`) for the server.
- [ ] Tests for the handlers using `net/http/httptest`.

### Things to research

`net/http` · `http.ServeMux` and path patterns (Go 1.22+) · `encoding/json` · struct tags · `time.Time` and `time.Parse` · HTTP status codes · `sync.Mutex` · `os.WriteFile` · `net/http/httptest`

<details>
<summary>💡 Hint 1</summary>

Two requests saving the file at the same time can leave it half-written or with one change lost. What needs to be locked: only the map in memory, or the file write too?
</details>

<details>
<summary>💡 Hint 2</summary>

If the server crashes in the middle of writing the JSON file, you could lose everything. Search for "atomic file write": write somewhere else first, then swap.
</details>

<details>
<summary>💡 Hint 3</summary>

`httptest.NewRecorder` lets you call a handler directly and inspect the response, without starting a real server.
</details>

### Stretch goals

- Pagination: `?page=2&limit=10`.
- A simple API key required for create, update and delete, read from an environment variable (never committed to the repo).
- A `pinned` field that keeps important announcements at the top.

---

## 🟡 4. Gate Attendance Log Analyzer

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `go-gate-attendance`

### The mission

The school's RFID gate records every tap, but the guidance office only gets a giant CSV nobody reads. Build a tool that turns the raw log into a daily attendance report they can actually use.

### Requirements

- [ ] Reads a CSV log with columns: student ID, timestamp, direction (`IN` or `OUT`).
- [ ] Usage: `go run . --log gate.csv --date 2026-06-15 --late 07:30`
- [ ] For the chosen day, reports: who came in, who was **late** (first IN after the `--late` time), and who **never tapped out**.
- [ ] Lists students with **3 or more lates in the same month** (make the number a flag).
- [ ] Handles **duplicate taps** (the same card tapped twice within a minute) without counting them twice.
- [ ] Handles lines that are **out of order** in the file.
- [ ] Bad lines (unknown direction, broken timestamp) are reported with line numbers and skipped.
- [ ] Tests using small hand-made logs that cover each tricky case.

### Example output

```
$ go run . --log gate.csv --date 2026-06-15 --late 07:30
Attendance for Mon 15 Jun 2026
  Present:           412
  Late:               23
  No tap-out:          5

Late today:
  2024-0117  first IN 07:42
  2024-0355  first IN 08:05
  ...

Repeated lates this month (3+):
  2024-0117  5 lates
```

### Things to research

`encoding/csv` · `time.Parse` and layouts · `time.Time` comparisons · time zones and `time.LoadLocation` · sorting by time · maps of structs · `flag` package · table-driven tests

<details>
<summary>💡 Hint 1</summary>

Go parses times with a strange but clever reference date: `2006-01-02 15:04:05`. Look it up before you fight with it.
</details>

<details>
<summary>💡 Hint 2</summary>

Out-of-order lines and duplicate taps are both much easier to handle if you first group taps by student and sort each student's taps by time.
</details>

<details>
<summary>💡 Hint 3</summary>

A timestamp with no time zone is ambiguous. Is `07:29` Philippine time or UTC? Decide, and make sure your "late" check agrees.
</details>

### Stretch goals

- A `--week` report showing each student's lates across the week.
- Load a fake student list (ID, name, section) and group the report by section.
- Output the report as CSV or JSON.

---

## 🔴 5. Room Booking Service

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `go-room-booking`

### The mission

Clubs and teachers keep double-booking the AVR and the computer lab. Build a booking service that makes it impossible for two groups to hold the same room at the same time, even when they click "Book" at the exact same moment.

### Requirements

- [ ] Data is stored in **SQLite**.
- [ ] Endpoints to add and list rooms.
- [ ] `POST /bookings` books a room for a start and end time. Overlapping bookings are rejected with a **409 Conflict**.
- [ ] Rejects bookings where the end is before the start, or that are in the past.
- [ ] `DELETE /bookings/{id}` cancels a booking.
- [ ] `GET /rooms/{id}/schedule?date=2026-06-15` lists a room's bookings for a day, in time order.
- [ ] Conflict detection stays correct when **many requests arrive at once**.
- [ ] Every database call uses a **context with a timeout**.
- [ ] **Graceful shutdown**: on Ctrl+C the server finishes requests in progress before exiting.
- [ ] Tests, including one that fires many booking requests for the same slot at once and checks only one succeeds.

### Things to research

`database/sql` · a SQLite driver for Go · SQL transactions · overlapping time ranges · `context.WithTimeout` · `http.Server.Shutdown` · `os/signal` · goroutines and `sync.WaitGroup` · `net/http/httptest`

<details>
<summary>💡 Hint 1</summary>

"Check if the slot is free, then insert" is two steps. What happens if another request runs its check between your two steps? This is called a race condition.
</details>

<details>
<summary>💡 Hint 2</summary>

Two time ranges overlap under one short condition. Draw a few cases on paper (touching, inside, partly overlapping) before writing the check. Does a booking ending at 10:00 clash with one starting at 10:00?
</details>

<details>
<summary>💡 Hint 3</summary>

Some SQLite drivers need a C compiler (cgo), which can be painful on Windows. Compare the available drivers before you pick one.
</details>

### Stretch goals

- Recurring bookings (every Tuesday for a semester), rejected as a whole if any single one conflicts.
- Room capacity, and reject bookings for more people than the room holds.
- A simple HTML page showing today's schedule for every room.

---

## 🔴 6. Bulk Report Card Generator

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `go-report-card-generator`

### The mission

At the end of the school year, the registrar has to produce report cards for thousands of students. Build a tool that turns a CSV of grades into one neat report card per student, fast.

### Requirements

- [ ] Reads student info and grades from CSV (fake data only). Include a script or command that **generates thousands of fake students** for testing.
- [ ] Produces one **HTML report card per student** from a template, with school name, student details, grades per subject, general average and remarks.
- [ ] Uses a **worker pool** with a configurable number of workers (`--workers 8`).
- [ ] Shows **progress** while running (e.g. `1200/5000 done`).
- [ ] If one student's card fails (bad data, missing field), the rest still get generated. All errors are **collected and printed as a summary** at the end.
- [ ] Output file names never contain anything that could break a path (like `/` or `..` in a name).
- [ ] Your README includes a table comparing **sequential vs concurrent** run times for different worker counts.

### Example output

```
$ go run . --in students.csv --out cards/ --workers 8
Generating 5000 report cards with 8 workers...
5000/5000 done

Finished in 3.2s
  Generated: 4997
  Failed:    3
    row 118 (2024-0118): missing grade for Science
    row 2051 (2024-2051): general average out of range
    row 4410 (2024-4410): empty student name
```

### Things to research

`html/template` · `encoding/csv` · goroutines · channels · `sync.WaitGroup` · worker pool pattern · `time.Since` · `filepath.Join` and `filepath.Base` · `errors.Join` · a Go PDF library (for the stretch goal)

<details>
<summary>💡 Hint 1</summary>

Parse your template **once**, before starting the workers. A parsed template is safe to use from many goroutines at the same time.
</details>

<details>
<summary>💡 Hint 2</summary>

Workers shouldn't print errors themselves or write to a shared slice without care. Could they send results back on a channel to one goroutine that collects them?
</details>

<details>
<summary>💡 Hint 3</summary>

More workers isn't always faster. Try 1, 2, 4, 8, 32 and 128 and see where the speed-up stops. Why do you think it stops there?
</details>

### Stretch goals

- Generate PDFs as well as HTML, using a PDF library.
- A `--section` flag that only generates cards for one section.
- Bundle each section's report cards into one ZIP file.
