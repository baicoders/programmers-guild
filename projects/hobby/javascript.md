# JavaScript Hobby Projects

[← Back to the board](../../README.md)

**You'll need:** a browser and a code editor. These are **browser** projects: plain HTML + CSS + JavaScript, with no frameworks
(no React or Vue yet).
**Tip:** keep your browser's DevTools **Console** open at all times. It's where your errors show up.
**Where it goes:** your **personal** GitHub account (`github.com/<your-username>/<repo-name>`). These projects are yours to keep and show off.

> 🚀 **Deploy it (required):** every project must be live on **GitHub Pages**. Put the live link at the top of your README and in the repo's **About** section.

---

## 🟢 1. Tip Calculator

**Level:** Beginner · **Time:** 2–4 hours · **Repo name:** `js-tip-calculator`

### The mission

Friends at a restaurant can never agree on how to split the bill. Build a small web app that does it for them.

### Requirements

- [ ] Inputs for bill amount and number of people.
- [ ] Tip percentage buttons (10%, 15%, 20%) plus a custom tip input.
- [ ] Shows **tip per person** and **total per person**, updating live as the user types.
- [ ] Handles bad input: empty fields, zero people, negative numbers, letters. No `NaN` should ever reach the screen.
- [ ] A reset button.
- [ ] Money is always shown with 2 decimal places.

### Things to research

`document.querySelector` · `addEventListener` · the `input` event · `Number()` vs `parseFloat()` · `toFixed()` · `isNaN`

<details>
<summary>💡 Hint 1</summary>

Write one function that reads all the inputs, calculates and updates the screen. Then call that function from every event listener.
</details>

<details>
<summary>💡 Hint 2</summary>

Everything you read from an input is a **string**, even if the user typed a number. What does `"10" + 5` give you in JavaScript?
</details>

### Stretch goals

- Let users "round up" the total per person.
- Show the chosen tip button as selected.

---

## 🟢 2. Stopwatch & Timer

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `js-stopwatch-timer`

### The mission

Build a web app with two modes: a **stopwatch** that counts up, and a **countdown timer** for cooking or workouts.

### Requirements

- [ ] Stopwatch: Start, Pause, Reset and **Lap**. Shows `MM:SS.hh` (hundredths of a second).
- [ ] Laps are listed below, newest on top.
- [ ] Timer: the user sets minutes and seconds, then Start / Pause / Reset.
- [ ] When the timer hits zero it shows a clear "Time's up!" and plays a sound.
- [ ] Clicking Start twice must **not** make it run twice as fast.
- [ ] Switch between the two modes with tabs.

### Things to research

`setInterval` / `clearInterval` · `Date.now()` · `padStart` · the `Audio` object · disabling buttons · toggling CSS classes

<details>
<summary>💡 Hint 1</summary>

`setInterval(fn, 10)` does **not** run exactly every 10 ms. Your stopwatch will drift if you just add 10 each tick.
What could you compare against instead?
</details>

<details>
<summary>💡 Hint 2</summary>

The "runs twice as fast" bug comes from creating two intervals. Where do you keep track of the one that's already running?
</details>

### Stretch goals

- Keyboard shortcuts (Space = start/pause, L = lap, R = reset).
- Show the remaining time in the browser tab title.
- Highlight the fastest and slowest laps.

---

## 🟡 3. To-Do List

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `js-todo-list`

### The mission

Yes, every developer builds a to-do app. There's a reason: it covers creating, reading, updating and deleting data (CRUD),
which is the core of most software you'll ever write.

### Requirements

- [ ] Add a task with the Enter key or an "Add" button. Empty tasks aren't allowed.
- [ ] Mark a task complete / incomplete (with a visual difference).
- [ ] Delete a task.
- [ ] Edit an existing task's text.
- [ ] Filter: All / Active / Completed.
- [ ] A counter: "3 tasks left".
- [ ] **Tasks survive a page refresh.**

### Things to research

`localStorage` · `JSON.stringify` / `JSON.parse` · `createElement` · event delegation · array methods (`filter`, `map`, `find`) · `Date.now()` for IDs

<details>
<summary>💡 Hint 1</summary>

Keep your tasks in a JavaScript **array of objects**. That array is the "source of truth." Every time it changes:
save it, then redraw the list from it. Don't try to keep the HTML and the data in sync by hand.
</details>

<details>
<summary>💡 Hint 2</summary>

`localStorage` can only store strings. How do you turn an array into a string and back?
</details>

<details>
<summary>💡 Hint 3</summary>

Adding a click listener to every single delete button gets messy. Look up **event delegation**.
</details>

### Stretch goals

- Drag-and-drop to reorder tasks.
- Due dates, with overdue tasks highlighted.
- "Clear completed" button.

---

## 🟡 4. Quiz App

**Level:** Intermediate · **Time:** 1–2 days · **Repo name:** `js-quiz-app`

