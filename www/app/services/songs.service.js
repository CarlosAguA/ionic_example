(function (){
' use strict' ;

 angular.module('starter').service('songService',songService);

 songService.$inject = ['$http'];

 function songService($http){

    var service = {
     getSongs : getSongs
     };


 function getSongs() {
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
