# C# Hobby Projects

[← Back to the board](../../README.md)

**You'll need:** the [.NET SDK](https://dotnet.microsoft.com/download) (8 or newer). Check with `dotnet --version`.
**Editor:** Visual Studio Community, VS Code with the C# Dev Kit, or JetBrains Rider.
**Tip:** learn the `dotnet` command line (`dotnet new`, `dotnet run`, `dotnet test`). Don't commit the `bin/` and `obj/` folders.
Search for "dotnet gitignore".
**Where it goes:** your **personal** GitHub account (`github.com/<your-username>/<repo-name>`). These projects are yours to keep and show off.

> 🚀 **Deploy it (required):** console and desktop apps are published as a **GitHub Release** with builds from `dotnet publish` attached. The Notes API must be **live** on a free hosting service that supports .NET. Put the link in your README.

---

## 🟢 1. Unit Converter

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `csharp-unit-converter`

### The mission

A console app that converts between common units, for travellers who can't remember what 30°C is in Fahrenheit.

### Requirements

- [ ] A menu to pick a category: Length · Weight · Temperature.
- [ ] Each category supports at least 3 units (e.g. meters, feet, inches).
- [ ] The user picks "from" and "to" units and enters a value.
- [ ] Results are rounded to 2 decimal places.
- [ ] Invalid input never crashes the program.
- [ ] Loop back to the menu until the user chooses Exit.

### Things to research

`Console.ReadLine` · `double.TryParse` · `switch` expressions · methods · string interpolation · format strings (`{value:F2}`)

<details>
<summary>💡 Hint 1</summary>

Look at `TryParse` versus `Parse`. One throws an exception on bad input and the other doesn't. Which do you want here?
</details>

<details>
<summary>💡 Hint 2</summary>

For length and weight, converting everything to one "base unit" first (e.g. meters) means you don't need a formula for every
possible pair. Why doesn't that trick work as neatly for temperature?
</details>

### Stretch goals

- Add a Currency category with rates loaded from a file.
- Keep a history of the last 10 conversions.

---

## 🟢 2. Hangman

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `csharp-hangman`

### The mission

The classic word-guessing game in the console: guess letters before the hangman is complete.

### Requirements

- [ ] A random secret word is chosen from a list of at least 30 words, loaded from a **text file**.
- [ ] Show the word as underscores, revealing correctly guessed letters: `_ A _ _ M A _`.
- [ ] The player guesses one letter at a time, case-insensitive.
- [ ] Show the letters already guessed. Repeating a guess doesn't cost a life.
- [ ] 6 wrong guesses and the player loses. Draw the hangman in ASCII art as lives are lost.
- [ ] Win or lose, reveal the word and offer to play again.

### Things to research

`File.ReadAllLines` · `Random` · `char` · `HashSet<char>` · `StringBuilder` · `Console.Clear` · verbatim strings (`@"..."`) for ASCII art · copying files to the output directory

<details>
<summary>💡 Hint 1</summary>

Your program can't find `words.txt` even though it's right there? The program runs from `bin/Debug/...`, not your project
folder. Look up how to make the build copy the file.
</details>

<details>
<summary>💡 Hint 2</summary>

A `HashSet` makes "have I already guessed this letter?" a one-liner.
</details>

### Stretch goals

- Categories (animals, countries, programming) chosen at the start.
- A hint command that reveals one letter but costs a life.

---

## 🟡 3. Inventory Manager

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `csharp-inventory-manager`

### The mission

A small shop needs to track its stock. Build a console app that manages products and warns when stock runs low.

### Requirements

- [ ] A `Product` class: ID, name, category, price, quantity, low-stock threshold.
- [ ] Add, update, remove and list products.
- [ ] Search by name (partial, case-insensitive) and filter by category.
- [ ] "Sell" and "restock" actions that change quantity. Quantity can never go below zero.
- [ ] A low-stock report listing everything at or below its threshold.
- [ ] Total inventory value (price × quantity, summed).
- [ ] Save to and load from a JSON file.
- [ ] Use **LINQ** for searching, filtering and reports.

### Things to research

Classes and properties · `List<T>` · LINQ (`Where`, `OrderBy`, `Sum`, `GroupBy`) · `System.Text.Json` · `decimal` vs `double` · exceptions

<details>
<summary>💡 Hint 1</summary>

Keep your menu code separate from your inventory logic. The `Inventory` class shouldn't know the console exists.
</details>

<details>
<summary>💡 Hint 2</summary>

Money should be a `decimal`, not a `double`. Find out why.
</details>

### Stretch goals

- Sales log with daily revenue report.
- Export a report to CSV.
- Unit tests with xUnit for the sell/restock rules.

---

## 🟡 4. Pomodoro Timer (Desktop App)

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `csharp-pomodoro`

### The mission

Your first **desktop GUI** app: a Pomodoro focus timer (25 minutes of work, 5 minutes of break, repeat).

Pick one: **WPF** or **WinForms** (Windows only), or **Avalonia** (cross-platform).

### Requirements

