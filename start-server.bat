@echo off
echo 스마트교육 자산관리 솔루션 정적 사이트 서버를 시작합니다...
echo.
echo 브라우저에서 http://localhost:8080 으로 접속하세요.
echo 서버를 중지하려면 Ctrl+C를 누르세요.
echo.

REM Python이 설치되어 있는지 확인
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python이 설치되어 있지 않습니다.
    echo Python을 설치한 후 다시 시도해주세요.
    pause
    exit /b 1
)

REM HTTP 서버 시작
python -m http.server 8080

pause 