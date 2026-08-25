# 포트폴리오 UI 검증 결과

## 기준 화면
- 1366×768
- 1920×1080

`validation/1366x768.png`, `validation/1920x1080.png`에 첫 화면 검사용 렌더링을 포함했습니다.

## 첫 화면
첫 화면 안에서 다음 세 가지가 함께 보이도록 Hero 높이와 여백을 조정했습니다.
- 소개: 메인 문장 + 설명
- 활동/역량: Data Validation / Python Automation / LLM Inference
- 근거: 데이터 검증 / 업무 자동화 / LLM 적용 경험 요약

## 가로 넘침 방지
- 전역 `box-sizing: border-box`
- body `overflow-x: hidden`
- 메인 폭 `min(1160px, calc(100% - 40px))`
- Grid 컬럼 `minmax(0, 1fr)` 적용
- 표는 `.table-wrap` 내부에서만 필요 시 스크롤
- 920px 이하 레이아웃 1열 전환
- 640px 이하 추가 축소

## 접근성 / 상호작용
- 업무 상세 버튼은 native `<button>`
- Tab 이동 가능
- Enter / Space 실행 가능
- 좌우 방향키, Home, End 탭 이동 지원
- `:focus-visible` 표시
- `prefers-reduced-motion` 대응

## 제목 구조
- H1 1개
- H2: 강점 / 업무 경험 / 실무 경험
- 세부 항목 H3
- H1 → H2 → H3 순서

## 대비율
- 본문 / 배경: 14.33:1
- 보조문구 / 배경: 5.43:1
- 초록 포인트 / 배경: 5.19:1
- 보조문구 / 흰색 카드: 5.68:1

모두 일반 텍스트 기준 4.5:1 이상입니다.

## 소스 검사
- main.js 문법: 통과
- content.js 문법: 통과
- 과제 제출용 문구/공개범위 섹션: 포트폴리오 본문에서 제거

## 남은 최종 확인
GitHub Pages에 이 버전을 업로드한 뒤 실제 Chrome에서:
1. 1366×768 / 1920×1080 확인
2. DevTools Console 빨간 오류 0건 확인
3. Tab → 업무 버튼 → Enter/Space 실행 확인

이 세 가지를 하면 과제의 실제 공개 주소 기준 검증까지 완료됩니다.
