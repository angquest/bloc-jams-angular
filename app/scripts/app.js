(function() {
    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode({
                enabled: true, //by setting this to true, it will disable the hashbang
                requireBase: false //this is not required, however, it will avoid a common $location error
        }); //this is only to make the website look nice, however, it throws more errors than no
        
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
            
            //added this to work around 
//          $urlRouterProvider //If the states above are not located, then "otherwise" will
//              .otherwise("/")
    }
    
    angular
        .module('blocJams', ['ui.router']) // With UI-Router, an application can be in different states that determine what                                         to display when a user navigates to a specific route.
        .config(config); //configures behavior and look of the app
    
})();