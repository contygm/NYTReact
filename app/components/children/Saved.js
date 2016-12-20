// TODO: 
// - delete button
// - move to own page 
//		- app/pinnedArticles --> render(whatever)

// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helper");

// Creating the saved articles component
var Saved = React.createClass({	
	getInitialState: function(){
		return { savedArticles: ""};
	},
	// render saved articles on load
	componentDidMount: function(){
		helpers.getSaved()
			.then(function(response){
				this.setState({ savedArticles: response.data})
			}.bind(this));
	},
	// Here we render the function
	render: function() {
	    return (
	    	<div className="saved-entry">
	    		<div className="results col s12">
		    		<h2>Saved Articles</h2>
				    <ul className="collection">
				        {/* Here we use a map function to loop through savedArticles*/}
					    {this.state.savedArticles.map(function(search, i){
					    	return(
					    		<li className="collection-item avatar" key={i}>
									<i className="material-icons circle">folder</i>
									<span className="title">{search.title}</span>
									<p>{search.date}</p>
									<a className="waves-effect waves-light btn right"><i className="material-icons left">note_add</i>Save</a>
									<a href={search.url}className="waves-effect waves-light btn right"><i className="material-icons left">subject</i>View</a>
								</li>
					    	)
					    })} 
				    </ul>
	    		</div>
	    	</div>
	    );
	}
});

// Export the component back for use in other files
module.exports = Saved;
