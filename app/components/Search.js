// Include React
var React = require("react");

// Creating the Results component
var Search = React.createClass({
	// Here we render the function
	render: function() {
		return (
			<div className="row">
				<form className="col s8">
					<div className="input-field col s6">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">Topic</label>
					</div>		

					<div className="input-field col s6">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">Start Year</label>
					</div>

					<div className="input-field col s6">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">End Year</label>
					</div>
					<a className="waves-effect waves-light btn-large">Button</a>
				</form>
			</div>
		);
	}
});


module.exports = Search;
