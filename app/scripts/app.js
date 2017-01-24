(function() {
    function config($stateProvider, $localProvider) {
        $localProvider
            .html5Mode({
                enable: true, //by setting this to true, it will disable the hashbang
                requireBase: false //this is not required, however, it will avoid a common $location error
        }); //this is only to make the website look nice, however, it throws more errors than not
        
        $stateProvider
            .state("landing", {
                url: "/",
                controller: "LandingCtrl as landing",
                templateUrl: "/templates/landing.html"
            })
            .state("album", {
                url: "/album",
                controller: "AlbumCtrl as album",
                templateUrl: "/templates/album.html"
            })
            .state("collection", {
                url: "/collection",
                controller: "CollectionCtrl as collection",
                templateUrl: "/templates/collection.html"
            });
    }
    
    angular
        .module("blocJams", ["ui.router"]) // With UI-Router, an application can be in different states that determine what                                         to display when a user navigates to a specific route.
        .config(config); //configures behavior and look of the app
    
})();