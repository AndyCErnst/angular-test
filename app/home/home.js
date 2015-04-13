angular.module('home',['ui.router','factory'])
	.config(function config( $stateProvider ) {
		$stateProvider
			.state( 'home', {
				url: '/home',
				views: {
					"main": {
						controller: 'HomeCtrl',
						templateUrl: 'home/home.tpl.html'
					}
				},
				data:{ pageTitle: 'Home' }
			})
			.state('home.band',{
				url: '/red/:band',
				templateUrl: 'home/band.tpl.html',
				controller: 'BandCtrl',
				resolve: {
					music: function(musicFactory, $stateParams){
						return musicFactory.getMusic($stateParams.band);
					}
				}
			})
			.state('home.band.modal', {
				url: '/modal',
				templateUrl: 'home/modal.tpl.html',
				controller: 'ModalCtrl'
			})
	})
	.controller('HomeCtrl',function($scope,$http,$state){
		$scope.searchTerm = '';
		$scope.search = function(band){
			console.log('navigating to' + $state.href('home.band', {band: band}));
			$state.go('home.band', {band: band});
		}
	})
	.controller('BandCtrl', function($scope,music,$stateParams){
		$scope.list = music.data.results;
		$scope.setTrack = function(track) {
			$scope.track = track;
		}
	})
	.controller('ModalCtrl', function($scope, $stateParams){
		console.log($scope.track);
	})



