// ios系统通过safari添加到主屏幕后，打开子链接还会跳转到safari
// stanislav.it/how-to-prevent-ios-standalone-mode-web-apps-from-opening-links-in-safari
(function(){
    if (("standalone" in window.navigator) && window.navigator.standalone) {
        var noddy, remotes = false;
        document.addEventListener('click', function(event) {
            noddy = event.target;
            while (noddy.nodeName !== "A" && noddy.nodeName !== "HTML") {
                noddy = noddy.parentNode;
            }
            if ('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
                event.preventDefault();
                document.location.href = noddy.href;
            }
        },
        false);
    }
})();