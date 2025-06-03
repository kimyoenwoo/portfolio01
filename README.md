# 🎓 스마트교육 자산관리 솔루션

**스마트교육 자산관리 솔루션**

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
│   ├── easySolution.html  # 쉬운해결
│   ├── asReservation.html  # as예약
│   └── serviceCenter.html  # 서비스센터 찾기
├── 📢 notice/            # 알림사항 페이지들
│   ├── notice.html
│   ├── noticeView.html
│   └── noticeWrite.html
├── 📦 package.json       # Node.js 설정
├── 🐙 .gitignore        # Git 제외 파일
└── 📖 README.md         # 프로젝트 문서

