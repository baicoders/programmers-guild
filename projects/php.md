# PHP Projects

[← Back to the board](../README.md)

**You'll need:** PHP 8.1 or newer. Check with `php --version`. You can run everything with PHP's built-in server:
`php -S localhost:8000`. Bundles like **XAMPP** or **Laragon** also work.
**Rule for this track:** no frameworks (no Laravel or Symfony yet). Learn what they do for you by doing it yourself first.

> 🔐 **Security matters in PHP.** Web apps get attacked. Each project below teaches one real security lesson.
> Treat those requirements as seriously as the features.

---

## 🟢 1. Contact Form

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `php-contact-form`

### The mission

A contact form that validates on the **server**, not only in the browser, and shows a confirmation page.

### Requirements

- [ ] Fields: name, email, subject (dropdown), message.
- [ ] Server-side validation: all fields required, email must be valid, message at least 10 characters.
- [ ] If validation fails, show the form again **with the user's input still filled in** and an error next to each bad field.
- [ ] On success, show a "Thanks, {name}!" page with a summary of what they sent.
- [ ] 🔐 **Security lesson:** user input is **escaped** before being printed back to the page. Test by submitting `<script>alert(1)</script>` as your name.

### Things to research

`$_POST` · `$_SERVER['REQUEST_METHOD']` · `filter_var` · `htmlspecialchars` · XSS (cross-site scripting) · including files (`include` / `require`)

<details>
<summary>💡 Hint 1</summary>

The same PHP file can both **show** the form and **process** it. Check whether the request is a GET or a POST.
</details>

<details>
<summary>💡 Hint 2</summary>

If the `<script>` test pops up an alert box, you have an XSS vulnerability. Every time you print user data, ask yourself: is this escaped?
</details>

### Stretch goals

- Save submissions to a CSV file, plus an admin page that lists them.
- A simple honeypot field to catch spam bots.

---

## 🟢 2. Quote of the Day

**Level:** Beginner · **Time:** 3–5 hours · **Repo name:** `php-quote-of-the-day`

### The mission

A page that shows an inspiring (or funny) quote. It changes every day, and visitors can browse quotes by category.

### Requirements

- [ ] At least 20 quotes stored in a **JSON file**, each with text, author and category.
- [ ] The home page shows the "quote of the day": the same quote all day for everyone, and a different one tomorrow.
- [ ] A "Random quote" button that shows a random quote.
- [ ] Category links that use the URL: `?category=motivation`.
- [ ] Searching by author: `?author=einstein` (case-insensitive, partial match).
- [ ] An unknown category or empty result shows a friendly message, not a PHP warning.
- [ ] 🔐 **Security lesson:** anything taken from the URL is escaped before being shown on the page.

### Things to research

`$_GET` · `json_decode` · `file_get_contents` · `array_filter` · `date()` · `mt_rand` / `random_int` · `stripos` · `htmlspecialchars` · `isset` / the `??` operator

<details>
<summary>💡 Hint 1</summary>

"The same quote all day for everyone" with no database? Is there a number that's the same all day and changes tomorrow?
Could you turn it into a position in your array?
</details>

<details>
<summary>💡 Hint 2</summary>

Visit `?category=<b>hello</b>`. If "hello" shows up bold on your page, your output isn't escaped.
</details>

### Stretch goals

- A form to submit new quotes (saved to the JSON file, with validation).
- A "copy quote" button and a share link for each quote.

---

## 🟡 3. Guestbook

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `php-guestbook`

### The mission

A public guestbook where visitors leave messages, stored in a **database**.

### Requirements

- [ ] Visitors submit their name and a message.
- [ ] All messages are shown newest first, with their date and time.
- [ ] Data stored in **SQLite or MySQL** using **PDO**.
- [ ] Pagination: 10 messages per page.
- [ ] 🔐 **Security lesson:** every query uses **prepared statements**. No user input is ever inserted directly into a SQL string.
- [ ] Output is still escaped (the lesson from the Contact Form still applies).
- [ ] A `schema.sql` file in the repo so others can create the database.
- [ ] Database credentials are **not** hard-coded in committed files.

### Things to research

PDO · prepared statements · SQL injection · `CREATE TABLE` · `INSERT` / `SELECT` · `ORDER BY` · `LIMIT` / `OFFSET` · environment variables or config files + `.gitignore`

<details>
<summary>💡 Hint 1</summary>

SQLite needs no server: the whole database is one file. It's the easiest place to start.
</details>

<details>
<summary>💡 Hint 2</summary>

Look up the classic "Bobby Tables" comic. Then make sure your guestbook isn't Bobby's school.
</details>

<details>
<summary>💡 Hint 3</summary>

A common pattern: commit a `config.example.php` with placeholder values, and `.gitignore` the real `config.php`.
</details>

### Stretch goals

- An admin page (password-protected) to delete messages.
- Rate limiting: one message per visitor per minute.

---

## 🟡 4. Image Upload Gallery

**Level:** Intermediate · **Time:** 1–3 days · **Repo name:** `php-image-gallery`

### The mission

Let visitors upload images to a shared gallery. File uploads are one of the most dangerous features a website can have,
so doing this **safely** is the whole point.

### Requirements

