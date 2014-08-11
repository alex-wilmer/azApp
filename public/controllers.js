app.controller('home', function($scope, $http) {
	$scope.save = function(text) {
		$scope.log = text;
		socket.emit('save', {
			text: text
		});
	};
	$http.get('log').success(function(data) {$scope.log = data;});
}).controller('about', function($scope) {
	$scope.lifeStory = "I am a coder with ambition";
})