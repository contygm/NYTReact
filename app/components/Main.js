// Include React
var React = require("react");

var Saved = require("./children/Saved.js");
var Search = require("./children/Search.js");
var About = require("./children/About.js");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helper");

// Creating the Results component
var Main = React.createClass({
	getInitialState: function(){
		return { 
			topic: "",
			startDate: "",
			endDate: "",
			searchResults: []
		};
	},
	// // render saved articles on load
	// componentDidMount: function(){
	// 	helpers.getSaved()
	// 		.then(function(response){
	// 			this.setState({ savedArticles: response.data})
	// 		}.bind(this));
	// },

	// update results component when search entered and get results
	componentDidUpdate: function(){
		//run nyt query with search terms
		// helpers.runQuery(this.state.topic, this.state.startDate, this.state.endDate)
		// 	.then(function(data){
		// 		console.log("Query ran", data);
		// 		this.setState({ searchResults: data});
		// 	}.bind(this));

		helpers.runQuery(this.state.topic, this.state.startDate, this.state.endDate, function(data){
				console.log("Query ran", data);
				this.setState({ searchResults: data});
			}.bind(this));
	},

	//get serch terms from form
	setTerms: function(topic, startDate, endDate){
		this.setState({
			topic: topic,
			startDate: startDate,
			endDate: endDate
		});
		console.log("main:" + topic + startDate + endDate)
	},
	// Here we render the function
	render: function() {
		return (
			<div className="container">
				{/*navigation bar*/}
				<nav className="navbar navbar-default navbar-fixed-top ">
					<div className="container">
						<a className="navbar-brand " href="#">NYT React</a>
						<ul className="nav navbar-nav navbar-right">
					    	<li><a href="#">Search</a></li>
					    	<li><a href="#">Saved</a></li>
					    	<li><a href="#">About</a></li>
					    </ul>
					</div>
				</nav>

				{/* Jumbotron*/}
				<div className="jumbotron text-center">
					<h1>New York Times Article Scrapper</h1>
					<p>Search and save articles</p>
					<p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
				</div>

				{/*components  */ }
				<div className="container">
					<Search setTerms={this.setTerms}/>	
					<Saved />
					{/*<About  />*/}
				</div>
			</div>
		);
	}
});

module.exports = Main;