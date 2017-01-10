var axios = require("axios");
var qs = require('qs');

var authKey = "c91b91416829443690df9370e731436a";

var helper = {

	runQuery: function(topic, startDate, endDate){
		console.log(topic, startDate, endDate);

		// fix inputs so they match nyt api's format
		var fixedTopic = topic.trim();
    	var fixedStartDate = startDate + "0101";
    	var fixedEndDate = endDate + "1231";

		return axios.get({
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.jsonp",
			headers: {'Access-Control-Allow-Origin': true},
			params: {
			    'api-key': authKey,
				'q': fixedTopic,
				'begin_date': fixedStartDate,
				'end_date': fixedEndDate,
			}, 
		})
		.then(function(response){
			console.log("Axios Results", response.data.results[0]);
			return response.data.results.formatted[0];
		})
	},
};

module.exports = helper;


	// // get saved articles
	// getSaved: function(){
	// 	return axios.get("/api/saved")
	// 		.then(function(results){
	// 			console.log("Saved Articles: ", results);
	// 			return results;
	// 		})
	// },

	// // save new articles
	// postSaved: function(title, date, url){
	// 	var newArticle = { title: title, date: date, url: url};

	// 	return axios.post("/api/saved", newArticle)
	// 		.then(function(response){
	// 			console.log("newArticle id: ", response.data._id);
	// 			return response.data._id;
	// 		});
	// }, 
	// // delete an article
	// deleteSaved: function(title, date, url){
	// 	return axios.delete("/api/saved", {
	// 		params: {
	// 			"title": title,
	// 			"date": date,
	// 			"url": url
	// 		}
	// 	}).then(function(results){
	// 		console.log("deletedSaved: ", results);
	// 		return results;
	// 	})
	// }
