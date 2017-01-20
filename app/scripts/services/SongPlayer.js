(function(){
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        var currentAlbum = Fixtures.getAlbum();
        
        /**
        * @function: getSongIndex
        * @desc: gets the index of the song
        * @param: {Object}
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        /**
        * @desc: current audio file
        * @type: {Object}
        */
        SongPlayer.currentSong = null;
        
        /**
        * @desc: Buzz object audio file
        * @type: {Object}
        */
        var currentBuzzObject = null;
        
        /**
        * @function: setSong
        * @desc: Stops currently playing song and loads new audio file as currentBuzzObject
        * @param: {Object} song
        */
        var setSong = function(song) {
            if(currentBuzzObject) {
                currentBuzzObject.stop();
                currentBuzzObject = null;
            }  
            currentBuzzObject = new buzz.aound(song.audioUrl, {
                formats: ["mp3"],
                preload: true
            });
            SongPlayer.currentSong = song;
        };
        
        /**
        * @function: playSong
        * @desc: Plays new audio file as currentBuzzObject
        * @param: {Object} song
        */
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        /**
        * @function: SongPlayer.play
        * @desc: Stops currently playing song, loads new audio file as currentBuzzObject, then plays it
        * @param: {Object} song
        */
        SongPlayer.play = function(song) {
            song = song || SongPLayer.currentSong;
            if(SongPlayer.currentSong !== song) {
                setSong;
                playSong;
                
            } else if(SongPlayer.currentSong === song) {
                if(currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
        
        /**
        * @function: SongPlayer.pause
        * @desc: pauses currently playing song
        * @param: {Object} song
        */
        SongPlayer.pause = function(song) {
            song = song || SongPayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        /**
        * @function: SongPlayer.previous
        * @desc: plays previously played song
        * @param: {Object} song
        */
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            if(currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
    
        return SongPlayer;
    }

    angular
        .module("blocJams")
        .factory("SongPlayer", SongPlayer);
 })();