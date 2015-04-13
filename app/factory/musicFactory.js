angular.module('factory',[])
	.factory('musicFactory', function($http){
		return {
			getMusic: function(artist){
				return $http.jsonp("https://itunes.apple.com/search?term="+artist+"&callback=JSON_CALLBACK");
			}
		};
	})