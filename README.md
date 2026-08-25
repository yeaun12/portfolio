# Data Portfolio

개인 한 페이지 포트폴리오의 GitHub Pages 배포용 저장소입니다.

## 파일 구조

```text
.
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ content.js  # 내용 수정용
│  │  └─ main.js     # 동작용
│  └─ images/
├─ CONTENT_EDIT_GUIDE.md
└─ README.md
```

## GitHub Pages 배포

1. 새 GitHub 저장소를 만들고 이 폴더의 파일을 업로드합니다.
2. 저장소의 **Settings → Pages**로 이동합니다.
3. **Deploy from a branch**를 선택합니다.
4. Branch는 `main`, Folder는 `/ (root)`를 선택하고 저장합니다.
5. 생성된 Pages 주소를 새 시크릿 창에서 확인합니다.

## 현재 포함된 상호작용

- 과정 보기
- 결과 보기
- LLM 적용 보기
- 키보드 Tab 및 Enter/Space 기반 기본 버튼 접근

## 주의

페이지의 업무 결과 화면과 표는 공개용 재구성 예시입니다.
실제 회사 데이터, 내부 코드, 프롬프트, 비밀값은 포함하지 않습니다.


## 내용 수정

포트폴리오 문구는 `assets/js/content.js`에서 수정합니다. 자세한 방법은 `CONTENT_EDIT_GUIDE.md`를 참고하세요.
