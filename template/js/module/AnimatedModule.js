export default function AnimatedModule() {
    let $window = $(window);

    function scrollAddClass(el, className) {
        $(el).each(function () {
            let el = this;
            if (
                $(el).offset().top <
                $window.scrollTop() + ($window.height() / 10) * 8
            ) {
                $(el).addClass(className);
            }
        });
    }

    function bindImageAnimations() {
        scrollAddClass(".scroll-item", "is-inview");

        $window.on("scroll", function () {
            scrollAddClass(".scroll-item", "is-inview");
        });
    }
    bindImageAnimations();

    let moveItems = document.querySelectorAll('.move-item');
    let height = window.innerHeight;
    if (moveItems.length > 0 && window.innerWidth > 1200) {
        window.addEventListener('scroll', () => {
            moveItems.forEach((item) => {
                let pos = item.getBoundingClientRect().top;
                if (pos > -height / 2 && pos < height) {
                    let Y = (pos / height * 100);
                    if (item.classList.contains("mx")) {
                        item.style.transform = `translateX(` + Y + `px)`;
                    } else {
                        item.style.transform = `translateY(` + Y + `px)`;
                    }
                }
            });
        });
    }


    //Scroll Percent page
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            scrollProgress();
        }
    });

    function scrollProgress() {
        let winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        let height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        const progress = document.querySelector(".header-progress")
        if (progress) {
            progress.style.width = scrolled + "%";
        }
    }
    scrollProgress();


    // animation bottom to top
    function bottomToTop() {
        var bottomToTops = document.querySelectorAll(".bottomToTop");

        for (var i = 0; i < bottomToTops.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = bottomToTops[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                bottomToTops[i].classList.add("actives");
            } else {
                bottomToTops[i].classList.remove("actives");
            }
        }
    }

    window.addEventListener("scroll", bottomToTop);

    // animation right to left
    function rightToLeft() {
        var rightToLefts = document.querySelectorAll(".rightToLeft");

        for (var i = 0; i < rightToLefts.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = rightToLefts[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                rightToLefts[i].classList.add("actives");
            } else {
                rightToLefts[i].classList.remove("actives");
            }
        }
    }

    window.addEventListener("scroll", rightToLeft);

    // animation left to right
    function leftToRight() {
        var leftToRights = document.querySelectorAll(".leftToRight");

        for (var i = 0; i < leftToRights.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = leftToRights[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                leftToRights[i].classList.add("actives");
            } else {
                leftToRights[i].classList.remove("actives");
            }
        }
    }

    window.addEventListener("scroll", leftToRight);

}