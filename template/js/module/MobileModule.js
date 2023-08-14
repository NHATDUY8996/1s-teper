export default function MobileModule() {
    const burgerBtn = document.getElementById("hamburger");

    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const body = document.getElementsByTagName("body")[0];
    const header = document.querySelector(".header");
    const mobileClose = document.querySelector(".mobile-close");
    let isOpen = false;

    function HandleOpen() {
        isOpen = !isOpen;
        if (isOpen) {
            // burgerBtn.classList.add("active");
            mobile.classList.add("open");
            mobileOverLay.classList.add("open");
            body.classList.add("no-scroll");

        } else {
            // burgerBtn.classList.remove("active");
            mobile.classList.remove("open");
            mobileOverLay.classList.remove("open");
            body.classList.remove("no-scroll");
        }
    }

    function HandleClose() {
        isOpen = false;
        // burgerBtn.classList.remove("active");
        mobile.classList.remove("open");
        mobileOverLay.classList.remove("open");
        header.classList.remove("sticky");
        body.classList.remove("no-scroll");
    }

    // if (burgerBtn) {
    //     burgerBtn.addEventListener("click", () => {
    //         HandleOpen()
    //     });
    // }
    if (mobileClose) {
        mobileClose.addEventListener("click", function () {
            HandleClose()
        });
    }
    if (mobileOverLay) {
        mobileOverLay.addEventListener("click", function () {
            HandleClose()
        });
    }
    const menuNavs = document.querySelectorAll(".header .menu-nav");
    if (menuNavs) {
        menuNavs.forEach((item) => {
            const menuLinks = item.querySelectorAll(".menu-item.dropdown .menu-link");
            menuLinks.forEach((item) => {
                const contentOld = item.innerHTML;
                const contentNew = `${contentOld} <i class="fas fa-caret-down"></i>`;
                item.innerHTML = contentNew;
            });
        });
    }
    const arrowIcon = document.querySelectorAll(
        ".mobile-nav .menu-list .menu-item a i"
    );
    if (arrowIcon) {
        arrowIcon.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const menu =
                    item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
                $(menu).slideToggle();
                $(item.parentElement.parentElement).toggleClass("active");
            });
        });
    }

    // animation placeholder
    const texts = ["Tim kiếm..."];
    const input = document.querySelector(".search-inputMoblie");
    const animationWorker = function (input, texts) {
        this.input = input;
        this.defaultPlaceholder = this.input.getAttribute("placeholder");
        this.texts = texts;
        this.curTextNum = 0;
        this.curPlaceholder = "";
        this.blinkCounter = 0;
        this.animationFrameId = 0;
        this.animationActive = false;
        this.input.setAttribute("placeholder", this.curPlaceholder);

        this.switch = (timeout) => {
            this.input.classList.add("imitatefocus");
            setTimeout(() => {
                this.input.classList.remove("imitatefocus");
                if (this.curTextNum == 0)
                    this.input.setAttribute("placeholder", this.defaultPlaceholder);
                else this.input.setAttribute("placeholder", this.curPlaceholder);

                setTimeout(() => {
                    this.input.setAttribute("placeholder", this.curPlaceholder);
                    if (this.animationActive)
                        this.animationFrameId = window.requestAnimationFrame(this.animate);
                }, timeout);
            }, timeout);
        };

        this.animate = () => {
            if (!this.animationActive) return;
            let curPlaceholderFullText = this.texts[this.curTextNum];
            let timeout = 120;
            if (
                this.curPlaceholder == curPlaceholderFullText + "|" &&
                this.blinkCounter == 3
            ) {
                this.blinkCounter = 0;
                this.curTextNum =
                    this.curTextNum >= this.texts.length - 1 ? 0 : this.curTextNum + 1;
                this.curPlaceholder = "|";
                this.switch(100);
                return;
            } else if (
                this.curPlaceholder == curPlaceholderFullText + "|" &&
                this.blinkCounter < 3
            ) {
                this.curPlaceholder = curPlaceholderFullText;
                this.blinkCounter++;
            } else if (
                this.curPlaceholder == curPlaceholderFullText &&
                this.blinkCounter < 3
            ) {
                this.curPlaceholder = this.curPlaceholder + "|";
            } else {
                this.curPlaceholder =
                    curPlaceholderFullText
                        .split("")
                        .slice(0, this.curPlaceholder.length + 1)
                        .join("") + "|";
                timeout = 100;
            }
            this.input.setAttribute("placeholder", this.curPlaceholder);
            setTimeout(() => {
                if (this.animationActive)
                    this.animationFrameId = window.requestAnimationFrame(this.animate);
            }, timeout);
        };

        this.stop = () => {
            this.animationActive = false;
            window.cancelAnimationFrame(this.animationFrameId);
        };

        this.start = () => {
            this.animationActive = true;
            this.animationFrameId = window.requestAnimationFrame(this.animate);
            return this;
        };
    };

    document.addEventListener("DOMContentLoaded", () => {
        let aw = new animationWorker(input, texts).start();
        input.addEventListener("focus", (e) => aw.stop());
        input.addEventListener("blur", (e) => {
            aw = new animationWorker(input, texts);
            if (e.target.value == "") setTimeout(aw.start, 120);
        });
    });
}