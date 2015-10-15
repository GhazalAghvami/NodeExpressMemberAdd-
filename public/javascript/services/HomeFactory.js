(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	function HomeFactory($http, $q) {
		var o = {};

o.getMembs = function(){
	var q =$q.defer();
	$http.get('/api/v1/membr').then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.createMemb = function(newMemb){
	var q =$q.defer();
	$http.post('/api/v1/membr', newMemb).then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.removeMemb = function(id){
	var q =$q.defer();
	$http.delete('/api/v1/membr/'+id).then(function(){
		q.resolve();
	});
	return q.promise;
};

o.deactiv = function(de){
	var q =$q.defer();
	$http.put('/api/v1/membr/'+ de.id).then(function(){
		q.resolve();
	});
	return q.promise;
};

o.reactiv = function(re){
	var q =$q.defer();
	$http.patch('/api/v1/membr/'+ re.id).then(function(){
		q.resolve();
	});
	return q.promise;
};

		return o;
	}
})();
