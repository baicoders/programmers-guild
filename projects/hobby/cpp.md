# C++ Hobby Projects

[← Back to the board](../../README.md)

**You'll need:** a C++ compiler. Options: **g++** (via MinGW-w64 or MSYS2 on Windows, or built in on Linux), **clang++** (macOS
via Xcode Command Line Tools), or **MSVC** (Visual Studio). Check with `g++ --version` or `clang++ --version`.
**Tip:** compile with warnings on (`-Wall -Wextra`) and treat every warning as a bug. Don't commit compiled binaries (`.exe`, `a.out`, `.o`).
**Where it goes:** your **personal** GitHub account (`github.com/<your-username>/<repo-name>`). These projects are yours to keep and show off.

> 🚀 **Deploy it (required):** publish each project as a **GitHub Release** with a compiled program for at least one operating system attached, plus build instructions for the others. Put the release link in your README.

---

## 🟢 1. Calculator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `cpp-calculator`

### The mission

A console calculator that keeps running until the user wants to stop.

### Requirements

- [ ] Supports `+`, `-`, `*`, `/`, `%` and power.
- [ ] Input format: `number operator number`, e.g. `12 * 4`.
- [ ] Division by zero shows an error instead of crashing or printing `inf`.
- [ ] Invalid input (letters, unknown operators) shows an error and lets the user try again.
- [ ] Type `q` to quit.
- [ ] Each operation is its own **function**.

### Example session

```
> 12 * 4
= 48
> 10 / 0
Error: division by zero
> abc
Error: invalid input
> q
Bye!
```

### Things to research

`std::cin` · `std::cin.fail()` / `std::cin.clear()` / `std::cin.ignore()` · functions · `switch` · `<cmath>` · `%` with integers vs. `fmod`

<details>
<summary>💡 Hint 1</summary>

When `std::cin >> number` gets letters, the stream enters a "fail state" and **every** following read also fails.
That's why your program loops forever. Look up how to reset it.
</details>

<details>
<summary>💡 Hint 2</summary>

An alternative: read the whole line as a string with `std::getline`, then parse it with `std::istringstream`.
</details>

### Stretch goals

- Keep a history and show it with the command `h`.
- Support `ans` to reuse the last result.

---

## 🟢 2. ATM Simulator

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `cpp-atm-simulator`

### The mission

Simulate a bank ATM in the console: PIN entry, balance, withdrawals and deposits.

### Requirements

- [ ] The user must enter a 4-digit PIN. After 3 wrong attempts the card is "locked" and the program exits.
- [ ] Menu: Check balance · Deposit · Withdraw · Change PIN · Exit.
- [ ] Withdrawals only in multiples of 20, never more than the balance, and at most 500 per session.
- [ ] Deposits must be positive.
- [ ] Changing the PIN asks for the old PIN, then the new one twice.
- [ ] A receipt of all transactions in the session is printed on exit.
- [ ] Money is printed with 2 decimal places.

### Things to research

`do-while` loops · `switch` · `std::vector` · `<iomanip>` (`std::fixed`, `std::setprecision`) · functions and pass-by-reference · input validation with `std::cin`

<details>
<summary>💡 Hint 1</summary>

If a function needs to **change** the balance, passing it normally won't work. Look up pass-by-reference (`&`).
</details>

<details>
<summary>💡 Hint 2</summary>

Store each transaction (type + amount) as you go, and the receipt is just a loop at the end.
</details>

### Stretch goals

- Multiple accounts loaded from a file, chosen by card number.
- Save balance and PIN changes back to the file.

---

## 🟡 3. Student Records

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `cpp-student-records`

### The mission

A console app that manages student records and saves them to a file.

### Requirements

- [ ] A `Student` class: ID, name, and a list of grades.
- [ ] Add a student, add grades to a student, remove a student.
- [ ] List all students with their average grade.
- [ ] Search by ID or by name.
- [ ] Sort the list by name or by average.
- [ ] Save all records to a text file on exit and load them on start.
- [ ] Split the code across files: headers (`.h` / `.hpp`) and source (`.cpp`).
- [ ] No raw `new` / `delete`. Use standard containers.

### Things to research

Classes · `std::vector` · `std::string` · header files and include guards · `<fstream>` · `std::sort` with a lambda · `const` references · compiling multiple files

<details>
<summary>💡 Hint 1</summary>

Once you have multiple `.cpp` files, compiling gets tedious. Research **Makefiles** or **CMake**. Learning one of them is part of this project.
</details>

<details>
<summary>💡 Hint 2</summary>

Choose your file format before writing save/load code. How will you store a student with a variable number of grades on one line?
</details>

<details>
<summary>💡 Hint 3</summary>

Why pass `const Student&` into a function instead of `Student`? Find out what gets copied.
</details>

### Stretch goals

- Use `std::map` or `std::unordered_map` for fast lookup by ID.
- Show a grade distribution as an ASCII bar chart.

---

## 🟡 4. Matrix Calculator

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `cpp-matrix-calculator`

