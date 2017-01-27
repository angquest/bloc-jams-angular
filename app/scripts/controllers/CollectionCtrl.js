//creates a controller to manage UI in the collection state(collection.html template)
(function() {
   function CollectionCtrl(Fixtures) {
       
       //binds album data into collection so that View has access to it
       this.album = Fixtures.getCollection(12); //gives controller specific properties --> view of collection
       //looped in Fixtures.js
   } 
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
    
})();