# Render speed test: client vs server.
This is an example app that uses React to highlight the benefits of server side rendering. The same block of HTML (a table of books) is rendered on the server and on the client. It gets interesting when you slow your connection speed down using BrowserSync or Chrome DevTools.

### Installation
```bash
npm install
```

### Running the app
```bash
gulp
```

### Throttling connection speed
To use BrowserSync to throttle your connection, navigate to http://localhost:3001/remote-debug, turn on "Latency" and set it for 1 to 5 seconds.

Refresh the "Programmer's Book Store" page. Notice the content being rendered on the server is displayed first, while the content being rendered client side takes much longer (depending on the connection speed).

### What's happenning
The server side rendered block of HTML is downloaded and rendered immediately even on slow connection speeds. The client rendered HTML can't be rendered until bundle.js is finished downloading. On a slow connection speed, it can take a long time. 

NOTE: Is bundle.js unminified and MUCH larger than it needs to be? Yes, which is why it works well as an eample.

License
----

MIT

