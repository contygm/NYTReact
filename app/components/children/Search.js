// Include React
var React = require("react");

var Form = require("./grandchildren/Form.js");
var Results = require("./grandchildren/Results.js");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Creating the Results component
var Search = React.createClass({
	getInitialState: function(){
		return { searchResults: ""};
	},
	//get serch terms from form
	setSearchTerms: function(title, date, url){
		this.setState({ 
			title: title,
			date: date,
			url: url
		})
	},	
	// update results component when search entered and get results
	componentDidUpdate: function(){
		//run nyt query with search terms
		helpers.runQuery(this.state.title, this.state.date, this.state.url)
			.then(function(data){
				console.log("Query ran", data);
				this.setState({ searchResults: data});
			});
		}.bind(this);
	},
	// Here we render the function
	render: function() {
		return (
			<div className="row">
				{/* pass function to form as prop; pass searchResults to component as state*/}
				<Form setSearchTerms = {this.setSearchTerms}/>
				<Results results={this.state.results}/>
			</div>
		);
	}
});


module.exports = Search;
