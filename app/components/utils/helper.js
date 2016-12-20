var axios = require("axios");

var authKey = "c91b91416829443690df9370e731436a";

var helper = {

	runQuery: function(topic, startYear, endYear){
		console.log(topic, startYear, endYear);

		// fix inputs so they match nyt api's format
		var fixedTopic = topic.trim();
    	var fixedStartYear = startYear.trim() + "0101";
    	var fixedEndYear = endYear.trim() + "1231";

    	// get articles based on topic, startYear & endYear
		return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
			params: {
				"api-key": authKey,
				"q": fixedTopic,
				"begin_date": fixedStartYear,
				"end_date": fixedEndYear
			}
		}).then(function(results) {
			console.log("Axios Results", results.data.response);
			return results.data.response;
		});
	},

	// get saved articles
	getSaved: function(){
		return axios.get("/api/saved")
			.then(function(results){
				console.log("Saved Articles: ", results);
				return results;
			})
	},

	// TODO: save new articles
	postSaved: function(title, date, url){
		return axios.post("/api/saved");
	}, 
	// TODO: delete an article
	deleteSaved: function(id){
		return axios.delete("/api/saved", { _id: id});
	}
};

module.exports = helper;

