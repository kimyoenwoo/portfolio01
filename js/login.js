// 탭 전환 스크립트
const loginTabBtn = document.getElementById('loginTabBtn');
const registerTabBtn = document.getElementById('registerTabBtn');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
loginTabBtn.onclick = function() {
    loginTabBtn.classList.add('active');
    registerTabBtn.classList.remove('active');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    // 회원가입 폼 초기화
    if (registerForm) {
        registerForm.reset();
        // 에러 메시지, 빨간 테두리 제거
        registerForm.querySelectorAll('.form-error').forEach(e => { e.style.display = 'none'; });
        registerForm.querySelectorAll('.input-error').forEach(e => { e.classList.remove('input-error'); });
    }
    // 로그인 폼 에러 메시지 초기화
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.querySelectorAll('.form-error').forEach(e => { e.style.display = 'none'; });
    }
}
registerTabBtn.onclick = function() {
    registerTabBtn.classList.add('active');
    loginTabBtn.classList.remove('active');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    // 로그인 폼 에러 메시지 초기화
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.querySelectorAll('.form-error').forEach(e => { e.style.display = 'none'; });
    }
}

// 회원가입 유효성 검사 및 에러 표시
const registerForm = document.getElementById('registerForm');
if (registerForm) {
registerForm.addEventListener('submit', function(e) {
    let valid = true;
    // 이메일
    const email = registerForm.email;
    const emailError = email.parentElement.nextElementSibling;
    if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        email.classList.add('input-error');
        emailError.style.display = 'block';
        emailError.textContent = '올바른 이메일을 입력하세요.';
        valid = false;
    } else {
        email.classList.remove('input-error');
        emailError.style.display = 'none';
    }
    // 이름
    const name = registerForm.name;
    const nameError = name.nextElementSibling;
    if (!name.value) {
        name.classList.add('input-error');
        nameError.style.display = 'block';
        nameError.textContent = '이름을 입력하세요.';
        valid = false;
    } else {
        name.classList.remove('input-error');
        nameError.style.display = 'none';
    }
    // 비밀번호
    const pw = registerForm.password;
    const pwError = pw.nextElementSibling;
    if (!pw.value || pw.value.length < 6) {
        pw.classList.add('input-error');
        pwError.style.display = 'block';
        pwError.textContent = '비밀번호는 6자 이상이어야 합니다.';
        valid = false;
    } else {
        pw.classList.remove('input-error');
        pwError.style.display = 'none';
    }
    // 비밀번호 확인
    const pw2 = registerForm.password2;
    const pw2Error = pw2.nextElementSibling;
    if (pw2.value !== pw.value) {
        pw2.classList.add('input-error');
        pw2Error.style.display = 'block';
        pw2Error.textContent = '비밀번호가 맞지 않습니다.';
        valid = false;
    } else {
        pw2.classList.remove('input-error');
        pw2Error.style.display = 'none';
    }
    // 휴대폰
    const phone = registerForm.phone;
    const phoneError = phone.parentElement.nextElementSibling;
    if (!phone.value || !/^01[016789][0-9]{7,8}$/.test(phone.value.replace(/-/g, ''))) {
        phone.classList.add('input-error');
        phoneError.style.display = 'block';
        phoneError.textContent = '올바른 휴대폰 번호를 입력하세요.';
        valid = false;
    } else {
        phone.classList.remove('input-error');
        phoneError.style.display = 'none';
    }
    // 인증번호
    const cert = registerForm.cert;
    const certError = cert.parentElement.nextElementSibling;
    if (!cert.value) {
        cert.classList.add('input-error');
        certError.style.display = 'block';
        certError.textContent = '인증번호를 입력하세요.';
        valid = false;
    } else {
        cert.classList.remove('input-error');
        certError.style.display = 'none';
    }
    // 약관 필수 체크
    const agree1 = registerForm.agree1;
    const agree2 = registerForm.agree2;
    if (!agree1.checked || !agree2.checked) {
        alert('필수 약관에 동의해주세요.');
        valid = false;
    }
    if (!valid) e.preventDefault();
});
}
// 전체동의 체크박스 기능
const agreeAll = document.getElementById('agree_all');
const agreeItems = document.querySelectorAll('.agree-item');
if (agreeAll) {
agreeAll.addEventListener('change', function() {
    agreeItems.forEach(cb => cb.checked = agreeAll.checked);
});
agreeItems.forEach(cb => {
    cb.addEventListener('change', function() {
        if (!cb.checked) agreeAll.checked = false;
        else if ([...agreeItems].every(c => c.checked)) agreeAll.checked = true;
    });
});
}
// 아이디/비밀번호 찾기 팝업
const findPopupBg = document.getElementById('findPopupBg');
const findIdPopup = document.getElementById('findIdPopup');
const findPwPopup = document.getElementById('findPwPopup');
const findIdBtn = document.getElementById('findIdBtn');
const findPwBtn = document.getElementById('findPwBtn');
function openPopup(type) {
    findPopupBg.style.display = 'flex';
    if (type === 'id') {
        findIdPopup.style.display = 'flex';
        findPwPopup.style.display = 'none';
    } else {
        findIdPopup.style.display = 'none';
        findPwPopup.style.display = 'flex';
    }
    document.body.style.overflow = 'hidden';
}
function closePopup() {
    findPopupBg.style.display = 'none';
    findIdPopup.style.display = 'none';
    findPwPopup.style.display = 'none';
    document.body.style.overflow = '';
}
if (findIdBtn && findPwBtn) {
    findIdBtn.onclick = function(e) { e.preventDefault(); openPopup('id'); };
    findPwBtn.onclick = function(e) { e.preventDefault(); openPopup('pw'); };
}
if (findPopupBg) {
    findPopupBg.addEventListener('click', function(e) {
        if (e.target === findPopupBg) closePopup();
    });
    document.querySelectorAll('.find-popup-close').forEach(btn => {
        btn.onclick = closePopup;
    });
}
// 모바일 키보드 대응: 팝업이 화면 중앙에 유지되도록
window.addEventListener('resize', function() {
    if (findPopupBg && findPopupBg.style.display !== 'none') {
        window.scrollTo(0, 0);
    }
});

