(function() {
    'use strict';
//Se inyecta la directiva adicional en el controoler directamente * investigar solo dios Sabe
 angular.module('starter').controller('findController',FindController, 'ngAudio' ) ;

 FindController.$inject = ['$scope','$rootScope', 'songService' , '$ionicPlatform'  ];

   function FindController( $scope, $rootScope, songService, $ionicPlatform, ngAudio){

     $ionicPlatform.ready(start);
     var vm = this;

     vm.songs= [];

     vm.discardSong = discardSong;
     vm.addFavorite = addFavorite;
     vm.getSongs = getSongs;

     function start() {
       getSongs();

     }

     function getSongs(){
         songService.getSongs()
            .then(function(result){
          vm.songs = vm.songs.concat(result);
       })
     }

     function discardSong(index){

       vm.songs.splice(index, 1);
         console.log(vm.songs.length)
       if(vm.songs.length <3){
            console.log("menor a 3")
         getSongs();
       }
     }

     function addFavorite (index){

       $rootScope.favorites.push(vm.songs[0]);
       vm.songs.splice(0,1);
      console.log(vm.songs.length)
       if (vm.songs.length < 3){
         console.log("menor a 3")
         getSongs();
       }

     }


  }

  })();
