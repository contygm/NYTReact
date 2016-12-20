// Include React
var React = require("react");

var Form = require("./grandchildren/Form.js");
var Results = require("./grandchildren/Results.js");

// Creating the Results component
var Search = React.createClass({
	getInitialState: function(){
		return { 
			topic: "",
			startYear: "",
			endYear: "";
		}
	},
	//get serch terms from form
	setSearchTerms: function(topic, startYear, endYear){
		this.setState({ 
			topic: topic,
			startYear: startYear,
			endYear: endYear
		})
	},	
	
	// Here we render the function
	render: function() {
		return (
			<div className="row">
				{/* pass function & searchResults to components*/}
				<Form setSearchTerms = {this.setSearchTerms}/>
				<Results searchResults={this.props.searchResults}/>
			</div>
		);
	}
});


module.exports = Search;
