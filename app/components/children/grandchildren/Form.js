// Include React
var React = require("react");

// Creating the Results component
var Form = React.createClass({ 
	getInitialState: function(){
		return {
			topic: "",
			startDate: "",
			endDate: ""
		}
	},
	topicChange: function(event){
		this.setState({topic: event.target.value});
		console.log("topic: " + event.target.value);
	},
	startDateChange: function(event){
		this.setState({startDate: event.target.value});
		console.log("startYear: " + event.target.value);
	},
	endDateChange: function(event){
		this.setState({endDate: event.target.value});
		console.log("endYear: " + event.target.value);
	},
	handleSubmit: function(event){
		event.preventDefault();


		console.log(this.state.topic, this.state.startDate, this.state.endDate);

		//this.props.setTerms(this.state.topic, this.state.startYear, this.state.endYear);
		this.setState({
			topic: "",
			startYear: "",
			endYear: ""
		});
	},
	// Here we render the function
	render: function() {
	    return (
	    	<div className="col-sm-12">
		    	<div className="panel panel-primary">
		    		<div className="panel-heading">
						Search the New York Times
					</div>
					<div className="panel-body">
				    	<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label for="topic">Search Term</label>
								<input className="form-control" id="topic" placeholder="Topic" onChange={this.topicChange}/>
							</div>
						{/*date dropdown*/}
							<div className="form-group">
								<label for="startDate">Start Date</label>
								<input type="number" className="form-control" id="startDate" placeholder="1983" onChange={this.startDateChange}/>
							</div>
							<div className="form-group">
								<label for="endDate">End Date</label>
								<input type="number" className="form-control" id="endDate" placeholder="2001" onChange={this.endDateChange}/>
							</div>
							<button type="submit" className="btn btn-warning">Submit</button>
						</form>
					</div>
				</div>
			</div>
	    );
  	}
});

// Export the component back for use in other files
module.exports = Form;
