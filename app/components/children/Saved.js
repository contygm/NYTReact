// TODO: 
// - delete button
// - move to own page 
//		- app/pinnedArticles --> render(whatever)

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the saved articles component
var Saved = React.createClass({
	// render saved articles on load
	componentDidMount: function(){
		helpers.getSaved()
			.then(function(response)){
				this.setState({ savedArticles: response.data})
			}.bind(this);
	},
	// Here we render the function
	render: function() {
	    return (
	    	<div className="saved-entry">
	    		<div className="results col s12">
		    		<h2>Saved Articles</h2>
				    <ul className="collection">
				        <li className="collection-item avatar">
							<i className="material-icons circle green">folder</i>
							<span className="title">Article Title</span>
							<br/><span>Date Line</span>
							<a className="waves-effect waves-light btn"><i className="material-icons left">no_sim</i>Delete</a>
							<a className="waves-effect waves-light btn"><i className="material-icons left">subject</i>View</a>
						</li>
				    </ul>
	    		</div>
	    	</div>
	    );
	}
});

// Export the component back for use in other files
module.exports = Saved;
