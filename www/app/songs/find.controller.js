(function() {
    'use strict';
//Se inyecta la directiva adicional en el controoler directamente * investigar solo dios Sabe
 angular.module('starter').controller('findController', FindController ) ;

 FindController.$inject = ['$scope','$rootScope', 'songService', '$ionicPlatform', 'ngAudio'];

   function FindController( $scope, $rootScope, songService, $ionicPlatform, ngAudio){

     $ionicPlatform.ready(start);

     var vm = this;
     var audio="";
     vm.songs= [];
     vm.discardSong = discardSong;
     vm.addFavorite = addFavorite;
     vm.getSongs = getSongs;
     vm.playAudio = playAudio;

     function start() {
       getSongs();

     }

     function playAudio(){
        audio = ngAudio.load(vm.songs[0].preview_url);
        audio.play();
     }

     function getSongs(){
         songService.getSongs()
            .then(function(result){
          vm.songs = vm.songs.concat(result);
          playAudio();

       })
     }

     function discardSong(index){
       vm.songs.splice(index, 1);
         playAudio();

       if(vm.songs.length <3){
           getSongs();
       }
     }

     function addFavorite (index){
        $rootScope.favorites.push(vm.songs[0]);
        vm.songs.splice(0,1);
        playAudio();

       if (vm.songs.length < 3){
          getSongs();
       }

     }


  }

  })();
