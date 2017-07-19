(function() {
    'use strict';

 angular.module('starter').controller('findController',FindController) ;

 FindController.$inject = ['$scope','$rootScope', 'songService'];

   function FindController($scope, $rootScope, songService ){

     var vm = this;

     vm.songs= [];

     vm.discardSong = discardSong;
     vm.addFavorite = addFavorite;
     vm.getSongs = getSongs;

     function getSongs(){
       songService.getSongs().then(function(result){
         vm.songs = result;
       }
     }

     function discardSong(index){
       console.log("left");
       vm.songs.splice(index, 1);
     }

     function addFavorite (index){
       console.log("right");
       $rootScope.favorites.push(vm.songs[0]);
       vm.songs.splice(0,1);

     }


  }

  })();
