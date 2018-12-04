

window.onpopstate = function(a) {
    if (location.hash.indexOf("_wmtz_") == -1) {

        $('#myModal').css('display', 'block');
        $('#myModal').addClass('in')

    }
}