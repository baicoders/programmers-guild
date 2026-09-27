# Java School Projects

[← Back to the board](../../README.md)

**You'll need:** a JDK (version 17 or newer; [Eclipse Temurin](https://adoptium.net/) is a good free choice). Check with `java -version`.
**Editor:** IntelliJ IDEA Community Edition or VS Code with the Java extensions.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-java-tuition-calculator`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** think like the registrar, not just the programmer. Before coding, write down the rules your school actually uses (unit limits, fee types, room names) and build around them.
By the Challenge level you should be using **Maven** or **Gradle**. Don't commit the `target/` or `build/` folders, or any database file full of test data.

---

## 🟢 1. Student Registration & ID Generator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `java-student-registration`

### The mission

Enrollment week is chaos. The registrar wants a console tool that registers new students and gives each one a unique student number.

### Requirements

- [ ] Register a student with a full name, course (e.g. BSIT, BSCS, BSEd) and year level (1–4).
- [ ] Generate a student number in the format `YYYY-NNNNN`: the current year plus a zero-padded sequence, e.g. `2026-00017`.
- [ ] No two students ever get the same number.
- [ ] Reject blank names, names that are only spaces, and year levels outside 1–4. Ask again instead of crashing.
- [ ] Reject a duplicate registration (same name and course), ignoring differences in upper/lower case and extra spaces.
- [ ] List all students in a neat table.
- [ ] Search by student number or by part of a name.
- [ ] A menu that loops until the user chooses to exit.

### Example output

```
Student No.  Name                 Course  Year
-----------  -------------------  ------  ----
2026-00001   Maria Santos         BSIT       1
2026-00002   Jose Reyes           BSCS       2
2026-00003   Ana Villanueva       BSEd       1

Search: rey
Found 1: 2026-00002  Jose Reyes  BSCS  2
```

### Things to research

Classes and objects · `ArrayList` · `String.format` with zero padding · `String.trim()` / `isBlank()` · `equalsIgnoreCase` · `LocalDate.now().getYear()` · `static` fields

<details>
<summary>💡 Hint 1</summary>

Where should the "next sequence number" live so it keeps counting up no matter which student object you create?
</details>

<details>
<summary>💡 Hint 2</summary>

Is `"  maria   santos "` the same student as `"Maria Santos"`? Decide on a rule, then clean the input before you compare.
</details>

<details>
<summary>💡 Hint 3</summary>

What should happen to the sequence when the year changes? Does `2027` start again at `00001`?
</details>

### Stretch goals

- Save students to a CSV file and load them on start, so numbers keep counting between runs.
- Edit a student's course or year level.
- Show a count of students per course.

---

## 🟢 2. Tuition Fee Calculator

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `java-tuition-calculator`

### The mission

Every semester, students line up at the cashier just to ask "how much do I owe?" Build a console tool that prints a clear assessment slip.

### Requirements

- [ ] Ask for the number of academic units and compute tuition as units × rate per unit.
- [ ] Ask how many subjects have a lab and add a lab fee for each one.
- [ ] Add fixed miscellaneous fees (e.g. library, ID, registration), each listed on its own line.
- [ ] Support discount types chosen from a fixed list: None, Academic Scholar (e.g. 100% tuition), Sibling Discount, Employee Dependent. Discounts apply to tuition only, not to misc or lab fees.
- [ ] Support two payment schemes: full payment (with a small extra discount) or installments (a down payment plus equal monthly payments).
- [ ] Reject negative numbers, zero units and letters where a number is expected.
- [ ] Money is always shown with two decimal places and a peso sign, e.g. `₱12,450.00`.
- [ ] Print an assessment slip that shows every line item and the total.

### Example output

```
========= ASSESSMENT SLIP =========
Tuition (21 units x ₱850.00)   ₱17,850.00
Lab fees (2 x ₱1,500.00)        ₱3,000.00
Library fee                       ₱500.00
Registration fee                  ₱300.00
Sibling discount (10%)         -₱1,785.00
-----------------------------------
TOTAL                          ₱19,865.00

