angular.module('about',['ui.router'])
	.config(function config( $stateProvider ) {
		$stateProvider.state( 'about', {
			url: '/about',
			views: {
				"main": {
					controller: 'AboutCtrl',
					templateUrl: 'about/about.tpl.html'
				}
			},
			data:{ pageTitle: 'Home' }
		});
	}).
	controller('AboutCtrl', function($scope){
		$scope.body = "Blank about us page."
	})
	.directive('blink', function($interval){
		return {
			link: function(scope, el, attrs){
				var on = true;
				var timoutId = $interval(function(){
					on = !on;
					el.css({
						opacity:+on,
					});
				}, 1000);

				el.on('$destroy', function(){
					$interval.cancel(timeoutId);
				});
			}
		}
	})