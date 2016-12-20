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

	// save new articles
	postSaved: function(title, date, url){
		var newArticle = { title: title, date: date, url: url};

		return axios.post("/api/saved", newArticle)
			.then(function(response){
				console.log("newArticle id: ", response.data._id);
				return response.data._id;
			});
	}, 
	// delete an article
	deleteSaved: function(title, date, url){
		return axios.delete("/api/saved", {
			params: {
				"title": title,
				"date": date,
				"url": url
			}
		}).then(function(results){
			console.log("deletedSaved: ", results);
			return results;
		})
	}
};

module.exports = helper;