Scheme: Installment
Down payment                    ₱5,000.00
4 monthly payments of           ₱3,716.25
```

### Things to research

`enum` · `switch` · `BigDecimal` and rounding modes · `NumberFormat` / `DecimalFormat` · input validation loops · constants with `final`

<details>
<summary>💡 Hint 1</summary>

The list of discount types is fixed and each one has a percentage. Can an `enum` hold a value as well as a name?
</details>

<details>
<summary>💡 Hint 2</summary>

Split ₱10,000.00 into 3 monthly payments. Do the payments add back up to exactly ₱10,000.00? Where does the missing centavo go?
</details>

### Stretch goals

- Read the fee table (rate per unit, lab fee, misc fees) from a text file so it can change each school year without editing code.
- Different rates per course.
- Save the slip to a text file named after a (fake) student number.

---

## 🟡 3. Classroom Reservation System

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `java-room-reservation`

### The mission

Two teachers show up to the same room at the same time, again. Build a reservation system so faculty can book rooms without clashes.
The real lesson is **object-oriented design** and handling dates and times correctly.

### Requirements

- [ ] Rooms have a code (e.g. `RM-204`), a capacity and a type: Lecture, Computer Lab, Science Lab, AVR.
- [ ] A faculty member reserves a room for a date, a start time and an end time, with a purpose and expected class size.
- [ ] Reject a booking that **overlaps** an existing one in the same room, even by one minute. Back-to-back bookings (8:00–9:00 then 9:00–10:00) are allowed.
- [ ] Reject a booking where the class size is larger than the room's capacity.
- [ ] Reject bookings in the past, bookings where the end is before the start, and bookings outside school hours (e.g. 7:00–21:00).
- [ ] Each rejection is a **custom exception** with a clear message (e.g. `RoomConflictException`).
- [ ] Cancel a reservation by its reservation ID. Only the faculty member who made it can cancel it.
- [ ] Show a room's schedule for a given day, sorted by start time.
- [ ] Find all rooms of a given type that are free for a given date and time range.

### Example output

```
Schedule for RM-204 (Computer Lab, 40 seats) - 2026-10-05
07:30-09:00  R-0012  Prof. Cruz     IT 101 Lab
09:00-10:30  R-0015  Prof. Lim      CS 201 Lab
13:00-15:00  R-0019  Prof. Cruz     Capstone consult

Reserve RM-204, 2026-10-05, 10:00-11:00...
Error: RM-204 is already booked 09:00-10:30 by R-0015.
```

### Things to research

`LocalDate` / `LocalTime` / `LocalDateTime` · `isBefore` / `isAfter` · custom exceptions · enums · `Comparator` · `Map<String, List<...>>` · interval overlap

<details>
<summary>💡 Hint 1</summary>

Draw two time ranges on a line in every way they can sit next to each other or overlap. How many cases are there? Can one condition cover all the overlapping ones?
</details>

<details>
<summary>💡 Hint 2</summary>

Which class should decide whether a booking is allowed: the `Room`, the `Reservation`, or something else? Keep the rules in one place.
</details>

<details>
<summary>💡 Hint 3</summary>

Test the edge cases on purpose: a booking that ends exactly when another starts, one that fully contains another, and one that sits inside another.
</details>

### Stretch goals

- Recurring reservations (every Monday and Wednesday for the whole semester), rejected as a group if any one date clashes.
- Save rooms and reservations to a file.
- A weekly timetable view for one room.

---

## 🟡 4. Student Council Election

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `java-council-election`

### The mission

The student council wants to run its election on a laptop in the lobby. It has to be fair, it has to count correctly, and nobody should
ever be able to find out who a student voted for.

### Requirements

- [ ] Positions are set up before voting starts (e.g. President, Vice President, Secretary, Treasurer), each with its own list of candidates.
- [ ] Only registered voters (by student number) can vote, and each voter can vote **only once**. A second attempt is refused.
- [ ] A ballot has at most one choice per position. The voter can **abstain** on any position.
- [ ] Show the voter a summary of their choices and ask them to confirm before the ballot is cast.
- [ ] Ballots are saved to a file so the count survives a restart.
- [ ] **Votes are secret.** The saved ballots must not contain the student number, and it must not be possible to match a ballot to a voter (think about order and timestamps too).
- [ ] Voting can be closed. After closing, print results per position: votes per candidate, abstentions, turnout percentage and the winner.
- [ ] Ties are detected and reported as ties, not silently decided.

### Example output

```
=== RESULTS: PRESIDENT ===
Carla Mendoza     142  (47.3%)
Paolo Garcia      131  (43.7%)
Abstain            27   (9.0%)
Winner: Carla Mendoza

=== RESULTS: SECRETARY ===
Liza Tan           98
Mark Dizon         98
Abstain           104
Result: TIE between Liza Tan and Mark Dizon

