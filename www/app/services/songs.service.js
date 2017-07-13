(function (){
' use strict' ;

 angular.module('starter').service('songService',songService);

 songService.$inject = ['$http'];

 function songService($http){

    var service = {
     getUsers : getUsers
     };


 function getUsers() {
    return $http.get('https://ionic-songhop.herokuapp.com/recommendations')
    .then(function(response){
      return response.data;
   })
   .catch(function(){
      console.log('Error');
     });
   }

    return service;

  }


})();
