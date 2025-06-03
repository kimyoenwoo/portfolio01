document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메인 메뉴 토글
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('mobile-nav-open');
            mobileMenuBtn.classList.toggle('is-active');
        });
    }
    


});