- [ ] An upload form with an image and an optional caption.
- [ ] Gallery page showing all uploaded images as thumbnails, newest first, with captions.
- [ ] Image details (filename, caption, upload date) stored in a database (SQLite or MySQL via PDO).
- [ ] 🔐 Only real images are accepted (JPG, PNG, GIF, WebP). Check the **actual file contents**, not only the extension.
- [ ] 🔐 Maximum file size of 5 MB, with a friendly error if exceeded.
- [ ] 🔐 Uploaded files are **renamed** to a random name. Never keep the user's filename.
- [ ] 🔐 Uploaded files can never be executed as PHP.
- [ ] The uploads folder is in `.gitignore`.

### Things to research

`$_FILES` · `move_uploaded_file` · `enctype="multipart/form-data"` · `finfo` / `mime_content_type` · `getimagesize` · `upload_max_filesize` and `post_max_size` · `random_bytes` / `bin2hex` · file upload vulnerabilities

<details>
<summary>💡 Hint 1</summary>

Rename `shell.php` to `shell.jpg` and try uploading it. If your gallery accepts it, your check is only looking at the name.
</details>

<details>
<summary>💡 Hint 2</summary>

Your upload works for small images but silently fails for big ones? PHP has its own size limits **before** your code even runs. Check `php.ini`.
</details>

<details>
<summary>💡 Hint 3</summary>

Why is keeping the user's filename dangerous? Think about `../../index.php`, or two people uploading `photo.jpg`.
</details>

### Stretch goals

- Generate real thumbnails with the GD extension.
- Delete images (with a confirmation step).
- Pagination and a lightbox view.

---

## 🔴 5. Mini Blog

**Level:** Challenge · **Time:** 4–7 days · **Repo name:** `php-mini-blog`

### The mission

A blog with user accounts. Anyone can read, only logged-in authors can write, and authors can only edit **their own** posts.

### Requirements

- [ ] Register and log in / log out.
- [ ] 🔐 Passwords are stored **hashed**, never in plain text.
- [ ] Logged-in users can create, edit and delete their **own** posts, and not anyone else's (even if they change the URL).
- [ ] Public home page lists posts (title, author, date, excerpt). Each post has its own page.
- [ ] Sessions for login state.
- [ ] 🔐 Forms that change data are protected against **CSRF**.
- [ ] 🔐 Prepared statements everywhere, output escaped everywhere.
- [ ] Code organized: separate files/folders for database access, templates and page logic. No 500-line `index.php`.

### Things to research

`password_hash` / `password_verify` · `session_start` · `session_regenerate_id` · CSRF tokens · authorization vs. authentication · the `includes/` or `templates/` pattern · HTTP redirects with `header()`

<details>
<summary>💡 Hint 1</summary>

Try this: log in as user A, then change the URL to edit user B's post. If it works, you've found a real vulnerability
("IDOR"). Fix it on the server, because hiding a button isn't security.
</details>

<details>
<summary>💡 Hint 2</summary>

Write the "is the user logged in?" check **once**, in a function or included file, and reuse it on every protected page.
</details>

<details>
<summary>💡 Hint 3</summary>

A CSRF token is a random secret stored in the session and put in a hidden form field. On submit, you check they match.
</details>

### Stretch goals

- Comments on posts.
- Markdown support for post content (with safe output!).
- Categories or tags.

---

## 🔴 6. Shopping Cart

**Level:** Challenge · **Time:** 5–8 days · **Repo name:** `php-shopping-cart`

### The mission

A small online shop with a product catalog, a shopping cart, a checkout and an admin area. No real payments: checkout just
saves the order.

### Requirements

- [ ] Products (name, description, price, stock, image) stored in a database, with a `schema.sql` and some seed data.
- [ ] Catalog page with category filter and search.
- [ ] Add to cart, change quantity and remove from cart. The cart is kept in the **session**.
- [ ] Cart page shows line totals, subtotal, tax and a grand total.
- [ ] Checkout form (name, address, email) saves the order and its items to the database and reduces stock.
- [ ] You can't order more than is in stock, even if two people check out at the same time.
- [ ] 🔐 **Security lesson:** prices are **always** read from the database on the server. Never trust a price sent from the browser.
- [ ] A password-protected admin area to add/edit products and view orders.
- [ ] Prepared statements, escaped output and CSRF tokens throughout.

### Things to research

`$_SESSION` · database transactions (`beginTransaction`, `commit`, `rollBack`) · foreign keys · `SELECT ... FOR UPDATE` (MySQL) · storing money as integer cents · hidden form fields and why they're not secure · browser DevTools for editing requests

<details>
<summary>💡 Hint 1</summary>

Open DevTools, change a hidden `price` field to `0.01`, and submit. If your shop accepts it, you just gave away a product.
The cart should hold product IDs and quantities only.
</details>

<details>
<summary>💡 Hint 2</summary>

Saving an order means several writes: the order, each item, the stock updates. What should happen if the third one fails?
Look up database **transactions**.
</details>

<details>
<summary>💡 Hint 3</summary>

Store prices in cents as integers (`1999`, not `19.99`). Format them only when displaying.
</details>

### Stretch goals

- Discount codes (percentage and fixed amount, with expiry dates).
- Order confirmation page and order history for returning customers.
- Integrate a payment provider's **test mode** (e.g. Stripe test keys, never real ones).
