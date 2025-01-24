# OlymPic-Project

# 메달 트래커

올림픽 메달 현황을 국가별로 관리할 수 있는 간단한 웹 애플리케이션입니다.  
사용자는 국가를 추가, 수정, 삭제할 수 있으며, 총 메달 점수(금: 15점, 은: 10점, 동: 5점)를 기준으로 순위가 정렬됩니다.

---

## 주요 기능

- 국가별 메달 수 추가
- 기존 국가의 메달 수 수정
- 국가 삭제
- 총 메달 점수 기준으로 순위 정렬

---

## 폴더 구조

```plaintext
📦 Medal-Tracker
├── public          # 정적 파일
├── src             # 소스 코드
│   ├── components  # React 컴포넌트
│   │   ├── MedalForm.jsx    # 메달 추가 및 수정 컴포넌트
│   │   ├── MedalList.jsx    # 메달 순위 리스트 컴포넌트
│   │   ├── Olympic.jsx      # 메인 애플리케이션 컴포넌트
│   │   └── olympic.css      # 애플리케이션 스타일
│   ├── App.js      # 루트 컴포넌트
│   ├── index.js    # React 진입점
├── .gitignore      # Git에서 제외할 파일 및 디렉터리
├── package.json    # 프로젝트 의존성 및 스크립트
└── README.md       # 프로젝트 설명

```

---

## 트러블 슈팅 블로그
https://tigulmoa.tistory.com/entry/20250123TIL-Ch3-%EA%B0%9C%EC%9D%B8%EA%B3%BC%EC%A0%9C-%EC%98%AC%EB%A6%BC%ED%94%BD%EB%A9%94%EB%8B%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8
