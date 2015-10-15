(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;
		vm.newMemb = {};


HomeFactory.getMembs().then(function(data){
	vm.members = data;
});

vm.addMemb = function(){
	HomeFactory.createMemb(vm.newMemb).then(function(res){
		vm.newMemb = res;
		vm.members.push(vm.newMemb);
		vm.newMemb ={};
	});
};

vm.deleteMemb = function(del){
	HomeFactory.removeMemb(del.id).then(function(){
		vm.members.splice(vm.members.indexOf(del), 1);
	});
};

vm.deactivMemb = function(de){
	HomeFactory.deactiv(de).then(function(){
		de.deactiv = new Date();
	});
};

vm.reactivMemb = function(re){
	HomeFactory.reactiv(re).then(function(){
		re.deactiv = null;
	});
};




	}
})();
