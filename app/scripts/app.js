(function() {
    function config($stateProvider, $localProvider) {
        $localProvider
            .html5Mode({
                enable: true, //by setting this to true, it will disable the hashbang
                requireBase: false //this is not required, however, it will avoid a common $location error
        });
        
        $stateProvider
            .state("landing", {
                url: "/",
                templateUrl: "/templates/landing.html"
            })
            .state("ablum", {
                url: "/album",
                templateUrl: "/templates/album.html"
            })
            .state("collection", {
                url: "/collection",
                templateUrl: "/templates/collection.html"
            });
    }
    
    angular
        .module("blocJams", ["ui.router"])
        .config(config);
    
})();