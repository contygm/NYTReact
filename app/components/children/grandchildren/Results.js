// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
    	<div className="results col s12">
    		<h2>Results</h2>
		    <ul className="collection">

		    {/* Here we use a map function to loop through searchResults*/}
		    {this.props.searchResults.map(function(search, i){
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
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
