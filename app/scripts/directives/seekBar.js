(function() {
    function seekBar() {
        var calculatePercent = function(seekBar, event) { //Calculates the horizontalpercent along the seek bar where thw                                                         event (passed in from the view as $event) occurred.
            var offsetX = event.pageX - seekBar.offset().left;
            var seekBarWidth = seekBar.width();
            var offsetXPercent = offsetX / seekBarWidth;
            offsetXPercent = Math.max(0, offsetXPercent);
            offsetXPercent = Math.min(1, offsetXPercent);
            return offsetXPercent;
        }
        
        return {
           templateUrl: "/templates/directives/seek_bar.html", //Specifices a URL from which the directive will load a                                                             template
           replace: true, //Specifies what the template should replace. If true, the template replaces the directive's                        element. if false, the template replaces the contents of the directive's element.
           restrict: "E", //Restricts the directive to a specific declaration style: element E, attribute A, class C, and                     Comment M. If omitted, the defaults (E and A) are used. Multiple restrictions are stringed                         together, for exp, AE or AEC.
           scope: { }, //Specifies that a new scope be created for the directive.
           link: function(scope, element, attributes) { //Responsible for registering DOM listeners and updating the DOM.                                                    This is where we put most of the directive logic. The order of                                                    these parameters matters (scope, element, attributes).
               //directive logic to return
               scope.value = 0; //Holds the value of the seek bar, such as the currently playing song time or the current                        volume. Default value is 0.
               scope.max = 100; //Holds the max value of the song and volume seek bars. Default value is 100.
               
               var seekBar = $(element); //Holds the ellment that matches the directive (<seek-bar>) as a jQuery object so we                             can call jQuery methods on it.
               
               /**
               * @function: percentString
               * @desc: Calculates a percent based on the value and max value of a seek bar.
               * @param: {Object}
               */
               var percentString = function() {
                   var value = scope.value;
                   var max = scope.max;
                   var percent = value / max * 100;
                   return percent + "%";
               };
               
               scope.fillstyle = function() {
                   return {width: percentString()}; //Returns the width of the seek bar fill element based on the calculated                                    percent.
               };
               
               scope.onClickSeekBar = function() { //Updated the seek bar value based on the seek bar's width and the                                               location of the user's click on the seek bar.
                   var percent = calculatePercent(seekBar, event);
                   scope.value = percent * scope.max;
               };   
               
               scope.trackThumb = function() { //Similar to scope.onClickSeekBar, but uses $apply to constantly apply the                                       change in value of scope.value as the user drags the seek bar thumb.
                   $document.bind("mousemove.thumb", function(event) {
                       var percent = calculatePercent(seekBar, event);
                       scope.$apply(function() {
                          scope.value = percent * scope.max; 
                       });
                   });
                   
                   $document.bind('mouseup.thumb', function(){
                       $document.unbind('mousemove.thumb');
                       $document.unbind('mouseup.thumb');
                   });
               }
           }
       };
    }
    
    angular
        .module("blocJams")
        .directives("seekBar", ['$document', seekBar]); //$document must be injected as a dependency to us it above.
    
})();