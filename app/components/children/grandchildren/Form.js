// Include React
var React = require("react");


// Creating the Results component
var Form = React.createClass({
  
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},

	handleChange: function(event){
		this.setState({
			topic: event.target.value[0],
			startYear: event.target.value[1],
			endYear: event.target.value[2]
		})
	},
	handleSumbit: function(event){
		event.preventDefault();

		this.props.setTerm(this.state.topic);
		//this.props.setStartYear(this.state.topic);
		//this.props.setEndYear(this.state.topic);
		this.setState({
			topic: "",
			startYear: "",
			endYear: 
		});
	},
	// Here we render the function
	render: function() {
	    return (
	    	<div className="query-form">
	    		<h2>Search NYT</h2>
	    		<form className="col s12" onSubmit={this.handleSubmit}>
	    			<div className = "row">
						<div className="input-field col s12">
							<input id="last_name" type="text" className="validate" onChange={this.handleChange} value={this.state.topic}/>
							<label for="last_name">Topic</label>
						</div>	
					</div>	

					<div className = "row">
						<div className="input-field col s12">
							<input id="last_name" type="text" className="validate" onChange={this.handleChange} value={this.state.startYear}/>
							<label for="last_name">Start Year</label>
						</div>
					</div>

					<div className = "row">
						<div className="input-field col s12">
							<input id="last_name" type="text" className="validate" onChange={this.handleChange} value={this.state.endYear}/>
							<label for="last_name">End Year</label>
						</div>
					</div>
					<a className="waves-effect waves-light btn-large right" type="submit">Button</a>
				</form>
	    	</div>
	    );
  	}
});

// Export the component back for use in other files
module.exports = Form;
