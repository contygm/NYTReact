// TODO: 
// - delete button

// Include React
var React = require("react");

// Creating the saved articles component
var Saved = React.createClass({	
	
	// Here we render the function
	render: function() {
	    return (
			<div className="row">
		    	<div className="col-sm-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							Saved Articles
						</div>
						<div className="panel-body">
							<p></p>
							<button type="button" className="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
	    );
	}
});

// Export the component back for use in other files
module.exports = Saved;
