var React = require("react");
var ReactPropTypes = React.PropTypes;

var Book = React.createClass({
    propTypes: {
        name: ReactPropTypes.string.isRequired,
        url: ReactPropTypes.string.isRequired,
        author: ReactPropTypes.string.isRequired
    },

    render: function() {
        return (
            <tr>
                <td><a href={this.props.url}>{this.props.name}</a></td>
                <td>{this.props.author}</td>
            </tr>
        )
    }
});

module.exports = Book;
