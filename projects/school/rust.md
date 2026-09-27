# Rust School Projects

[← Back to the board](../../README.md)

**You'll need:** Rust via [rustup](https://rustup.rs/). Check with `cargo --version`.
**Where it goes:** create each repo inside the [baicoders](https://github.com/baicoders) organization, named `<your-username>-<repo-name>` (for example `juandelacruz-rust-gpa-calculator`), so your teachers can find it.
> 🔒 **Use fake data only.** School systems hold personal information. Never put real students' names, grades, IDs or contact details in your project or your repo. Make up your test data.

**Tip:** Run `cargo fmt`, `cargo clippy` and `cargo test` before every commit. Your teacher will read your code, so keep it tidy.
**Tip:** Every rule in these briefs (grade scales, check digits, weights) is part of the spec. Write them in your README and test them.

---

## 🟢 1. GPA Calculator

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `rust-gpa-calculator`

### The mission

Every semester, students work out their GPA by hand to see if they made the Dean's List. Build a terminal tool that does
it for them, using the school's grading scale.

### Requirements

- [ ] The user enters subjects one at a time: name, units and grade. Type `done` to finish.
- [ ] Default scale is **1.00–5.00, where lower is better**: valid grades are 1.00 to 3.00 in steps of 0.25, plus 5.00 (failed). Anything else is rejected.
- [ ] A `--scale 4` option switches to a 4.0 scale (higher is better). Write its valid grades in your README.
- [ ] Compute the **weighted** GPA (each grade counts by its units) and show it to two decimal places.
- [ ] Show whether the student qualifies for the Dean's List. On the 1.00–5.00 scale the rules are: GPA of 1.75 or better, no grade lower than 2.50, and at least 15 units. Define equivalent rules for the 4.0 scale.
- [ ] If they don't qualify, say **which** rule they missed.
- [ ] Invalid input (letters for units, `0` units, `1.3` as a grade) asks again. No panics.
- [ ] Unit tests for the GPA calculation and each Dean's List rule.

### Example output

```
Subject (or 'done'): Math
Units: 3
Grade: 1.25
Subject (or 'done'): PE
Units: two
  Units must be a whole number above 0. Try again.
Units: 2
Grade: 1.00
...
Subject (or 'done'): done

Subjects: 5    Units: 15
GPA: 1.57
Dean's List: YES 🎉
```

### Things to research

Weighted averages · `std::io::stdin` · `parse::<f64>()` and `parse::<u32>()` · `Result` and `match` · `struct` · `enum` for the two scales · floating-point rounding · `#[test]` · `cargo test`

<details>
<summary>💡 Hint 1</summary>

On one scale "better" means a smaller number and on the other it means a bigger one. Where in your code does that difference matter, and can you keep it in one place?
</details>

<details>
<summary>💡 Hint 2</summary>

Try `0.1 + 0.2 == 0.3` in Rust. What does that tell you about checking whether a typed grade is "exactly" 1.75? Is there a way to store grades that avoids the problem?
</details>

<details>
<summary>💡 Hint 3</summary>

Write the Dean's List test cases before the code: one student who passes, and one who fails each rule by the smallest possible margin.
</details>

### Stretch goals

- Support `INC` and `DRP` marks that don't count toward the GPA but block Dean's List eligibility.
- Load subjects from a CSV file instead of typing them.
- Show which grade would need to improve for the student to qualify.

---

## 🟢 2. Student Number Validator

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `rust-student-number`

### The mission

The registrar keeps finding typos in student numbers. Your school's numbers look like `2026-0457-3`: the enrollment
year, a four-digit sequence, and a **check digit** that catches most typing mistakes. Build a tool that checks them and
explains what's wrong.

### Requirements

- [ ] Format: `YYYY-NNNN-C`, with dashes in exactly those places and digits everywhere else.
- [ ] The year must be between 2000 and the current year. Anything else is an impossible year.
- [ ] The check digit rule: multiply the 8 digits of `YYYYNNNN` by the weights 8, 7, 6, 5, 4, 3, 2, 1 (left to right) and add the results. The check digit is `(10 − (sum mod 10)) mod 10`. So `2026-0457-3` is valid.
- [ ] Validate one number from the command line, e.g. `rust-student-number check 2026-0457-3`.
- [ ] Validate a whole file (one number per line) and print a summary: how many valid, how many invalid.
- [ ] Every invalid number says **why**: bad format, impossible year, or wrong check digit (and what the correct digit would be).
- [ ] `generate 2026-0458` prints the full number with its check digit.
- [ ] Blank lines and extra spaces in the file don't crash the program.
- [ ] Unit tests for each kind of invalid number.

### Example output

```
$ rust-student-number check-file numbers.txt
2026-0457-3   ✅ valid
2026-0457-4   ❌ wrong check digit (expected 3)
1899-0001-5   ❌ impossible year 1899
20260457-3    ❌ bad format: expected YYYY-NNNN-C
2025-1234-7   ✅ valid

2 valid, 3 invalid
```

### Things to research

Check digits · `char::to_digit` · `split` · `enum` for error kinds · `Result<T, E>` · implementing `std::fmt::Display` · `zip` on iterators · reading files with `std::fs::read_to_string`

<details>
<summary>💡 Hint 1</summary>

Could `validate` return `Result<StudentNumber, InvalidReason>`, where `InvalidReason` is an enum? Then printing the reason becomes a `match`.
</details>

<details>
<summary>💡 Hint 2</summary>

Check the problems in order: format first, then year, then check digit. Why does the order matter?
</details>

<details>
<summary>💡 Hint 3</summary>

`validate` and `generate` both need the check digit. How many times should that calculation appear in your code?
</details>

### Stretch goals

- Test your check digit: does it catch every single-digit typo? What about two swapped neighbouring digits? Write a test that tries them all and report the result in your README.
- `generate --next numbers.txt` picks the next unused sequence number for this year.
- Output the file report as CSV.

---

## 🟡 3. Grade Book CLI

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `rust-grade-book`

### The mission

A teacher handles several classes, each with its own quizzes, projects and exams worth different percentages. Build a
command-line grade book that stores everything in a file and ranks the students.

### Requirements

- [ ] `grades add-class "CS 101"` creates a class.
- [ ] `grades add-student "CS 101" "Maria Santos"` adds a student (a made-up one) to a class.
- [ ] `grades add-assessment "CS 101" "Midterm" --weight 30 --max 50` adds an assessment worth 30% of the grade, scored out of 50.
- [ ] `grades score "CS 101" "Midterm" "Maria Santos" 42` records a score.
- [ ] `grades standings "CS 101"` lists students by weighted final percentage, highest first, with their rank.
- [ ] A class's weights can never go over 100. `standings` warns if they don't add up to exactly 100 yet.
- [ ] Scores below 0 or above the maximum are rejected. Missing scores are shown clearly, not silently counted.
- [ ] All data is saved in a JSON file and loaded on every run.
- [ ] Friendly errors for unknown classes, students or assessments. **No `.unwrap()` on anything the user controls.**
- [ ] `grades --help` and `grades <command> --help` explain usage.

### Example output

```
$ grades standings "CS 101"
Weights: 100% ✅

Rank  Student          Quiz 1 (20)  Midterm (30)  Final (50)  Grade
1     Maria Santos     18/20        42/50         88/100      87.2%
2     Pedro Reyes      15/20        45/50         80/100      82.0%
3     Ana Cruz         20/20        —             91/100      —  (missing Midterm)
```

### Things to research

The `clap` crate (derive and subcommands) · `serde` and `serde_json` · `#[derive(Serialize, Deserialize)]` · `HashMap` vs `Vec` · `Result` and the `?` operator · `sort_by` with `f64::total_cmp` · formatting tables with `{:<10}`

<details>
<summary>💡 Hint 1</summary>

Sketch your data before writing code: what does a class contain? What does a score belong to? Once your structs are right, the JSON file comes for free with `serde`.
</details>

<details>
<summary>💡 Hint 2</summary>

Keep your grade logic (weights, percentages, ranking) separate from the code that parses arguments and prints. Which part is easier to unit test?
</details>

<details>
<summary>💡 Hint 3</summary>

What happens if two students have the same final percentage? Decide, and write it in your README.
</details>

### Stretch goals

- `grades export "CS 101"` writes the standings to a CSV file.
- Convert percentages to the 1.00–5.00 scale using a table the teacher can edit.
- Unit tests for weights, missing scores and ranking ties.

---

## 🟡 4. Quiz Engine

**Level:** Intermediate · **Time:** 2–3 days · **Repo name:** `rust-quiz-engine`

### The mission

Teachers want to write a quiz in a plain text file and let students take it in the terminal. Build the engine that
loads the quiz, runs it, scores it and keeps a record of each attempt.

### Requirements

- [ ] Quizzes are written in **TOML**. Design the format and document it in your README with a sample quiz.
- [ ] Three question types: multiple choice, true/false, and identification (typed answers).
- [ ] Identification questions can list accepted alternatives (e.g. `"CPU"`, `"central processing unit"`), and matching ignores case and extra spaces.
- [ ] Questions are shuffled each attempt, and so are multiple-choice options. The correct answer must still be marked correctly after shuffling.
- [ ] An optional time limit for the whole quiz. When time is up, the remaining questions count as unanswered.
- [ ] At the end: the score, then a review of every wrong answer with the correct one.
- [ ] Each attempt is appended to a CSV file per student (date, quiz title, score, time taken). Use made-up student names.
- [ ] A broken quiz file is rejected **before** the quiz starts, with a clear message naming the question and field, e.g. `question 4: 'answer' is "E" but the choices are A–D`.
- [ ] Unit tests for answer matching and quiz validation.

### Example output

```
Question 3 of 10  (4:12 left)
Identification: What part of the computer executes instructions?
> central   processing unit
✅ Correct!

...

Score: 7/10

Review:
  Q2: You said "False". Correct answer: True
  Q6: You said "RAM". Accepted answers: ROM, read-only memory
  Q9: (no answer, time ran out)

Saved to results/maria_santos.csv
```

### Things to research

TOML · the `toml` crate with `serde` · `enum` with `#[serde(tag = "...")]` · the `rand` crate (`shuffle`) · `std::time::Instant` · the `csv` crate · `trim` and `to_lowercase` · `split_whitespace`

<details>
<summary>💡 Hint 1</summary>

A question type is a perfect fit for an `enum` where each variant holds different data. Look at how `serde` can read a tagged enum from TOML.
</details>

<details>
<summary>💡 Hint 2</summary>

If you shuffle the choices, the letter of the right answer changes. Are you storing the correct answer as a letter, a position, or the text itself?
</details>

<details>
<summary>💡 Hint 3</summary>

Reading from the terminal blocks until the student presses Enter, so you can't easily interrupt them mid-question. What's the simplest honest way to enforce a time limit? Save the harder way for a stretch goal.
</details>

### Stretch goals

- A live countdown that ends the quiz the moment time runs out (research threads and channels).
- `quiz stats results/` shows each quiz's average score and its most-missed question.
- Randomly pick N questions from a larger question bank.

---

## 🔴 5. Plagiarism Checker

**Level:** Challenge · **Time:** 4–6 days · **Repo name:** `rust-plagiarism-checker`

### The mission

A teacher has 200 essay or code submissions and a feeling that some are too alike. Build a tool that compares every pair
and points out the ones worth a closer look.

### Requirements

- [ ] Usage: `rust-plagiarism-checker <folder>` compares every file in the folder with every other file.
- [ ] Similarity is based on **n-grams (shingles)** and **Jaccard similarity** (research both). The value of n is a command-line option.
- [ ] Differences in whitespace, capitalization and punctuation don't hide a copy.
- [ ] `--template <file>`: text from the teacher's starter file or instructions is ignored, so shared boilerplate doesn't count as copying.
- [ ] Reports the pairs above a threshold (`--threshold 0.4`), most similar first, with a few matching snippets from each pair.
- [ ] Empty, tiny and unreadable files are reported and skipped, not fatal.
- [ ] Fast on 200+ files. Measure it with a release build and put the timing in your README.
- [ ] Unit tests: identical files score 1.0, unrelated files score near 0, and reformatted copies still score high.
- [ ] Your README includes an **ethics note**: this tool flags pairs for human review. It does not prove anyone cheated.
- [ ] Test only with submissions you wrote or generated yourself. Never commit real student work.

### Example output

```
Compared 212 files (22,366 pairs) in 0.84s

Similarity  Files
0.91        essay_017.txt  ↔  essay_142.txt
            "the industrial revolution changed the way people worked"
            "factories drew families away from farms and into cities"
0.63        essay_033.txt  ↔  essay_098.txt
            ...

2 pairs above 0.40. Please review them yourself. A high score is not proof.
```

### Things to research

Shingling · Jaccard similarity · `HashSet` and set intersection · hashing with `std::hash::Hasher` · text normalization · `std::fs::read_dir` · `std::time::Instant` · `cargo build --release` · the `rayon` crate

<details>
<summary>💡 Hint 1</summary>

200 files means about 20,000 pairs. If you rebuild a file's shingles every time it appears in a pair, you do the same work hundreds of times. What could you compute just once per file?
</details>

<details>
<summary>💡 Hint 2</summary>

Comparing sets of strings is slow. What if each shingle were turned into a number first?
</details>

<details>
<summary>💡 Hint 3</summary>

Write a small generator that makes fake submissions, including a few "copies" with changed spacing and a couple of swapped words. Now you have test data where you already know the right answer.
</details>

### Stretch goals

- Parallelize the pair comparisons with `rayon` and compare the timing.
- An HTML report that highlights the matching passages side by side.
- For code: ignore comments and rename variables consistently, so renaming doesn't hide a copy.
- Research MinHash to handle thousands of files.

---

## 🔴 6. Library Search Engine

**Level:** Challenge · **Time:** 5–7 days · **Repo name:** `rust-library-search`

### The mission

The school library's catalog search only finds exact titles. Build a real search engine for it: rank results by
relevance, forgive small typos, and answer instantly even with thousands of books.

### Requirements

- [ ] Load a catalog from CSV or JSON with at least 5,000 books: title, author, subject, year and a short description. Generate fake data or use an openly licensed dataset.
- [ ] Full-text search across title, author and description, with results ranked by **TF-IDF** (research it).
- [ ] Matches in the title count more than matches in the description.
- [ ] Small typos still find results: `pyhton` finds `python`. Research **edit distance** (Levenshtein).
- [ ] Filters: `--subject science`, `--year 2015..2020`.
- [ ] The index is built once, saved to disk, and reloaded on later runs. It rebuilds when the catalog changes.
- [ ] Split into a **library** crate (indexing and search) and a **binary** (the CLI).
- [ ] Bad catalog rows are reported with their row number and skipped, not fatal.
- [ ] Benchmarks for indexing time and search time. Put the results in your README.
- [ ] Tests for ranking order, typo matching and filters.

### Example output

```
$ rust-library-search "pyhton programing"
Did you mean: python programming
Found 38 results in 1.2 ms

1. Introduction to Python Programming    Reyes, L.     Computing   2019   (score 8.41)
2. Python for Young Scientists           Tan, M.       Science     2021   (score 6.02)
3. Learning to Code with Python          Garcia, J.    Computing   2016   (score 5.77)
```

### Things to research

Inverted index · TF-IDF · tokenization · stop words · Levenshtein distance · `HashMap<String, Vec<...>>` · `serde` with `bincode` · library vs binary crates (`lib.rs` + `main.rs`) · the `criterion` crate · `cargo bench`

<details>
<summary>💡 Hint 1</summary>

An inverted index maps each word to the books that contain it. Searching then means looking up a few words, not scanning every book.
</details>

<details>
<summary>💡 Hint 2</summary>

The text you index and the query you search must be cleaned up in exactly the same way (case, punctuation, and so on). What happens if they aren't?
</details>

<details>
<summary>💡 Hint 3</summary>

Edit distance is expensive. Do you need to compare the query against every book, or only against the list of distinct words in your index? Can you skip words whose length is too different to be a small typo?
</details>

### Stretch goals

- Phrase search with quotes: `"solar system"`.
- Autocomplete suggestions as a separate command.
- A tiny web page or HTTP API on top of your library crate.
- Compare your ranking with BM25 (research it).
