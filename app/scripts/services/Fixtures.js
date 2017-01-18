(function() {
    function Fixtures() {
        var Fixtures = {};
        var albumPicasso = {
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/app/assets/images/album_covers/01.png',
            songs: [
                {title: 'I\'m so Blue', duration: 161.71, audioURL: 'assets/music/blue'},
                {title: 'Green with Envy', duration: 103.96, audioURL: 'assets/music/green'},
                {title: 'Lady in Red', duration: 268.45, audioURL: 'assets/music/red'},
                {title: 'Pink Flamingo', duration: 153.14, audioURL: 'assets/music/pink'},
                {title: 'Magenta, the Pup', duration: 374.22, audioURL: 'assets/music/magenta'}
            ]
        };

        var albumMarconi = {
            title: 'The Telephone',
            artist: 'Guglielmo Marconi',
            label: 'EM',
            year: '1909',
            albumArtUrl: '/app/assets/images/album_covers/20.png',
            songs: [
                {title: 'Hello, Operator?', duration: '1:01'},
                {title: 'Ring, ring, ring', duration: '5:01'},
                {title: 'Fits in your pocket', duration: '3:21'},
                {title: 'Can you hear me now?', duration: '3:14'},
                {title: 'Wrong phone number', duration: '2:15'}
            ]
        };
        
        Fixtures.getAlbum = function() {
            return albumPicasso;
        };
        
        Fixtures.getCollection = function(numberOfAlbums) {
            return albumPicasso[numberOfAlbums];
        };
        
        return Fixtures;
        
    }
    
    angular
        .module("blocJams")
        .factory("Fixtures", Fixtures);  
})();