- [ ] A window with a big countdown display, and Start / Pause / Reset / Skip buttons.
- [ ] Cycles automatically: Work → Short break → Work… with a **long break** after every 4 work sessions.
- [ ] The current phase is obvious at a glance (label, color, or both).
- [ ] A sound or notification when a phase ends.
- [ ] A settings panel to change the durations. Settings are **saved** and remembered next launch.
- [ ] Counts completed work sessions today.
- [ ] The UI never freezes.

### Things to research

Your chosen UI framework's getting-started guide · event handlers · `DispatcherTimer` (WPF/Avalonia) or `System.Windows.Forms.Timer` · data binding · saving settings to JSON · the UI thread

<details>
<summary>💡 Hint 1</summary>

If you use `Thread.Sleep` to wait a second, the whole window freezes. Why? Research the **UI thread**, and use a timer made for your framework.
</details>

<details>
<summary>💡 Hint 2</summary>

The timer's phases (Work, ShortBreak, LongBreak) are a great fit for an `enum`. Keep the timer logic in a class that doesn't know about buttons, so the GUI only displays it.
</details>

### Stretch goals

- A system tray icon showing the remaining time.
- A task list: pick which task each Pomodoro is for.
- Try the MVVM pattern (WPF/Avalonia).

---

## 🔴 5. Notes API

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `csharp-notes-api`

### The mission

Build a **REST API** for a note-taking app with ASP.NET Core. No front end: other developers (or tools like Postman) will
talk to your API. This is what a lot of real backend C# work looks like.

### Requirements

- [ ] Built with ASP.NET Core (Minimal APIs or Controllers, your choice).
- [ ] Endpoints:
  - `GET /notes`: list all notes
  - `GET /notes/{id}`: get one note
  - `POST /notes`: create a note
  - `PUT /notes/{id}`: update a note
  - `DELETE /notes/{id}`: delete a note
- [ ] A note has: ID, title, content, tags, created date, updated date.
- [ ] Correct HTTP status codes (200, 201, 204, 400, 404), not just 200 for everything.
- [ ] Validation: title is required and has a max length. Invalid requests get a helpful 400.
- [ ] Data stored in a database using **Entity Framework Core** with SQLite.
- [ ] Swagger/OpenAPI documentation available when running locally.
- [ ] `GET /notes?tag=work` filters by tag.

### Things to research

ASP.NET Core Minimal APIs · REST conventions · HTTP status codes · Entity Framework Core · migrations · SQLite · dependency injection · Swagger / OpenAPI · DTOs

<details>
<summary>💡 Hint 1</summary>

Start with an in-memory `List<Note>` and get all five endpoints working. Add the database **after** the API shape is right.
</details>

<details>
<summary>💡 Hint 2</summary>

Should clients be able to set `CreatedDate` or `Id` themselves? Look up **DTOs** and why APIs don't accept the raw database model.
</details>

<details>
<summary>💡 Hint 3</summary>

Your `.db` file probably shouldn't be committed. How will someone who clones your repo create their own database?
</details>

### Stretch goals

- Pagination (`?page=2&pageSize=10`).
- Integration tests using `WebApplicationFactory`.
- A tiny HTML/JS front end that uses your API.

---

## 🔴 6. Turn-Based Battle Game

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `csharp-battle-game`

### The mission

A console RPG battle game in the style of classic Pokémon or Final Fantasy fights. The real challenge is **designing** it so
new characters and abilities are easy to add.

### Requirements

- [ ] At least 3 character classes (e.g. Warrior, Mage, Healer), each with HP, attack, defense, speed and a unique special ability.
- [ ] The player builds a team of 3 and fights a computer-controlled team.
- [ ] Turn order is decided by speed.
- [ ] Actions each turn: Attack, Special, Defend, Use item.
- [ ] Status effects that last several turns (e.g. poison, shield, stun).
- [ ] The enemy team uses a simple strategy: not purely random, not unbeatable.
- [ ] A clear battle log: "Mage casts Fireball on Warrior for 23 damage!"
- [ ] Uses **interfaces** and **polymorphism**: adding a new character class should need no changes to the battle loop.
- [ ] Unit tests for damage calculation and status effects, where randomness can be controlled.

### Things to research

Interfaces · abstract classes · polymorphism · `virtual` / `override` · the Strategy pattern · events (`event` / `Action`) · xUnit · passing a seeded `Random` into classes

<details>
<summary>💡 Hint 1</summary>

If your battle loop has `if (character is Mage) ... else if (character is Warrior) ...`, that's a sign polymorphism can help.
What if every character just had a `TakeTurn()` method?
</details>

<details>
<summary>💡 Hint 2</summary>

Random damage makes tests unpredictable. If a class receives its `Random` from outside, a test can give it one with a fixed seed.
</details>

<details>
<summary>💡 Hint 3</summary>

A status effect is something that "does something at the start of each turn, for N turns." That sounds like it could be its own interface.
</details>

### Stretch goals

- Characters gain XP and level up between battles.
- A campaign of 5 battles of increasing difficulty.
- Load character stats from a JSON file so non-programmers can balance the game.
