export default function HeaderModule() {

    const header = document.querySelector(".header");
    const mobile = document.querySelector(".mobile");
    const mobileOverLay = document.querySelector(".mobile-overlay");
    const search = document.querySelector(".search-mona");

    function HandleHeader() {
        if (header && mobile && mobileOverLay) {
            if (window.scrollY > 0) {
                header.classList.add("sticky");
                mobile.classList.add("sticky");
                mobileOverLay.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
                mobile.classList.remove("sticky");
                mobileOverLay.classList.remove("sticky");
            }
        }
    }
    window.addEventListener("scroll", function () {
        HandleHeader();
    });
    $(document).ready(function () {
        HandleHeader();
    });
    // click dropdown show menulist
    const dropdownmenu = document.querySelector('.dropdown');
    const menulist = document.querySelector('.dropdown .menu-list');

    dropdownmenu.addEventListener('click', () => {
        menulist.style.display = (menulist.style.display === "block") ? "none" : "block";
    })
    // change icon menu mobile
    const totalBars = document.querySelectorAll(".header__btn-showMenuMb");
    const mobileOverLayMb = document.querySelector('.overlay');
    const headerMobileList = document.querySelector('.header__mobile-list');

    function toggleMenu() {
        totalBars.forEach(bar => {
            bar.classList.toggle("show");
        });

        mobileOverLayMb.classList.toggle('open');
        headerMobileList.classList.toggle('open');
    }

    function handleBarClick() {
        this.classList.toggle('opened');
        this.setAttribute('aria-expanded', this.classList.contains('opened'));
        toggleMenu();
    }

    totalBars.forEach(bar => {
        bar.onclick = handleBarClick;
    });

    mobileOverLayMb.onclick = function () {

        totalBars.forEach(bar => {
            handleBarClick.call(bar);
            mobileOverLayMb.classList.remove('open');
            headerMobileList.classList.remove('open');
        });
    };

    // search
    const header__search = document.querySelector('.header__search');
    const searchPc = document.querySelector('.search-pc');
    let isActives = false; // khởi tạo biến isActive
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (
            !searchPc.contains(targetElement) &&
            !header__search.contains(targetElement)
        ) {
            searchPc.classList.remove('active');
            isActives = false; // đặt lại isActive là false
        }
    });
    header__search.addEventListener('click', () => {
        if (!isActives) { // nếu isActive là false
            searchPc.classList.add('active'); // thêm lớp 'active'
            isActives = true;
        } else {
            searchPc.classList.remove('active'); // thêm lớp 'active'
            isActives = false;
        }
        // isActive = !isActive; // đảo ngược giá trị của isActive
    });

    // search mobile
    const header__searchMobile = document.querySelector('.header__search-mobile');
    const searchMobile = document.querySelector('.search-main');
    let isActive = false;
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (
            !searchMobile.contains(targetElement) &&
            !header__searchMobile.contains(targetElement)
        ) {
            searchMobile.classList.remove('active');
            isActive = false;
        }
    });
    header__searchMobile.addEventListener('click', () => {
        if (isActive) {
            searchMobile.classList.remove('active');
            isActive = false;
        } else {
            searchMobile.classList.add('active');
            isActive = true;
        }
    })
}