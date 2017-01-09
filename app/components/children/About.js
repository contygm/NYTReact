var React = require("react");

var About = React.createClass({	
	
	// Here we render the function
	render: function() {
	    return (
	    <div className="row">
	    	<div className="col-sm-6">
				<div className="panel panel-primary">
					<div className="panel-heading">
						About NYT React
					</div>
					<div className="panel-body">
						<p>Srape the New York Times with the press of a button and find articles of interest. Save anything that catches your eye and come back to it later.</p>
						<button type="button" className="btn btn-success">Success</button>
					</div>
				</div>
			</div>

			<div className="col-sm-6">
				<div className="panel panel-primary">
					<div className="panel-heading">
						Technologies Used
					</div>
					<ul className="list-group">
						<li className="list-group-item">React</li>
						<li className="list-group-item">NYT API</li>
						<li className="list-group-item">MongoDB</li>
						<li className="list-group-item">mLab</li>
						<li className="list-group-item">Node</li>
						<li className="list-group-item">Express</li>
						<li className="list-group-item">Bootstrap</li>
						<li className="list-group-item">JavaScript</li>
					</ul>	
				</div>
			</div>
		</div>
	    );
	}
});

module.exports = About;
