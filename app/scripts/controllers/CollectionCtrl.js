(function() {
   function CollectionCtrl(Fixtures) {
       this.album = Fictures.getCollection(12);
   } 
    angular
        .module("blocJams")
        .controller("CollectionCtrl", ["Fixtures", CollectionCtrl]);
    
})();