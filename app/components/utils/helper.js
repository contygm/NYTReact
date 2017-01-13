var axios = require("axios");

var helper = {

	runQuery: function(topic, startDate, endDate, callback){
		console.log(topic, startDate, endDate);

		// fix inputs so they match nyt api's format
		var fixedTopic = topic.trim();
    	var fixedStartDate = startDate + "0101";
    	var fixedEndDate = endDate + "1231";

		return axios.get('/api/news/' + fixedTopic + '/' + fixedStartDate + '/' + fixedEndDate )
	    .then(function(response){
	      console.log("\nAxios Response from NYT query", response.data.response.docs);
	      return response.data.response.docs;
	    })
		
	}		
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
