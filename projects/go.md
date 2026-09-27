# Go Projects

[← Back to the board](../README.md)

**You'll need:** [Go](https://go.dev/dl/) 1.21 or newer. Check with `go version`.
**Tip:** start every project with `go mod init github.com/<your-username>/<repo-name>`. Run `gofmt` (or let your editor do it).
Go developers expect formatted code.

---

## 🟢 1. Word Counter

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `go-word-counter`

### The mission

Build your own version of the classic `wc` command: count the lines, words and characters in a text file.

### Requirements

- [ ] Usage: `go run . myfile.txt`
- [ ] Prints the number of lines, words and characters.
- [ ] Prints the **top 10 most common words** (case-insensitive, ignoring punctuation).
- [ ] A helpful error if the file doesn't exist or no file is given.
- [ ] Works on large files (test with a book from Project Gutenberg).

### Example output

```
$ go run . alice.txt
Lines:      3,761
Words:     29,564
Characters: 163,780

Top words:
  the     1,818
  and       940
  to        809
  ...
```

### Things to research

`os.Args` · `os.Open` · `bufio.Scanner` · `strings.Fields` · `strings.ToLower` · maps · `sort.Slice` · error handling with `if err != nil`

<details>
<summary>💡 Hint 1</summary>

Maps in Go have no order. To get the "top 10," you'll need to move the data into something that **can** be sorted.
</details>

<details>
<summary>💡 Hint 2</summary>

Is "Hello," the same word as "hello"? Decide how to clean words before counting them.
</details>

### Stretch goals

- Flags: `-l`, `-w`, `-c` to show only lines, words or characters (research the `flag` package).
- Read from standard input when no file is given, so `cat file.txt | go run .` works.

---

## 🟢 2. Dice Roller

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `go-dice-roller`

### The mission

Tabletop gamers write dice rolls like `3d6+2`, meaning "roll three six-sided dice and add 2." Build a CLI that understands this notation.

### Requirements

- [ ] Usage: `go run . 3d6+2` prints each die result and the total.
- [ ] Supports `NdS`, `NdS+M` and `NdS-M`. `d20` on its own means `1d20`.
- [ ] Multiple rolls in one command: `go run . 1d20 2d8+3`.
- [ ] Rejects nonsense (`0d6`, `3d1`, `abc`, `1000000d6`) with a clear error message.
- [ ] Parsing lives in its own function that returns a value **and an error**.
- [ ] At least 5 unit tests for the parser.

### Example output

```
$ go run . 3d6+2
3d6+2: [4 1 6] + 2 = 13
```

### Things to research

`os.Args` · `strings.Split` / `strings.Cut` · `strconv.Atoi` · `math/rand` · returning `(value, error)` · `errors.New` / `fmt.Errorf` · `go test` · table-driven tests

<details>
<summary>💡 Hint 1</summary>

Go functions often return two things: a result and an `error`. Design `parseRoll(s string) (Roll, error)` first, and write tests for it **before** you roll any dice.
</details>

<details>
<summary>💡 Hint 2</summary>

Look up **table-driven tests** in Go. They let you test 20 inputs with almost no extra code.
</details>

### Stretch goals

- Advantage/disadvantage: `2d20kh1` (keep highest 1).
- `--stats` flag that rolls 10,000 times and prints the distribution as an ASCII histogram.

---

## 🟡 3. URL Shortener

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `go-url-shortener`

### The mission

Build a web service like bit.ly: send it a long URL, get back a short code, and visiting the short code redirects you.

### Requirements

- [ ] `POST /shorten` with a JSON body `{"url": "https://..."}` returns `{"short": "abc123"}`.
- [ ] `GET /abc123` **redirects** to the original URL.
- [ ] Unknown codes return a 404.
- [ ] Invalid URLs are rejected with a 400.
- [ ] `GET /stats/abc123` returns how many times the link was visited.
- [ ] Uses only the standard library (`net/http`) for the server.
- [ ] Safe under concurrent requests.

### Things to research

`net/http` · `http.HandleFunc` · `encoding/json` · `http.Redirect` and redirect status codes · `net/url` · `sync.Mutex` · generating random strings · `curl` for testing

<details>
<summary>💡 Hint 1</summary>

Go's HTTP server handles each request in its own goroutine. Two requests writing to the same map at the same time can crash
your program. Look up `sync.Mutex`.
</details>

<details>
<summary>💡 Hint 2</summary>

Test your API from the terminal with `curl`, or with a tool like Postman or Bruno. You don't need a front end.
</details>

<details>
<summary>💡 Hint 3</summary>

What happens if two URLs randomly get the same short code? How would you prevent it?
</details>

### Stretch goals

- Persist links to a file or SQLite so they survive restarts.
- Custom short codes (`{"url": "...", "custom": "my-link"}`).
- Write tests with `net/http/httptest`.

---

## 🟡 4. Duplicate File Finder

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `go-duplicate-finder`

### The mission

Find duplicate files hiding on your disk (the same photo saved three times, for example), even when they have different names.

