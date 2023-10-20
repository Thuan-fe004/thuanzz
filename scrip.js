window.onscroll = function() {scrollFunction()};
            function scrollFunction() {
            if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
                document.getElementById("menu").style.top = "0";
            } else {
                document.getElementById("menu").style.top = "-200px";
            }
            }