Turnout: 300 of 412 registered voters (72.8%)
```

### Things to research

`Set` / `HashSet` · `Map` · `Optional` · file I/O · separation of concerns · `Collections.shuffle` · what "ballot secrecy" means in real elections

<details>
<summary>💡 Hint 1</summary>

You need to know **that** a student voted, and **what** was voted. Do those two facts have to be stored in the same place?
</details>

<details>
<summary>💡 Hint 2</summary>

If ballots are saved in the order they were cast, and someone wrote down who walked up to the laptop and when, is the vote still secret?
</details>

<details>
<summary>💡 Hint 3</summary>

How will you represent "abstain" so it can never be confused with a real candidate, even one with an unusual name?
</details>

### Stretch goals

- An admin PIN required to open and close voting.
- Positions that allow more than one choice (e.g. "vote for up to 3 senators").
- Unit tests for the counting and tie rules.

---

## 🔴 5. School Management System

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `java-school-management`

### The mission

Build a desktop app a school office could actually use: students, teachers, sections, subjects and grades, all stored in a real database.
This is a full project with a GUI, a database and a proper code structure.

### Requirements

- [ ] Uses **Maven or Gradle**. Someone should be able to build and run it with one command.
- [ ] A **JavaFX** interface with separate screens for students, teachers, sections and subjects.
- [ ] Add, edit and delete records. Deleting asks for confirmation, and you can't delete a section that still has students in it.
- [ ] Assign students to a section and teachers to subjects in a section.
- [ ] Encode grades per student per subject. Grades outside the valid range are rejected with a clear message.
- [ ] Tables can be searched and filtered (e.g. by name, section, year level) as you type.
- [ ] Data is stored in **SQLite** through JDBC, and every query that uses user input uses **prepared statements**.
- [ ] The database and its tables are created automatically on first run, with a small set of fake sample data.
- [ ] Code organized into packages: `model`, `dao`, `service`, `ui`. No SQL inside the UI classes.

### Things to research

JavaFX (`TableView`, `FilteredList`, FXML or code-built layouts) · JDBC · `PreparedStatement` · SQL injection · foreign keys · the DAO pattern · Maven or Gradle dependencies

<details>
<summary>💡 Hint 1</summary>

Design your tables on paper first. A student belongs to one section, but a subject is taught in many sections. Where does each relationship live?
</details>

<details>
<summary>💡 Hint 2</summary>

Type `' OR '1'='1` into your search box. If anything strange happens, search "SQL injection" before you go any further.
</details>

<details>
<summary>💡 Hint 3</summary>

Slow database work on the JavaFX thread freezes the whole window. Search how JavaFX expects you to run background tasks.
</details>

### Stretch goals

- A login screen with Admin and Staff roles, with passwords stored hashed, never in plain text.
- Export a section's grade sheet to CSV or PDF.
- JUnit tests for the service layer using a separate test database.

---

## 🔴 6. Grades REST API

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `java-grades-api`

### The mission

The school wants students to check their grades online. Build the backend: a REST API where teachers post grades and students see
**only their own**. The big lesson here is **security**: getting authorization right, not just login.

### Requirements

- [ ] Built with **Spring Boot** and Maven or Gradle.
- [ ] Three roles: `ADMIN` (manages users and subjects), `TEACHER` (posts and edits grades for their own classes) and `STUDENT` (reads their own grades).
- [ ] Every endpoint except login requires authentication.
- [ ] A student must **never** be able to read another student's grades, even by changing an ID in the URL. The same goes for a teacher and classes they don't handle.
- [ ] Incoming data is validated (required fields, grade range, existing student and subject). Bad input returns a helpful error body.
- [ ] Correct HTTP status codes: `201` on create, `400` bad input, `401` not logged in, `403` not allowed, `404` not found.
- [ ] Data stored with **Spring Data JPA** (H2 for development is fine; SQLite or PostgreSQL for extra credit).
- [ ] **Integration tests** that prove each rule, especially the "student reads another student's grades" case, which must fail.
- [ ] API documentation generated with **OpenAPI** (Swagger UI).
- [ ] No passwords or secrets committed to the repo.

### Example output

```
GET /api/students/2026-00017/grades   (logged in as student 2026-00017)
200 OK
[ { "subject": "IT 101", "term": "Midterm", "grade": 1.75 },
  { "subject": "MATH 11", "term": "Midterm", "grade": 2.25 } ]

GET /api/students/2026-00018/grades   (logged in as student 2026-00017)
403 Forbidden
{ "error": "You can only view your own grades." }
```

### Things to research

Spring Boot · REST design · Spring Security (authentication vs authorization) · password hashing (BCrypt) · Bean Validation (`@Valid`) · Spring Data JPA · `@ControllerAdvice` · `@SpringBootTest` / MockMvc · springdoc-openapi · IDOR (Insecure Direct Object Reference)

<details>
<summary>💡 Hint 1</summary>

"Is this user logged in?" and "Is this user allowed to see **this** record?" are two different questions. Where in your code is the second one answered?
</details>

<details>
<summary>💡 Hint 2</summary>

Write the test for the attack first: log in as one student, request another student's grades, and expect `403`. Then make it pass.
</details>

<details>
<summary>💡 Hint 3</summary>

Should your API return your database entity objects directly? Think about what fields might leak, like password hashes.
</details>

### Stretch goals

- Token-based login (JWT) instead of sessions.
- An audit log of every grade change: who changed it, when, and from what to what.
- Run the tests with GitHub Actions on every push.
