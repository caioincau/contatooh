angular.module('contatooh').controller('ContatosController',
  function($scope,$resource) {
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
    	};
    	
    	var Contato = $resource('/contatos/:id');

   		 Contato.query(
	        function(contatos) {
	          $scope.contatos = contatos;
	        },
	        function(erro) {
	           console.log("Nao foi possivel obter a lista de contatos");
	           console.log(erro);
		} );
    	

});