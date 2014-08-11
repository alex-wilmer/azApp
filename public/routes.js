app.config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) {
		$routeProvider.
		  when('/', {
		  	templateUrl: 'views/home.html',
		  	controller: 'home'
		  }).
		  when('/about', {
		  	templateUrl: 'views/about.html',
		  	controller: 'about'
		  }).
		  otherwise({
		  	redirectTo: '/'
		  });

		 $locationProvider.html5Mode(true);
	}]);