const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // 切換導航選單
    burger.addEventListener('click', () => {
        // 切換導航
        nav.classList.toggle('nav-active');

        // 動畫連結
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // 漢堡選單動畫
        burger.classList.toggle('toggle');
    });
}

// 在手機版點擊連結後關閉選單
const closeNavOnClick = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                // 重置動畫
                document.querySelectorAll('.nav-links li').forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
}

// 初始化
navSlide();
closeNavOnClick();