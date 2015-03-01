var React = require("react"),
    App = React.createFactory(require("components/app"));

window.onload = function() {
    React.render(
        App(),
        document.getElementById("ClientContent")
    );
};
