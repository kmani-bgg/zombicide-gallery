# Zombicide Survivors Gallery

GitHub Pages용 정적 웹앱입니다.

## 폴더 구조

```text
index.html
css/style.css
js/data.js
js/app.js
images/
```

## 이미지 넣는 위치

캐릭터 PNG 파일들은 모두 `images/` 폴더에 넣으세요.

예:

```text
images/Dragomir.png
images/CaoCao.png
images/LuBu.png
```

기존 로컬 폴더 이름이 `Zombicide Survivors Gallery_files`였다면, 그 안의 PNG 파일들을 GitHub의 `images/` 폴더로 옮기면 됩니다.

## GitHub Pages 배포 방법

1. GitHub에서 새 repository를 만듭니다. 예: `zombicide-gallery`
2. 이 ZIP의 내용물을 repository 루트에 업로드합니다.
3. `images/` 폴더에 PNG 이미지 파일들을 업로드합니다.
4. Repository의 **Settings → Pages**로 이동합니다.
5. **Build and deployment**에서 `Deploy from a branch`를 선택합니다.
6. Branch는 `main`, 폴더는 `/(root)`를 선택하고 Save합니다.
7. 잠시 후 `https://<GitHub아이디>.github.io/zombicide-gallery/` 주소로 접속할 수 있습니다.

## 수정 위치

- 캐릭터 데이터/한글명 수정: `js/data.js`
- 카드 크기/디자인 수정: `css/style.css`
- 검색/필터/크기 선택 기능 수정: `js/app.js`

## 기능

- 검색
- 카테고리 필터
- 타입 필터
- 카드 크기 Small / Medium / Large 선택
- 마지막 카드 크기 선택값 자동 저장