### The mission

Build a multiple-choice quiz on any topic you like (programming, movies, geography…) with a timer and high scores.

### Requirements

- [ ] At least 10 questions stored as **data** (an array of objects or a `.json` file), not written into the HTML.
- [ ] One question at a time, with 4 answer buttons.
- [ ] After answering: show whether it was right, highlight the correct answer, then move on with a "Next" button.
- [ ] A 15-second timer per question. Running out counts as wrong.
- [ ] Questions **and** answer order are shuffled every time.
- [ ] End screen: score, percentage, and a "Play again" button.
- [ ] Top 5 high scores (with player name) saved in `localStorage`.

### Things to research

Arrays of objects · Fisher–Yates shuffle · `fetch` for local JSON · `setInterval` · state management · rendering from data · `localStorage`

<details>
<summary>💡 Hint 1</summary>

Keep all the quiz state in one object: current question index, score, time left. Every screen is drawn from that object.
</details>

<details>
<summary>💡 Hint 2</summary>

`array.sort(() => Math.random() - 0.5)` is a popular way to shuffle, and it's biased. Look up **Fisher–Yates** and why.
</details>

<details>
<summary>💡 Hint 3</summary>

Loading a `.json` file with `fetch` fails if you just double-click `index.html`. Why? Research "CORS file protocol" and running a local server.
</details>

### Stretch goals

- Load questions from the [Open Trivia Database](https://opentdb.com/) API with category and difficulty choices.
- A progress bar.
- Review screen showing every question with your answer and the correct one.

---

## 🔴 5. Weather Dashboard

**Level:** Challenge · **Time:** 2–4 days · **Repo name:** `js-weather-dashboard`

### The mission

Build a weather app that fetches **real data** from the internet. Use the [Open-Meteo API](https://open-meteo.com/). It's
free and doesn't need an API key.

### Requirements

- [ ] Search for a city by name.
- [ ] Show the current temperature, weather condition, wind speed and humidity.
- [ ] Show a 5-day forecast.
- [ ] A loading state while data is being fetched.
- [ ] Friendly error messages for: city not found, no internet, API errors.
- [ ] Remember the last 5 searched cities and make them clickable.
- [ ] Toggle between °C and °F.

### Things to research

`fetch` · `async` / `await` · `try` / `catch` · Promises · reading API documentation · geocoding · JSON · HTTP status codes

<details>
<summary>💡 Hint 1</summary>

Weather APIs usually want **latitude and longitude**, not a city name. Read the Open-Meteo docs: there's a separate
geocoding endpoint. That means two requests, one after the other.
</details>

<details>
<summary>💡 Hint 2</summary>

Before writing any display code, `console.log` the whole API response and explore its shape. Then decide what you need.
</details>

<details>
<summary>💡 Hint 3</summary>

`fetch` does **not** throw an error on a 404 or 500. Look up `response.ok`.
</details>

### Stretch goals

- Use the browser's Geolocation API to show local weather on page load.
- Weather icons or a background that changes with the conditions.
- Host it on GitHub Pages.

---

## 🔴 6. Memory Match Game

**Level:** Challenge · **Time:** 3–5 days · **Repo name:** `js-memory-game`

### The mission

The classic card-flipping memory game: all cards face down, flip two at a time, and find every matching pair.

### Requirements

- [ ] A grid of face-down cards generated **from JavaScript**, not hard-coded in HTML.
- [ ] Three difficulty levels: 4×4, 4×5 and 6×6.
- [ ] Clicking a card flips it with a **3D flip animation**.
- [ ] Two matching cards stay face up. Two non-matching cards flip back after a short delay.
- [ ] While two unmatched cards are showing, clicking a third card does nothing.
- [ ] Clicking the same card twice doesn't count as a match.
- [ ] A move counter and a timer that starts on the first click.
- [ ] A win screen with moves and time, and a best score per difficulty saved in `localStorage`.
- [ ] Playable with the **keyboard** (Tab to move between cards, Enter to flip).

### Things to research

CSS 3D transforms · `perspective` · `backface-visibility` · `transform-style: preserve-3d` · `setTimeout` · data attributes (`data-*`) · `<button>` for accessibility · Fisher–Yates shuffle

<details>
<summary>💡 Hint 1</summary>

List every state the board can be in: no cards flipped, one flipped, two flipped and checking. Most bugs happen when a click
arrives in the "wrong" state. A single "lock the board" flag solves a lot of them.
</details>

<details>
<summary>💡 Hint 2</summary>

If each card is a `<button>`, keyboard support and focus come almost for free.
</details>

<details>
<summary>💡 Hint 3</summary>

A 3D card flip is two faces stacked on top of each other, with one rotated 180°. Look up `backface-visibility: hidden`.
</details>

### Stretch goals

- Themes (emoji, animals, programming logos).
- Two-player mode that takes turns.
- Sound effects with a mute toggle.