### Requirements

- [ ] Usage: `go run . <folder>` scans the folder and **all subfolders**.
- [ ] Two files are duplicates if their **contents** are identical, whatever their names or dates.
- [ ] Output: each group of duplicates, the file size, and how much space could be saved in total.
- [ ] Only **reports**. The tool must never delete anything.
- [ ] Efficient: don't hash a file if no other file has the same size.
- [ ] Handles unreadable files and folders (permission errors) by reporting and skipping them.
- [ ] `--min-size` flag to ignore small files.

### Example output

```
3 copies, 2.4 MB each:
  photos/beach.jpg
  backup/IMG_2041.jpg
  old/beach (1).jpg

Total wasted space: 18.7 MB in 6 groups
```

### Things to research

`filepath.WalkDir` · `os.Stat` / `fs.FileInfo` · `crypto/sha256` · `io.Copy` into a hash · maps with slice values · `flag` package · formatting byte sizes

<details>
<summary>💡 Hint 1</summary>

Hashing every file is slow. Files with a unique size **can't** have a duplicate. Group by size first, then only hash within groups.
</details>

<details>
<summary>💡 Hint 2</summary>

Don't read a whole 4 GB video into memory to hash it. A hash can be fed from a stream: look up using `io.Copy` with a hasher.
</details>

### Stretch goals

- Hash files concurrently with goroutines, and measure the speed-up.
- `--json` output.
- An interactive mode that asks which copy to keep, with a dry-run first. (Test it on dummy files only!)

---

## 🔴 5. Site Status Checker

**Level:** Challenge · **Time:** 2–4 days · **Repo name:** `go-status-checker`

### The mission

Build a tool that checks whether a list of websites is up, **all at the same time**, and reports the results.
This is what Go was made for.

### Requirements

- [ ] Reads a list of URLs from a text file (one per line).
- [ ] Checks every URL **concurrently** using goroutines.
- [ ] Reports each site's status: ✅ up (with status code and response time) or ❌ down (with the reason).
- [ ] A timeout per request (e.g. 5 seconds). One slow site must not block the others.
- [ ] A configurable maximum number of simultaneous checks (a worker pool), so 1,000 URLs don't mean 1,000 connections at once.
- [ ] Results are printed in the **same order** as the input file, even though they finish in a different order.
- [ ] A `--watch` mode that re-checks every N seconds and only prints **changes** (site went down / came back up).

### Things to research

Goroutines · channels · `sync.WaitGroup` · worker pool pattern · `context.WithTimeout` · `http.Client` with `Timeout` · `time.Ticker` · `flag` package

<details>
<summary>💡 Hint 1</summary>

First make it work **sequentially** (one URL at a time). Measure how long it takes. Then make it concurrent and compare. That speed-up is the whole point.
</details>

<details>
<summary>💡 Hint 2</summary>

If each result carries the **index** of its URL, you can put results back in order no matter when they arrive.
</details>

<details>
<summary>💡 Hint 3</summary>

A worker pool is N goroutines all reading jobs from the same channel. Search for "Go worker pool pattern."
</details>

### Stretch goals

- Output as JSON for other tools to use.
- A tiny web dashboard showing current status.
- Send a notification (e.g. to a Discord webhook) when a site goes down. Keep the webhook URL out of your repo!

---

## 🔴 6. Static Site Generator

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `go-static-site-generator`

### The mission

Tools like Hugo (which is written in Go!) turn a folder of Markdown files into a complete website. Build your own small version.

### Requirements

- [ ] `build` command: reads `content/*.md` and writes `.html` files into `public/`.
- [ ] Each Markdown file starts with **front matter** (title, date, tags, draft) that your tool reads.
- [ ] Pages are rendered through **HTML templates** with a shared layout (header, footer, CSS).
- [ ] Generates an index page listing all posts, newest first. Drafts are skipped.
- [ ] Generates one page per tag listing its posts.
- [ ] Copies a `static/` folder (CSS, images) into the output unchanged.
- [ ] `serve` command: serves `public/` locally for previewing.
- [ ] Include an example site in the repo so people can try it immediately.

### Things to research

`html/template` · template inheritance with `{{block}}` / `{{define}}` · a Markdown library (e.g. goldmark) · YAML front matter · `os.MkdirAll` · `http.FileServer` · subcommands with `flag.NewFlagSet`

<details>
<summary>💡 Hint 1</summary>

Split the process into stages: **read** all files → **parse** into structs → **render** with templates → **write** files.
Each stage can be tested on its own.
</details>

<details>
<summary>💡 Hint 2</summary>

Why use `html/template` rather than `text/template`? Look up what it does automatically that protects you.
</details>

<details>
<summary>💡 Hint 3</summary>

Should `build` start by deleting the old `public/` folder? What happens to a page you've removed from `content/` if it doesn't?
</details>

### Stretch goals

- `--watch` mode that rebuilds when files change.
- Generate an RSS feed and a `sitemap.xml`.
- Use it to build your portfolio or blog, and deploy that with GitHub Pages.
