angular.module('app').directive('contactDirective', function(){
	return {
		restrict: 'A',
		templateUrl: 'pages/contactform.html',
		scope: {
			contact: '='
		},
		controller: function($scope, element){
			
		}
	}
})