var React = require("react");
var Book = require("./book");

var Library = React.createClass({
    getInitialState() {
        return {
            search: ""
        };
    },
    render() {
        var library = [];

        library.push(
            <Book name="Learning JavaScript Design Patterns" author="Addy Osmani" url="http://addyosmani.com/resources/essentialjsdesignpatterns/book/" />,
            <Book name="You Don't Know JS" author="Kyle Simpson" url="https://github.com/getify/You-Dont-Know-JS" />,
            <Book name="Node: Up and Running" author="Tom Hughes-Croucher" url="http://chimera.labs.oreilly.com/books/1234000001808/index.html" />
        );

        return (
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {library}
                </tbody>
            </table>
        );
    }
});

module.exports = Library;
