// Include React
var React = require("react");

var Form = require("./grandchildren/Form.js");
var Results = require("./grandchildren/Results.js");

// Creating the Results component
var Search = React.createClass({	
	
	// Here we render the function
	render: function() {
		return (
			<div className="row">
				{/* pass function & searchResults to components*/}
				<Form />
				<Results />
			</div>
		);
	}
});


module.exports = Search;