### The mission

Write your own `Matrix` class that feels like a built-in type, so `C = A * B + A` just works.

### Requirements

- [ ] A `Matrix` class that holds any number of rows and columns.
- [ ] **Operator overloading:** `+`, `-`, `*` (matrix × matrix and matrix × number), `==`, and `<<` for printing.
- [ ] Transpose, determinant (for square matrices) and an identity-matrix factory.
- [ ] Mismatched sizes (e.g. adding 2×3 to 3×2) throw an **exception** with a clear message.
- [ ] A console menu to enter matrices and run operations.
- [ ] A separate test program (or test file) that checks results against known answers.
- [ ] Split into `Matrix.h` and `Matrix.cpp`.

### Things to research

Operator overloading · `friend` functions · `std::vector<std::vector<double>>` vs a flat `std::vector` · exceptions (`throw`, `try`, `catch`, `std::invalid_argument`) · `const` member functions · recursion (determinant)

<details>
<summary>💡 Hint 1</summary>

Why does `operator<<` usually have to be a free (`friend`) function instead of a member function? Work out what's on the left side of `std::cout << m`.
</details>

<details>
<summary>💡 Hint 2</summary>

Comparing `double` values with `==` is dangerous: `0.1 + 0.2 == 0.3` is false. How should your `==` compare two matrices?
</details>

### Stretch goals

- Inverse of a matrix.
- Make it a **template** so it works with `int`, `float` and `double`.
- Solve a system of linear equations.

---

## 🔴 5. Text Adventure

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `cpp-text-adventure`

### The mission

Build a classic text adventure game. The player explores rooms, picks up items, solves a puzzle and escapes.
Think *Zork*, but yours.

### Requirements

- [ ] At least **6 connected rooms**, each with a description.
- [ ] Commands: `go <direction>`, `look`, `take <item>`, `drop <item>`, `inventory`, `use <item>`, `help`, `quit`.
- [ ] At least one locked door or obstacle that needs a specific item.
- [ ] A win condition and at least one way to lose.
- [ ] Unknown commands get a helpful response.
- [ ] Rooms and items are defined in **data** (a file, or at least one clearly separated place), not scattered through `if` statements.
- [ ] Built with **CMake**.

### Things to research

CMake basics · `std::map` · `std::unordered_map` · classes and composition · `std::unique_ptr` / `std::shared_ptr` · string tokenizing · the game-loop pattern

<details>
<summary>💡 Hint 1</summary>

Every text adventure is the same loop: **read** a command → **parse** it into verb + noun → **update** the game state → **print** the result.
</details>

<details>
<summary>💡 Hint 2</summary>

How does a room "know" which room is to its north? You're building a **graph**. Research how to represent one.
</details>

<details>
<summary>💡 Hint 3</summary>

If you load rooms from a text file, you can design new levels without recompiling.
</details>

### Stretch goals

- Save and load game progress.
- NPCs you can talk to.
- A move counter and scoring.

---

## 🔴 6. Game of Life

**Level:** Challenge · **Time:** 3–6 days · **Repo name:** `cpp-game-of-life`

### The mission

Implement **Conway's Game of Life**, a grid of cells that live, die and multiply according to four simple rules, and watch
complex patterns emerge. Then make it fast.

### Requirements

- [ ] A grid of at least 100×100 cells, where each cell is alive or dead.
- [ ] Correctly applies the four rules of the Game of Life every generation (research them).
- [ ] Edges **wrap around** (the grid is a torus).
- [ ] Load starting patterns from files in a standard format (plaintext `.cells` or RLE), and include at least 3 famous patterns in the repo.
- [ ] Controls: play, pause, step one generation, speed up / slow down, clear, random fill.
- [ ] Shows the generation number and live-cell count.
- [ ] Rendering, with either:
  - the terminal (redraw in place, without scrolling), **or**
  - a graphics library such as **raylib** or **SFML**, which is recommended and lets the user click cells to toggle them.
- [ ] Built with **CMake**.
- [ ] Measure how long one generation takes on a 1000×1000 grid and put the number in your README.

### Things to research

Conway's Game of Life rules · RLE pattern format · double buffering · raylib or SFML getting-started guides · CMake `FetchContent` · `<chrono>` for timing · modulo arithmetic for wrap-around · release vs debug builds

<details>
<summary>💡 Hint 1</summary>

If you update cells in place, cells later in the loop see the **new** state of their neighbors instead of the old one, and
everything breaks. You need two grids.
</details>

<details>
<summary>💡 Hint 2</summary>

Wrap-around neighbors: for a cell at column 0, the "left" neighbor is the last column. What does `(x - 1 + width) % width` give you?
</details>

<details>
<summary>💡 Hint 3</summary>

Time your code in a **Release** build. Debug builds of C++ can be 10× slower, and you'll optimize the wrong thing.
</details>

### Stretch goals

- Zoom and pan across a huge grid.
- Only process "active" regions to handle enormous grids.
- Different rule sets (look up "Life-like cellular automata" such as HighLife).
