angular.module('contatooh').controller('ContatosController',
  function($scope,$http) {
  		$scope.contatos  = [
    	  {
	        "_id": 1,
	        "nome": "Contato Angular 1",
	        "email": "cont1@empresa.com.br"
		}, {
	        "_id": 2,
	        "nome": "Contato Angular 2",
	        "email": "cont2@empresa.com.br"
		}, {
	        "_id": 3,
	        "nome": "Contato Angular 3",
	        "email": "cont3@empresa.com.br"
		} ];
  	  	$scope.total = 0;
  	  	$scope.filtro = '';
  	  	$scope.incrementa = function() {
      		$scope.total++;
    	};G
    	
    	$http.get('/contatos')
        .success(function(data) {
            $scope.contatos = data;
        })
        .error(function(statusText) {
            console.log("Não foi possível obter a lista de contatos");
            console.log(statusText);
});

});