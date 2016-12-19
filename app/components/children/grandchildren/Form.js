// Include React
var React = require("react");


// Creating the Results component
var Form = React.createClass({
  // Here we render the function
  render: function() {
    return (
    	<div className="query-form">
    		<form className="col s12">
    			<div className = "row">
					<div className="input-field col s12">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">Topic</label>
					</div>	
				</div>	

				<div className = "row">
					<div className="input-field col s12">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">Start Year</label>
					</div>
				</div>

				<div className = "row">
					<div className="input-field col s12">
						<input id="last_name" type="text" className="validate"/>
						<label for="last_name">End Year</label>
					</div>
				</div>
				<a className="waves-effect waves-light btn-large">Button</a>
			</form>
    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
