var axios = require("axios");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

var helper = {

	runQuery: function(topic, startYear, endYear){
		console.log(topic, startYear, endYear);


	},

	// get saved articles
	getSaved: function(){
		return axios.get("/api/saved");
	},

	// TODO: save new articles
	addSaved: function(){
		return axios.post("/api/saved");
	}, 
	// TODO: delete an article
	deleteSaved: function(id){
		return axios.delete("/api/saved", { _id: id});
	}
};

module.exports = helper;

