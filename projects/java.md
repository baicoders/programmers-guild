# Java Projects

[← Back to the board](../README.md)

**You'll need:** a JDK (version 17 or newer; [Eclipse Temurin](https://adoptium.net/) is a good free choice). Check with `java -version`.
**Editor:** IntelliJ IDEA Community Edition or VS Code with the Java extensions.
**Tip:** by the Challenge level you should be using a build tool (**Maven** or **Gradle**). Don't commit the `target/` or `build/` folders.

---

## 🟢 1. Grade Calculator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `java-grade-calculator`

### The mission

A teacher needs a quick console tool: enter student scores, get statistics and letter grades.

### Requirements

- [ ] Ask how many students, then read each student's name and score (0–100).
- [ ] Reject invalid scores and ask again.
- [ ] Convert each score to a letter grade (A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F < 60).
- [ ] Print a table of all students with their score and grade.
- [ ] Print the class average, highest score (and who got it) and lowest score.

### Example output

```
Name       Score  Grade
---------  -----  -----
Alice         92  A
Bob           67  D
Charlie       85  B

Average: 81.33
Highest: Alice (92)
Lowest:  Bob (67)
```

### Things to research

`Scanner` · arrays or `ArrayList` · `for` loops · `if / else if` or `switch` · `String.format` / `printf` · integer vs. floating-point division

<details>
<summary>💡 Hint 1</summary>

Mixing `nextInt()` and `nextLine()` on a `Scanner` causes a famous bug where input gets "skipped." Search for it when it
happens to you. (It will.)
</details>

<details>
<summary>💡 Hint 2</summary>

`(92 + 67) / 2` in Java is not `79.5`. Why not?
</details>

### Stretch goals

- Read student data from a text file instead of typing it.
- Sort the output by score, highest first.

---

## 🟢 2. Tic-Tac-Toe

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `java-tic-tac-toe`

### The mission

Two players, one keyboard, a 3×3 grid. Build Tic-Tac-Toe in the console.

### Requirements

- [ ] Draw the board after every move, with position numbers so players know what to type.
- [ ] Players X and O take turns entering a position (1–9).
- [ ] Reject moves on taken squares or out-of-range positions, and re-ask the same player.
- [ ] Detect a win (rows, columns, diagonals) and a draw.
- [ ] Keep a running score across games and ask to play again.
- [ ] Use a **2D array** for the board.

### Example output

```
 X | 2 | 3
---+---+---
 4 | O | 6
---+---+---
 7 | 8 | X

Player O, choose a position:
```

### Things to research

2D arrays · nested loops · methods with return values · `char` · converting a 1–9 position to a row and column

<details>
<summary>💡 Hint 1</summary>

Position 5 is row 1, column 1 (counting from zero). Is there a formula using `/` and `%` that works for every position?
</details>

<details>
<summary>💡 Hint 2</summary>

Write a separate `checkWinner()` method. Does it need to check the whole board, or only the lines through the last move?
</details>

### Stretch goals

- A computer opponent that picks randomly.
- A computer opponent that **never loses** (research the minimax algorithm).

---

## 🟡 3. Bank Account System

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `java-bank-system`

### The mission

Model a tiny bank with **object-oriented programming**. The goal here isn't the menu, it's designing good classes.

### Requirements

- [ ] An `Account` class with an account number, owner name and balance. The balance must **not** be directly editable from outside the class.
- [ ] Deposit, withdraw and transfer between accounts.
- [ ] Withdrawing more than the balance must fail with a **custom exception** (e.g. `InsufficientFundsException`).
- [ ] Two account types that behave differently, e.g. `SavingsAccount` (earns interest, limited withdrawals) and `CheckingAccount` (allows a small overdraft).
- [ ] Each account keeps a transaction history, and the user can print it.
- [ ] A console menu to create accounts and perform actions.

### Things to research

Encapsulation · `private` + getters · inheritance · `abstract` classes · method overriding · custom exceptions · `ArrayList` / `HashMap` · `BigDecimal` for money

<details>
<summary>💡 Hint 1</summary>

Draw your classes on paper first: what data does each one hold, and what can it do? Where does shared behavior belong?
</details>

<details>
<summary>💡 Hint 2</summary>

Try `System.out.println(0.1 + 0.2);`. Now think about why banks don't store money as `double`.
</details>

<details>
<summary>💡 Hint 3</summary>

How will you find an account by its number quickly? Is a list the best choice?
</details>

### Stretch goals

- Save and load accounts from a file.
- Monthly interest calculation for all savings accounts.
- Unit tests for deposit, withdraw and transfer edge cases.

---

## 🟡 4. Parking Lot System

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `java-parking-lot`

### The mission

"Design a parking lot" is a famous job interview question. Build a working one and practise object-oriented **design**.

### Requirements

