// Include React
var React = require("react");

var Saved = require("./children/Saved.js");
var Search = require("./children/Search.js");

// Creating the Results component
var Main = React.createClass({
  // Here we render the function
	render: function() {
		return (
			<div className="main-layout">
				{/*navigation bar*/}
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">NYT React</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li><a href="#">Search</a></li>
							<li><a href="#">Saved</a></li>
						</ul>
					</div>
				</nav>

				{/*components*/}
				<div className="container" id = "reactComponents">
					<div className="row">
						<Search />
						<Saved />
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