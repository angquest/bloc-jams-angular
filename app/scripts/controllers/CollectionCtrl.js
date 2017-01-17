(function() {
   function() {
   } 
    angular
        .module("blocJams")
        .controller("CollectionCtrl", CollectionCtrl);
    
    function CollectionCtrl() {
        this.album = [];
        for(var i = 0; i < 12; i++){
            this.albums.push(angular.copy(albumPicasso));
        }
    }
    
})();