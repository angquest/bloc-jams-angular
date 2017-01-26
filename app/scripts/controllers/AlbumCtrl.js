(function() {
    function AlbumCtrl(Fixtures, SongPlayer){
        
        //bind album data into collection controller so that view has access to it
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlayer;    
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
    
})();