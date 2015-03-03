var React = require("react"),
    App = React.createFactory(require("components/app"));

window.onload = function() {
    // Render client side content
    React.render(
        App(),
        document.getElementById("ClientContent")
    );

    // Display timing information
    var now = new Date().getTime();
    var client_load_time = (now - performance.timing.navigationStart) / 1000;
    document.getElementById("client-load-time").innerHTML = client_load_time + "s";

    var server_load_time = (performance.timing.responseEnd - performance.timing.navigationStart) / 1000;
    document.getElementById("server-load-time").innerHTML = server_load_time + "s";
};

