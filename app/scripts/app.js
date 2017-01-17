(function() {
    function config($stateProvider, $localProvider) {
        $localProvider
//            .html5Mode({
//                enable: true, //by setting this to true, it will disable the hashbang
//                requireBase: false //this is not required, however, it will avoid a common $location error
//        }); //this is only to make the website look nice, however, it throws more errors than not
        
        $stateProvider
            .state("landing", {
                url: "/",
                controller: "LandingCtrl as landing",
                templateUrl: "/templates/landing.html"
            })
            .state("album", {
                url: "/album",
                templateUrl: "/templates/album.html"
            })
            .state("collection", {
                url: "/collection",
                controller: "CollectionCtrl as collection",
                templateUrl: "/templates/collection.html"
            });
    }
    
    angular
        .module("blocJams", ["ui.router"])
        .config(config);
    
})();