- [ ] The lot has multiple floors, and each floor has spots of different sizes: Motorcycle, Compact, Large.
- [ ] Vehicle types: Motorcycle, Car, Truck. Each can only park in spots that fit it (a motorcycle fits anywhere, a truck needs Large).
- [ ] Parking a vehicle assigns the **nearest** free suitable spot and issues a ticket with the entry time.
- [ ] Leaving with a ticket calculates the fee: different hourly rates per vehicle type, first 30 minutes free, partial hours round up.
- [ ] Show availability per floor and spot type.
- [ ] Handle "lot full" and "invalid ticket" with exceptions.
- [ ] Use **enums** for vehicle and spot types.
- [ ] Include a class diagram (drawn or tool-generated) in your README.

### Things to research

Enums with fields and methods · interfaces vs abstract classes · `LocalDateTime` and `Duration` · `Map` · UML class diagrams · the Single Responsibility Principle

<details>
<summary>💡 Hint 1</summary>

Before writing code, list the **nouns** in the requirements (lot, floor, spot, vehicle, ticket…). They're your candidate classes.
The **verbs** (park, leave, calculate) are candidate methods. Which class owns each verb?
</details>

<details>
<summary>💡 Hint 2</summary>

Fee calculation depends on time. How can you test "parked for 3 hours" without waiting 3 hours?
</details>

### Stretch goals

- Different pricing for weekends (research the Strategy pattern).
- Reserved and electric-charging spots.
- Save lot state to a file.

---

## 🔴 5. Library Manager

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `java-library-manager`

### The mission

Build a library management system with a proper project structure, a build tool, saved data and **automated tests**.
This is the closest thing on this board to a real Java codebase.

### Requirements

- [ ] Uses **Maven or Gradle**. Someone should be able to build and run it with one command.
- [ ] Manages books (ISBN, title, author, year, available copies) and members (ID, name, borrowed books).
- [ ] Add / remove / search books (by title, author or ISBN, case-insensitive, partial match).
- [ ] Borrow and return books with rules: max 3 books per member, can't borrow a book with 0 copies available.
- [ ] Track due dates. List overdue books.
- [ ] Data persists between runs (JSON, CSV, or an embedded database like SQLite/H2).
- [ ] **At least 10 JUnit tests** covering the borrowing rules.
- [ ] Code organized into packages (e.g. `model`, `service`, `storage`, `ui`).

### Things to research

Maven or Gradle basics · JUnit 5 · packages · interfaces · `LocalDate` · Streams API (`filter`, `map`, `collect`) · separation of concerns

<details>
<summary>💡 Hint 1</summary>

Keep your business rules (borrowing, limits) in a **service** class with no `Scanner` or `System.out` inside it.
That makes it easy to test.
</details>

<details>
<summary>💡 Hint 2</summary>

If your storage code sits behind an **interface**, your tests can use a fake in-memory version instead of real files.
</details>

<details>
<summary>💡 Hint 3</summary>

Testing "overdue" logic is hard when it depends on today's date. How could you let a test decide what "today" is?
</details>

### Stretch goals

- A simple GUI with JavaFX or Swing.
- Late fees.
- GitHub Actions that run your tests on every push.

---

## 🔴 6. Multi-Client Chat Server

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `java-chat-server`

### The mission

Build a chat server that many people can connect to at once, plus a client to connect with. You'll work with networking and
**multithreading**, the fundamentals behind every online app.

### Requirements

- [ ] A **server** program that listens on a port and accepts many clients at the same time.
- [ ] A **client** program: connect to a host and port, pick a nickname, send and receive messages.
- [ ] Messages from one client are broadcast to everyone else, prefixed with the sender's nickname.
- [ ] Nicknames must be unique.
- [ ] Commands: `/list` (who's online), `/msg <name> <text>` (private message), `/quit`.
- [ ] "X joined" and "X left" notifications, including when a client disconnects without `/quit` (closed window, lost connection).
- [ ] The server never crashes because one client misbehaves.
- [ ] Shared data (the list of connected clients) is thread-safe.

### Things to research

`ServerSocket` / `Socket` · `BufferedReader` / `PrintWriter` · threads and `ExecutorService` · `ConcurrentHashMap` · race conditions · `synchronized` · designing a simple text protocol

<details>
<summary>💡 Hint 1</summary>

The server needs one thread per connected client, because reading from a socket **blocks** until a message arrives.
</details>

<details>
<summary>💡 Hint 2</summary>

The client has the same problem in reverse: it has to wait for keyboard input **and** incoming messages at the same time.
How many threads does it need?
</details>

<details>
<summary>💡 Hint 3</summary>

Test with 3+ terminal windows open at once. Then close one abruptly and watch what the server does.
</details>

### Stretch goals

- Chat rooms (`/join <room>`).
- A JavaFX GUI client.
- Save chat history to a file per room.
