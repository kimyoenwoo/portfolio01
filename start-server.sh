#!/bin/bash

echo "스마트교육 자산관리 솔루션 정적 사이트 서버를 시작합니다..."
echo ""
echo "브라우저에서 http://localhost:8080 으로 접속하세요."
echo "서버를 중지하려면 Ctrl+C를 누르세요."
echo ""

# Python이 설치되어 있는지 확인
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    echo "Python이 설치되어 있지 않습니다."
    echo "Python을 설치한 후 다시 시도해주세요."
    exit 1
fi

# Python 버전 확인 및 HTTP 서버 시작
if command -v python3 &> /dev/null; then
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    python -m http.server 8080
fi 