// 약관보기 팝업
const termsPopupBg = document.getElementById('termsPopupBg');
const termsPopup = document.getElementById('termsPopup');
const termsPopupTitle = document.getElementById('termsPopupTitle');
const termsPopupContent = document.getElementById('termsPopupContent');
const termsContents = {
    terms1: '본 약관은 서비스 이용에 관한 기본적인 사항을 규정합니다.\n\n1. 목적: 본 약관은 서비스의 이용조건 및 절차, 이용자와 회사의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.<br>2. 이용자의 의무: 이용자는 본 약관 및 관계법령을 준수해야 하며, 타인의 권리를 침해해서는 안됩니다.<br>3. 기타: 기타 사항은 회사의 정책 및 관련 법령에 따릅니다.',
    terms2: '회사는 서비스 제공을 위해 최소한의 개인정보를 수집하며, 수집된 정보는 목적 외로 사용되지 않습니다.<br>1. 수집항목: 이름, 이메일, 휴대폰번호 등<br>2. 이용목적: 회원관리, 서비스 제공, 고지사항 전달 등<br>3. 보유기간: 회원 탈퇴 시까지',
    terms3: '뉴스레터 및 이벤트 안내 메일 수신에 동의하실 경우, 최신 소식 및 혜택 정보를 받아보실 수 있습니다. 동의하지 않아도 서비스 이용에 제한이 없습니다.'
};
document.querySelectorAll('.auth-link[data-term]').forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        const termKey = link.getAttribute('data-term');
        // 제목은 위, 본문은 아래에만!
        let title = '';
        if(termKey === 'terms1') title = '이용약관(필수)';
        else if(termKey === 'terms2') title = '개인정보 수집 및 이용(필수)';
        else if(termKey === 'terms3') title = '뉴스레터 메일 수신(선택)';
        termsPopupTitle.textContent = title;
        termsPopupContent.innerHTML = termsContents[termKey] || '약관 내용이 없습니다.';
        termsPopupBg.style.display = 'flex';
        termsPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };
});
if (termsPopupBg) {
    termsPopupBg.addEventListener('click', function(e) {
        if (e.target === termsPopupBg) closeTermsPopup();
    });
    termsPopup.querySelector('.find-popup-close').onclick = closeTermsPopup;
}
function closeTermsPopup() {
    termsPopupBg.style.display = 'none';
    termsPopup.style.display = 'none';
    document.body.style.overflow = '';
} 