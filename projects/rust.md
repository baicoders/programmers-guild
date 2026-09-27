# Rust Projects

[← Back to the board](../README.md)

**You'll need:** Rust via [rustup](https://rustup.rs/). Check with `cargo --version`.
**Tip:** Rust's compiler errors are famously helpful, so read them fully and follow their suggestions. Run `cargo fmt` and
`cargo clippy` before every commit. `cargo new` already gives you a `.gitignore`.
**Reference:** [The Rust Book](https://doc.rust-lang.org/book/) is free and excellent. Use it to learn concepts, but don't copy its example projects.

---

## 🟢 1. Rock Paper Scissors

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `rust-rock-paper-scissors`

### The mission

Play rock-paper-scissors against the computer in the terminal.

### Requirements

- [ ] The player types `rock`, `paper` or `scissors` (also accept `r`, `p`, `s`, in any capitalization).
- [ ] The computer picks randomly.
- [ ] Show both choices and who won the round.
- [ ] Keep score across rounds. Type `quit` to exit and see the final score.
- [ ] Use an **`enum`** for the moves and a **`match`** to decide the winner.
- [ ] Invalid input asks again. No panics.

### Things to research

`std::io::stdin` · `String` vs `&str` · `enum` · `match` · the `rand` crate · adding dependencies in `Cargo.toml` · `trim()` · `to_lowercase()`

<details>
<summary>💡 Hint 1</summary>

Could you turn a `&str` into your enum with a function that returns `Option<Move>`? What should it return for `"banana"`?
</details>

<details>
<summary>💡 Hint 2</summary>

`read_line` keeps the newline character at the end of the input. That's why `"rock" != input`.
</details>

### Stretch goals

- Best-of-5 mode.
- Add "lizard" and "Spock."

---

## 🟢 2. Caesar Cipher

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `rust-caesar-cipher`

### The mission

Julius Caesar hid his messages by shifting every letter a fixed number of places: with a shift of 3, `HELLO` becomes `KHOOR`.
Build a tool that encrypts, decrypts and **cracks** these messages.

### Requirements

- [ ] Encrypt: take a message and a shift (1–25) and print the result.
- [ ] Decrypt: reverse it.
- [ ] Uppercase stays uppercase and lowercase stays lowercase. Spaces, digits and punctuation are left untouched.
- [ ] Shifting past `z` wraps around to `a`.
- [ ] **Crack** mode: given only the encrypted text, print all 25 possible decryptions.
- [ ] Unit tests for encrypt, decrypt and wrap-around.

### Things to research

`char` methods (`is_ascii_lowercase`, etc.) · `u8` and casting with `as` · iterators: `.chars()`, `.map()`, `.collect::<String>()` · `%` for wrap-around · `#[test]` · `cargo test`

<details>
<summary>💡 Hint 1</summary>

Letters are numbers underneath. If `'a'` is 97, what's the letter's position in the alphabet? Shift that position, wrap it with `%`, and turn it back.
</details>

<details>
<summary>💡 Hint 2</summary>

Decrypting with shift 3 is the same as encrypting with shift…?
</details>

### Stretch goals

- **Auto-crack:** guess the right shift automatically using English letter frequencies.
- Read input from a file or standard input.
- The Vigenère cipher, which uses a keyword instead of a single shift.

---

## 🟡 3. To-Do CLI

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `rust-todo-cli`

### The mission

A command-line to-do manager that saves tasks to a JSON file. It's driven by arguments, like real CLI tools such as `git`.

### Requirements

- [ ] `todo add "Buy milk"`: adds a task.
- [ ] `todo list`: shows tasks with an ID and a done/not-done marker.
- [ ] `todo done 2`: marks task 2 as done.
- [ ] `todo remove 2`: deletes task 2.
- [ ] `todo clear`: removes all completed tasks.
- [ ] Tasks are saved to a JSON file and loaded on every run.
- [ ] Friendly error messages for bad IDs or missing arguments. **No `.unwrap()` on anything the user controls.**
- [ ] `todo --help` explains usage.

### Things to research

`std::env::args` or the `clap` crate · `serde` and `serde_json` · `struct` and `#[derive]` · `Result` and the `?` operator · `Vec` · `std::fs`

<details>
<summary>💡 Hint 1</summary>

`clap` with its derive feature makes argument parsing (and `--help`) almost free. Read its documentation and examples.
</details>

<details>
<summary>💡 Hint 2</summary>

If `main` returns a `Result`, you can use `?` all the way down instead of `.unwrap()` everywhere.
</details>

<details>
<summary>💡 Hint 3</summary>

What should happen on the very first run, when the JSON file doesn't exist yet?
</details>

### Stretch goals

- Priorities and due dates, with `todo list --sort priority`.
- Store the file in the user's proper data directory (research the `dirs` crate).
- Unit tests for your task logic.

---

## 🟡 4. Directory Tree

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `rust-tree`

### The mission

Build your own version of the `tree` command, which prints a folder and everything inside it as a tree.

### Requirements

- [ ] Usage: `rust-tree [path]` (defaults to the current folder).
- [ ] Prints the structure with tree branches, sorted alphabetically, folders first.
- [ ] A summary at the end: number of folders and files.
- [ ] `--depth N` limits how deep it goes.
- [ ] `--all` includes hidden files (hidden by default).
- [ ] `--size` shows file sizes in human-readable form (`4.2 KB`).
- [ ] Unreadable folders show an error marker in the tree instead of crashing.
- [ ] Uses **recursion**.

### Example output

```
my-project
├── src
│   ├── main.rs
│   └── utils.rs
├── Cargo.toml
└── README.md

1 directory, 4 files
```

### Things to research

`std::fs::read_dir` · `std::path::Path` / `PathBuf` · recursion · `Result` handling · sorting with `sort_by` · the `clap` crate · box-drawing characters

<details>
<summary>💡 Hint 1</summary>

The tricky part is the prefix: `│   ` vs `    `. It depends on whether each **parent** was the last item in its folder.
What information does your recursive function need to receive?
</details>

<details>
<summary>💡 Hint 2</summary>

Is the last child drawn with `├──` or `└──`? You only know that if you collect and sort the entries before printing.
</details>

### Stretch goals

- Respect `.gitignore` files (look at the `ignore` crate).
- Colored output: folders in blue, executables in green.
- `--json` output.

---

## 🔴 5. Log Analyzer

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `rust-log-analyzer`

### The mission

Servers produce huge log files. Build a fast command-line tool that reads a web server access log and produces a report.

### Requirements

- [ ] Parses lines in the **Common Log Format** (research it). You'll need to find or generate a sample log file.
- [ ] Reports:
  - total requests
  - requests per HTTP status code (200, 404, 500, …)
  - top 10 most requested paths
  - top 10 IP addresses
  - requests per hour
- [ ] Malformed lines are **counted and skipped**, not fatal.
- [ ] Handles files larger than your RAM by streaming line by line, not loading everything.
- [ ] Filters: `--status 404`, `--from <time>`, `--to <time>`.
- [ ] Code organized into modules (e.g. `parser`, `stats`, `cli`).
- [ ] Unit tests for the parser, including malformed lines.

### Things to research

Common Log Format · `BufReader` · `lines()` · the `regex` crate (or manual parsing) · `HashMap` · modules and `mod` · the `chrono` crate · `#[cfg(test)]` · `cargo build --release`

<details>
<summary>💡 Hint 1</summary>

Write a tiny script (in any language!) that **generates** a fake log file with a million lines. Now you have test data and a benchmark.
</details>

<details>
<summary>💡 Hint 2</summary>

Parse each line into a `struct` first. All of your stats then work with structs, not raw strings.
</details>

<details>
<summary>💡 Hint 3</summary>

Compare `cargo run` with `cargo run --release` on your big file. Put the difference in your README.
</details>

### Stretch goals

- Output as JSON or CSV.
- Process the file in parallel (research the `rayon` crate).
- Detect suspicious activity (e.g. one IP making hundreds of requests per minute).

---

## 🔴 6. Key-Value Store

**Level:** Challenge · **Time:** 5–8 days · **Repo name:** `rust-kv-store`

### The mission

Build a tiny database. It stores key-value pairs on disk, survives crashes, and keeps its file from growing forever.
Databases like Bitcask work on the same idea.

### Requirements

- [ ] Commands: `kv set <key> <value>`, `kv get <key>`, `kv rm <key>`, `kv list`.
- [ ] Data is stored in an **append-only log file**: every change is written to the end of the file, never edited in place.
- [ ] On startup, the store rebuilds its in-memory index by reading the log.
- [ ] `get` doesn't scan the whole file. It uses the index to jump straight to the right position.
- [ ] **Compaction:** when the log has too much stale data (overwritten or removed keys), rewrite it with only current values.
- [ ] A half-written last entry (simulating a crash) is detected and ignored, not fatal.
- [ ] Custom error type for the library, using `Result` everywhere and no panics on bad input.
- [ ] Split into a **library** crate (the store) and a **binary** (the CLI).
- [ ] Tests for: persistence across restarts, overwrite, remove, compaction.

### Things to research

Append-only logs · `serde` serialization (JSON lines or `bincode`) · `File::seek` / `SeekFrom` · `BufWriter` · `HashMap` as an index · library vs binary crates (`lib.rs` + `main.rs`) · custom error types (`thiserror`) · the `tempfile` crate for tests

<details>
<summary>💡 Hint 1</summary>

Your index maps each key to **where** its latest value lives in the file (a byte offset), not to the value itself.
</details>

<details>
<summary>💡 Hint 2</summary>

`rm` can't delete from an append-only file. What could you append instead to record that a key was removed?
</details>

<details>
<summary>💡 Hint 3</summary>

Tests that write files should each get their own temporary folder, or they'll interfere with each other when `cargo test` runs them in parallel.
</details>

### Stretch goals

- A TCP server mode so other programs can use your store over the network.
- Benchmark it with `criterion` and compare it against using a plain JSON file.
- Thread-safe access from multiple threads.
