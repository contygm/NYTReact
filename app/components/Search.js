// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({
	// Here we render the function
	render: function() {
		return (
			 <div class="row">
				<div class="input-field col s6">
					<input id="last_name" type="text" class="validate"/>
					<label for="last_name">Last Name</label>
				</div>
			</div>
		);
	}
});


module.exports = Search;
