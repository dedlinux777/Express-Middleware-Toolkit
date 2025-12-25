# Express Middleware Toolkit

A practical demonstration of **Express.js Middlewares**, featuring custom logging, authentication checks, and error handling.

## Project Structure

* **`app.js`**: The main entry point that configures the Express server and mounts middlewares.
* **`middlewares/logger.js`**: A custom utility that tracks and records every request.
* **`middlewares/auth.js`**: Logic to protect sensitive routes using token-based validation.
* **`views/authForm.ejs`**: (To be added) A frontend interface for users to submit access tokens.
* **`log.txt`**: A persistent file where request logs are stored.

---

## 🛠 Middlewares Implemented

### 1. Logger Middleware (Application-Level)

This middleware captures details about every incoming request to provide an audit trail.

* **Action**: It increments a request counter and captures the URL, HTTP method, and timestamp.
* **Persistence**: Uses `fs.appendFile` to ensure new logs are added to `log.txt` without overwriting previous entries.
* **Feedback**: Logs a success message to the console once the file is updated.

### 2. Authentication Middleware (Router-Level)

Acts as a security gatekeeper for specific routes like `/api`.

* **Logic**: It extracts a `token` from the URL query parameters (`req.query`).
* **Validation**: If the token equals `'access'`, the request is passed to the next handler using `next()`.
* **Failure**: If the token is invalid or missing, it throws an "ACCESS DENIED" error.

### 3. Error Handling Middleware

Express uses a built-in error handler, but this project demonstrates custom error triggers.

* **Custom Errors**: Throwing an error in a middleware (like the auth middleware) automatically moves the execution to the error-handling stack.
* **404 Handling**: A catch-all middleware at the bottom of `app.js` handles requests to non-existent routes.

---

## 📖 Key Middleware Concepts

Based on the documentation in `middlewares.md`:

* **Definition**: Middleware functions execute after receiving a request and before sending a response.
* **Core Tasks**: They can execute code, modify `req`/`res` objects, end the request-response cycle, or call `next()` to chain further logic.
* **Categories**:
* **Application-level**: Bound to the `app` object using `app.use()`.
* **Router-level**: Specific to certain routes or router instances.
* **Built-in**: Examples include `express.static` and `express.urlencoded`.



---

##  How to Run

1. **Install dependencies**:
```bash
npm install

```


2. **Start the server**:
```bash
node app.js

```


3. **Test Routes**:
* `GET /`: Root access.
* `GET /random`: Public route.
* `GET /api?token=access`: Authorized API access.
