function carouselNormalization() {
    var items = $('.carousel .carousel-item'), //grab all slides
        heights = [], //create empty array to store height values
        lowest; //create variable to make note of the shortest slide

    if (items.length) {
        function normalizeHeights() {
            items.each(function () { //add heights to array
                heights.push($(this).height());
            });
            lowest = Math.min.apply(null, heights); //cache lowest value
            console.log(lowest);
            items.each(function (i, el) {
                $(el).children().first().css('height', lowest + 'px');
                $(el).children().first().css('margin', 'auto');
            });
        };
        normalizeHeights();

        $(window).on('resize orientationchange', function () {
            lowest = 0, heights.length = 0; //reset vars

            normalizeHeights(); //run it again 
        });
    }
}