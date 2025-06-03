# 🎓 스마트교육 자산관리 솔루션

JSP 기반 프로젝트를 정적 HTML 사이트로 변환한 **스마트교육 자산관리 솔루션**입니다.

## 📋 프로젝트 개요

교육기관에서 사용하는 IT 자산(태블릿, 노트북, 데스크톱 등)을 효율적으로 관리할 수 있는 웹 기반 솔루션입니다.

### ✨ 주요 기능

- 🏠 **메인 대시보드**: 자산 현황 및 주요 알림사항 확인
- 🔐 **사용자 인증**: 로그인/회원가입 시스템
- ❓ **쉬운해결**: FAQ 및 문제해결 가이드
- 🔧 **AS예약**: 기기 수리 예약 시스템
- 📍 **서비스센터 위치**: 카카오맵 API를 활용한 지도 서비스
- 📢 **알림사항**: 공지사항 관리 시스템

## 🛠 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap Icons
- **폰트**: Pretendard
- **지도 API**: 카카오맵 API
- **서버**: Python HTTP Server / Node.js HTTP Server

## 🏗 프로젝트 구조

```
static-site/
├── 📄 index.html          # 메인 페이지
├── 🔐 login.html          # 로그인 페이지
├── 🎨 css/               # CSS 파일들
├── ⚡ js/                # JavaScript 파일들
├── 🖼️ images/            # 이미지 파일들
├── 📁 pages/             # 서브 페이지들
│   ├── easySolution.html
│   ├── asReservation.html
│   └── serviceCenter.html
├── 📢 notice/            # 알림사항 페이지들
│   ├── notice.html
│   ├── noticeView.html
│   └── noticeWrite.html
├── 📦 package.json       # Node.js 설정
├── 🐙 .gitignore        # Git 제외 파일
└── 📖 README.md         # 프로젝트 문서
```

## 🚀 실행 방법

### 1️⃣ Node.js 설치 (권장)
[Node.js 공식 사이트](https://nodejs.org/)에서 다운로드하여 설치

### 2️⃣ 의존성 설치
```bash
npm install
```

### 3️⃣ 개발 서버 실행
```bash
# 개발 서버 (포트 3000)
npm run dev

# 또는 프로덕션 서버 (포트 8080)
npm start
```

### 4️⃣ Python 서버 (대안)
Node.js가 없는 경우:
```bash
# Windows
start-server.bat

# Linux/Mac
./start-server.sh
```

### 5️⃣ 브라우저에서 확인
- **개발 서버**: http://localhost:3000
- **프로덕션 서버**: http://localhost:8080

## 🎨 디자인 특징

### 📱 반응형 디자인
- 데스크톱/태블릿/모바일 완벽 대응
- 모바일 햄버거 메뉴
- 터치 친화적 UI

### 🎭 사용자 경험
- 부드러운 애니메이션 효과
- 직관적인 네비게이션
- 접근성 고려 설계

## 🌐 배포 옵션

정적 파일이므로 다양한 플랫폼에 배포 가능:

- **GitHub Pages** 🐙
- **Netlify** ⚡
- **Vercel** 🔺
- **AWS S3 + CloudFront** ☁️
- **일반 웹서버** (Apache, Nginx) 🖥️

## 📋 브라우저 지원

| 브라우저 | 버전 |
|---------|------|
| Chrome | 80+ ✅ |
| Firefox | 75+ ✅ |
| Safari | 13+ ✅ |
| Edge | 80+ ✅ |

## 🤝 기여하기

1. 이 저장소를 Fork 합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋합니다 (`git commit -am '새 기능 추가'`)
4. 브랜치에 Push 합니다 (`git push origin feature/새기능`)
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

**Made with ❤️ by TGS Corp** 