# campinglog-front-server

## 💻 개발 환경

### 🎨 FRONTEND

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-7952B3?style=flat-square&logo=Tailwind-CSS&logoColor=black)![버전](https://img.shields.io/badge/4.1.17-555555?style=flat-square)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square)![버전](https://img.shields.io/badge/1.10.0-555555?style=flat-square)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)![버전](https://img.shields.io/badge/19.2.3-555555?style=flat-square)
![NextJs](https://img.shields.io/badge/NextJS-FFFFFF?style=flat-square&Node-js&logo=next.js&logoColor=black)![버전](https://img.shields.io/badge/16.1.1-555555?style=flat-square)

### 🛠️ 개발 도구

![IntelliJ](https://img.shields.io/badge/VScode-147EFB?style=flat-square)
![NodeJS](https://img.shields.io/badge/NodeJS-5FA04E?style=flat-square&Node-js&logo=Node.js&logoColor=black)![버전](https://img.shields.io/badge/22.16.0-555555?style=flat-square)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb)![버전](https://img.shields.io/badge/10.6.22-555555?style=flat-square)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)

### 🤝 협업 환경

![Jira](https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white)
![Confluence](https://img.shields.io/badge/Confluence-172B4D?style=flat-square&logo=confluence&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=flat-square&logo=googlesheets&logoColor=white)
![draw.io](https://img.shields.io/badge/draw.io-F08705?style=flat-square)
![slack](https://img.shields.io/badge/Slack-69D3A7?style=flat-square)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

### 📦 운영 환경

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)

<br/>

## 노드 모듈 설치

```bash
npm install
```

## 개발 서버 시작

```bash
npm run dev
```

## 운영환경 서버

```bash
npm run build
npm run start
```

## 커밋 타입

| 타입       | 설명                                     | 예시                                                |
| ---------- | ---------------------------------------- | --------------------------------------------------- |
| `feat`     | 새로운 기능 추가                         | `feat: add user registration form`                  |
| `fix`      | 버그 수정                                | `fix: resolve crash on login page`                  |
| `docs`     | 문서 수정 (README 등)                    | `docs: update README with setup instructions`       |
| `style`    | 코드 포맷팅 (기능 변화 없음)             | `style: reformat code with Prettier`                |
| `refactor` | 코드 리팩토링 (기능 변화 없음)           | `refactor: simplify conditional logic in auth flow` |
| `perf`     | 성능 개선                                | `perf: optimize image loading time on homepage`     |
| `test`     | 테스트 코드 추가/수정                    | `test: add unit tests for utils.js`                 |
| `build`    | 빌드 시스템 관련 변경 (예: 의존성, 도구) | `build: update dependencies to latest versions`     |
| `chore`    | 기타 변경사항 (빌드 제외 설정 등)        | `chore: update .gitignore to exclude .env files`    |

<br>

## 브랜치 전략

- 현재 프로젝트의 경우 main과 feature 브랜치만 사용

| 브랜치       | 설명                                                            |
| ------------ | --------------------------------------------------------------- |
| main         | 제품으로 출시할 수 있는 최종 버전의 코드가 있는 브랜치 (배포용) |
| develop      | 다음 출시 버전을 개발하는 브랜치 (기능 통합 및 테스트용)        |
| Jira 업무 ID | 새로운 기능 개발을 위한 브랜치 (보통 develop에서 분기)          |
| hotfix       | main에서 분기하여 긴급하게 수정하는 브랜치 (배포 중 버그 등)    |

<br>

## add와 implemnt의 차이점

| 항목      | `add`                                      | `implement`                               |
| --------- | ------------------------------------------ | ----------------------------------------- |
| 의미      | "새로 추가했다"                            | "구현했다" 또는 "작동하도록 만들었다"     |
| 초점      | 무엇을 추가했는가에 초점                   | 기능이나 로직을 구현한 것에 초점          |
| 사용 시점 | 파일, 폴더, 버튼, 설정 등 물리적 요소 추가 | 함수, 알고리즘, 로직, 동작 기능 구현      |
| 예시 상황 | 새로운 라우터 파일 추가                    | 로그인 기능의 로직을 실제로 작동하게 구현 |

<br>

## modify와 fix와 correct의 차이점

| 단어      | 의미                   | 커밋 타입과의 관계           | 주로 쓰이는 상황                   |
| --------- | ---------------------- | ---------------------------- | ---------------------------------- |
| `modify`  | 기존 코드를 변경       | 보통 `chore` 또는 `refactor` | 기능에 변화 없이 코드 수정할 때    |
| `fix`     | 버그 또는 문제를 수정  | `fix` (표준 커밋 타입)       | 오작동하는 기능이나 버그를 고칠 때 |
| `correct` | 잘못된 부분을 바로잡음 | `fix`나 `chore`로 처리 가능  | 문법 오류, 오타, 논리 실수 등 정정 |
