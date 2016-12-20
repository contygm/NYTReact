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
	handleChangeTopic: function(event){
		this.setState({topic: event.target.value});
		console.log("topic: " + event.target.value);
	},
	handleChangeStartYear: function(event){
		this.setState({startYear: event.target.value});
		console.log("startYear: " + event.target.value);
	},
	handleChangeEndYear: function(event){
		this.setState({endYear: event.target.value});
		console.log("endYear: " + event.target.value);
	},
	handleSubmit: function(event){
		event.preventDefault();
		console.log(this.state.topic, this.state.startYear, this.state.endYear);

		this.props.setSearchTerms(this.state.topic, this.state.startYear, this.state.endYear);
		this.setState({
			topic: "",
			startYear: "",
			endYear: ""
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
							<input id="topic" type="text" className="validate" 
							onChange={this.handleChangeTopic} value={this.state.topic}/>
							<label>Topic</label>
						</div>	
					</div>	

					<div className = "row">
						<div className="input-field col s12">
							<input id="startYear" type="text" className="validate" 
							onChange={this.handleChangeStartYear} value={this.state.startYear}/>
							<label>Start Year</label>
						</div>
					</div>

					<div className = "row">
						<div className="input-field col s12">
							<input id="endYear" type="text" className="validate" 
							onChange={this.handleChangeEndYear} value={this.state.endYear}/>
							<label>End Year</label>
						</div>
					</div>
					<button className="btn waves-effect waves-light right" type="submit">Submit
  					</button>
				</form>
	    	</div>
	    );
  	}
});

// Export the component back for use in other files
module.exports = Form;
