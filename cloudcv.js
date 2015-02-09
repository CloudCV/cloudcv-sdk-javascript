/**
 * @author Eugene Zatepyakin / http://inspirit.ru/
 */

(function(global) {
    "use strict";

    var BASE_URL = 'http://api.cloudcv.io/v1/';

    var analyze_t = (function () {
        function analyze_t(baseUrl) {

            this.dominantColors = function(image, callback) {
                if (typeof image == 'string') {
                    $.get(baseUrl + encodeURIComponent(image), function( response ) {
                        callback(null, response);
                    });
                }
                else {
                    var data = new FormData();
                    data['image'] = image;

                    $.post(baseUrl, data, function( response ) {
                        callback(null, response);
                    });
                }
            };
        }
        return analyze_t;
    })();

    var image_t = (function () {
        function image_t(baseUrl) {
            this.analyze = new analyze_t(baseUrl + 'analyze/');
        }
        return image_t;
    })();


    //
    global.image = new image_t(baseUrl + 'image/');

})(cloudcv);