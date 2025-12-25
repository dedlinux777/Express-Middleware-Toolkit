Middlewares:

Middlewares in express are functions that come into play after the server
recieves the req and before the res is sent to the client

common Middlewares:
* methodOverride: used for the expanding actions for forms in html to support requests other than GET and POST
* bodyParser: express uses this to understand req.body contents of a request before processing
* express.static: Backend's static files are used to serve frontend
- example: app.use(express.static(path.join(__dirname, "public"))); // when request arrives to backend before route handlers do their job, middlewares i.e., static function does its job: it access public folder and make available to route handlers to use public folder as static files to serve frontend
* express.urlencoded: Express uses this to access all the data which are encoded in URL of a request.
- example: app.use(express.urlencoded({extended: true}));



What do middlewares do?

Middleware functions can perform the following tasks:

- execute any code
- make changes to the request and the response objects
- Middlewares ends the request and response cycle meaning: middleware can send response back to client without sending to below routes or other middlewares
- Middlewares can call the next middleware function in the stack (chaining)

middleware definition:
- we use app.use() to define or to mount the specified middleware functions at specific path: the middleware function is executed when the base of the requested path matches path.

- app.use has two arguments:
-- path: the path for which the middleware is to be invoked: it can be of string represntation path, path pattern, a Regular expression and an array of combinations of any of the above.
-- callback: can be middleware function, a series of middleware functions(separated commas), an array of middleware functions, a combination of above.
```javascript
app.use(()=>{
    console.log("Hi, I am a middleware);
});
```
- we can also use req and res while defining the middleware

```javascript
app.use((req, res)=>{
    console.log("Hi, I am a middleware);
});
```

Using next:
'next' is a parameter which sents the control of execution to next route or middleware
The next middleware function is commonly denoted by a variable named next
If the current middleware function does not end the req-res cycle, it must call the next() to pass control to next middleware function.

### Types of Middlewares:
- Application level Middlewares
- Router level middlewares
- Error Handling middlewares
- Built-in Middlewares
-- example: express.static, express.json, express.urlencoded
- Third-party middlewares
-- example cookie-parser

Read: 5 Express Middlewares Libraries Every Developer should know


