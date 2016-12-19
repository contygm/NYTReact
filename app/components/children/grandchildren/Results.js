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
		        <li className="collection-item avatar">
					<i className="material-icons circle">folder</i>
					<span className="title">Article Title</span>
					<p>Date Line</p>
					<a className="waves-effect waves-light btn right"><i className="material-icons left">note_add</i>Save</a>
					<a className="waves-effect waves-light btn right"><i className="material-icons left">subject</i>View</a>
				</li>
				<li className="collection-item active avatar">
					<i className="material-icons circle red">folder</i>
					<span className="title">Article Title</span>
					<p>Date Line</p>
					<a className="waves-effect waves-light btn right"><i className="material-icons left">note_add</i>Save</a>
					<a className="waves-effect waves-light btn right"><i className="material-icons left">subject</i>View</a>
				</li>
		    </ul>
    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
