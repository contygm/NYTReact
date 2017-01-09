// Include React
var React = require("react");


// Creating the Results component
var Form = React.createClass({ 
	// getInitialState: function(){
	// 	return {
	// 		topic: "",
	// 		startYear: "",
	// 		endYear: ""
	// 	}
	// },
	// handleChangeTopic: function(event){
	// 	this.setState({topic: event.target.value});
	// 	console.log("topic: " + event.target.value);
	// },
	// handleChangeStartYear: function(event){
	// 	this.setState({startYear: event.target.value});
	// 	console.log("startYear: " + event.target.value);
	// },
	// handleChangeEndYear: function(event){
	// 	this.setState({endYear: event.target.value});
	// 	console.log("endYear: " + event.target.value);
	// },
	// handleSubmit: function(event){
	// 	event.preventDefault();
	// 	console.log(this.state.topic, this.state.startYear, this.state.endYear);

	// 	this.props.setTerms(this.state.topic, this.state.startYear, this.state.endYear);
	// 	this.setState({
	// 		topic: "",
	// 		startYear: "",
	// 		endYear: ""
	// 	});
	// },
	// Here we render the function
	render: function() {
	    return (
	    	<form>
				<div className="form-group">
					<label for="">Search Term</label>
					<input type="email" className="form-control" id="" placeholder="Topic"/>
				</div>
				<div className="form-group">
					<label for="">Start Date</label>
					<input type="password" className="form-control" id="" placeholder="Password"/>
				</div>
				<div className="form-group">
					<label for="">End Date</label>
					<input type="password" className="form-control" id="" placeholder="Password"/>
				</div>
				<button type="submit" className="btn btn-default">Submit</button>
			</form>
	    );
  	}
});

// Export the component back for use in other files
module.exports = Form;
