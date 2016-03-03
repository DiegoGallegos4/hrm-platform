var app = app || {};

(function(){
	var RequestLineList = Backbone.Collection.extend({
		model: app.RequestLine,

		url: 'http://localhost:4003/api/requestLines',

		lines: function(id){
			return this.where({requestID: id});
		},

		byTransportation: function(){
			return this.where( {transportationConfirmation: true} );
		}
	});

	app.RequestLines = new RequestLineList();
}());