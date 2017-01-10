var axios = require("axios");
var qs = require('qs');

var authKey = "c91b91416829443690df9370e731436a";


   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

var helper = {

	runQuery: function(topic, startDate, endDate){
		console.log(topic, startDate, endDate);

		// fix inputs so they match nyt api's format
		var fixedTopic = topic.trim();
    	var fixedStartDate = startDate + "0101";
    	var fixedEndDate = endDate + "1231";

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "c91b91416829443690df9370e731436a",
		  'q': "ellen",
		  'begin_date': "20000101",
		  'end_date': "20020202"
		});   

		console.log(url);

		var results;
		
		var invocation = new XMLHttpRequest();
		invocation.responseType = "json";
		invocation.onreadystatechange = function() {
		    if (invocation.readyState === 4) {
		      console.log(invocation.response);
		      results = invocation.response;
		    }
		}
		invocation.open('GET', url, true);
		invocation.send();
		return results;
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
