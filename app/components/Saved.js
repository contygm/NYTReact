// Include React
var React = require("react");

// Creating the Results component
var Saved = React.createClass({
  // Here we render the function
  render: function() {
    return (
    	<div className="saved-entry">
    		<p>I exist. I am the saved section.</p>
    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
