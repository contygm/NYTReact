// Include React
var React = require("react");

var Form = require("./grandchildren/Form.js");
var Results = require("./grandchildren/Results.js");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Results component
var Search = React.createClass({
	getInitialState: function(){
		return { title: "", startDate: "", endDate:""};
	},
	setSearchTerms: function(title, date, url){
		this.setState({ 
			title: title,
			date: date,
			url: url
		})
	},
	// render saved articles on load

	// update when search entered


	// Here we render the function
	render: function() {
		return (
			<div className="row">
				<Form />
				<Results />
			</div>
		);
	}
});


module.exports = Search;
