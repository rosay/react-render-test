# React speed test: client vs server.
This is an example app highlighting the benefits of server side rendering. It renders the same block of HTML (a table of books) on the server and on the client. It gets interesting when you slow your connection speed down using Browser-Sync or in Chrome DevTools.

### Installation
```bash
npm install
```

### Running the app
```bash
gulp
```

### Throttling connection speed
To use BrowserSync to throttle your connection, navigate to http://localhost:3001/remote-debug, turn on "Latency" and set it to 1 to 5 seconds.

Refresh the page "Programmer's Book Store" page. Notice the content being rendered on the server is displayed first, while the content being rendered client side takes much longer (depending on the connection speed).

License
----

MIT

