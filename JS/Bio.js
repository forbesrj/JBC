/**
 * Created by Ryan on 9/29/13.
 */
$(document).ready(function(){
    createStoryJS({
        source: 'https://docs.google.com/spreadsheet/pub?key=0Aiu2AFHb9iYTdHI2Umk4MzB3N290cmh1Y1ZDNDcybGc&output=html',
        width: '100%',
        height: '600',
        embed_id: 'timeline',
        hash_bookmark: true,
        gmap_key: 'AIzaSyBoiMdVvMKneFxxzjsjm9xYvtlFWEzJ3e8'
    });


    window.onscroll =function() {
        var speed = 16.0;
        $('.slider-container-mask').style.backgroundPosition = (-window.pageXOffset / speed) + "px " + (-window.pageYOffset / speed) + "px";
    };
});