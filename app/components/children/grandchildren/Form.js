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
	handleChange: function(event){
		var id = event.target.id;
		var newState = event.target.value;
		this.setState({ [id] : newState});
	},
	handleSubmit: function(event){
		event.preventDefault();

		console.log(this.state);

		this.props.setTerms(this.state.topic, this.state.startDate, this.state.endDate);

		this.setState({
			topic: "",
			startDate: "",
			endDate: ""
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
								<input className="form-control" id="topic" placeholder="Topic" onChange={this.handleChange}/>
							</div>
						{/*date dropdown*/}
							<div className="form-group">
								<label for="startDate">Start Date</label>
								<input type="number" className="form-control" id="startDate" placeholder="1983" onChange={this.handleChange}/>
							</div>
							<div className="form-group">
								<label for="endDate">End Date</label>
								<input type="number" className="form-control" id="endDate" placeholder="2001" onChange={this.handleChange}/>
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
