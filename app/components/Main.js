// Include React
var React = require("react");

var Saved = require("./children/Saved.js");
var Search = require("./children/Search.js");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helper");

// Creating the Results component
var Main = React.createClass({
	getInitialState: function(){
		return { 
			savedArticles: [],
			searchResults: [],
			topic: "",
			startYear: "",
			endYear: ""
		};
	},
	// render saved articles on load
	componentDidMount: function(){
		helpers.getSaved()
			.then(function(response){
				this.setState({ savedArticles: response.data})
			}.bind(this));
	},

	// update results component when search entered and get results
	componentDidUpdate: function(){
		//run nyt query with search terms
		helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear)
			.then(function(data){
				console.log("Query ran", data);
				this.setState({ searchResults: data});
			}.bind(this));
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
			<div className="main-layout">
				{/*navigation bar*/}
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">NYT React</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#">About</a></li>
						</ul>
					</div>
				</nav>

				{/*components  */ }
				<div className="container" id = "reactComponents">
					<div className="row">
						<Search searchResults={this.state.searchResults} 
							setSearchTerms = {this.state.setSearchTerms}/>	
						
						<Saved savedArticles={this.state.savedArticles}/>
					</div>
				</div>

				{/*footer section...bet you didn't see that coming*/}
				<footer className="page-footer">
					<div className="container">
						<div className="row">
							<div className="col l6 s12">
								<h5 className="white-text">Footer Content</h5>
								<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
							</div>
							<div className="col l4 offset-l2 s12">
								<h5 className="white-text">Links</h5>
								<ul>
									<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
									<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
									<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
									<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							© 2014 Copyright Text
							<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Main;