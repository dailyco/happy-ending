# 🥀 HAPPY ENDINGㅤ![version](https://img.shields.io/badge/version-v1.0.0-blue)
스토리텔링 게임으로 죽음을 인식하여 삶을 고찰하는 서비스

<br/>

## 소개
HAPPY ENDING 프로젝트는 죽음을 인식할 수 있는 경험을 제공하여 죽음불안을 낮춤으로써 스스로의 삶에 대해 생각하고 앞으로의 삶을 유의미하게 보낼 수 있게 삶의 마무리 과정을 체험하는 스토리텔링 게임 서비스를 제공합니다.

<br/>

## 배포
[https://happy-ending.yutopia.dev](https://happy-ending.yutopia.dev)

1920\*1080 화면을 기준으로 디자인했고, 화면 크기에 맞춰 비율을 유지한 채 키우고 줄여서 보여 줘요.
세로로 긴 휴대폰에서는 화면 폭에 맞춰 다시 배치하고, 그림 위 정해진 자리에 글과 버튼이 놓이는 장면은 가로 그림 그대로 보여 줘요.

<br/>

## 프로젝트 구조
```
L happy-ending
  L public
    - favicon-happyending.ico
    - index.html
  L src
    L assets // multimedia
      L fonts
      L icons
      L images
      L videos
      L audios
    L scss // components' styles & common styles
      L Atoms
      L Molecules
      L Organisms
      L Templates
      L Pages
      - animations.scss
      - colors.scss
      - pages.scss
      - print.scss
      - validate.scss
    L ui // UI components
      L Atoms
      L Molecules
      L Organisms
      L Templates
      L Pages
      - reducerInputs.js
      - useInputs.js
    - App.css
    - App.js // 화면 크기 맞춤(ui/Stage.js, scss/stage.scss)으로 모든 페이지를 감싼다
    - index.js
  - wrangler.jsonc // Cloudflare 배포 설정
```

<br/>

## Atomic Design을 활용한 구조 설계
- [Atomic Design 구조](https://github.com/dailyco/happy-ending/wiki/🏗-Atomic-Design) by [@dailyco](https://github.com/dailyco)
- [재사용성 높은 컴포넌트](https://github.com/dailyco/happy-ending/wiki/🧩-재사용성이-높은-컴포넌트) by [@dailyco](https://github.com/dailyco)

<br/>

## Writing
- [Atomic Design](https://github.com/dailyco/happy-ending/wiki/%F0%9F%8F%97-Atomic-Design) by [@dailyco](https://github.com/dailyco)

<br/>

## 설치 가이드
### 프로젝트 가져오기
```
git clone https://github.com/dailyco/happy-ending.git
```
### 코드 실행하기
```
yarn install
yarn start
```
코드 실행후 http://localhost:3000 에서 확인 가능합니다!

### 배포하기
```
yarn deploy
```
`yarn build` 로 만든 `build/` 를 Cloudflare Workers 정적 파일로 올려 https://happy-ending.yutopia.dev 에 반영합니다. 처음 한 번은 `npx wrangler login` 으로 Cloudflare 계정에 로그인해야 합니다.

<br/>

## 협업 내용
- [Dev Rule](https://github.com/dailyco/happy-ending/wiki/🤙🏻-Dev-Rule)
- [Convention](https://github.com/dailyco/happy-ending/wiki/✨-Convention)
- [Dev Log](https://www.notion.so/d8beacec1f1e40f0833200cbe2bcec1c?v=eeda10c157db493780445c1a078eb156)
- [Design](https://app.zeplin.io/project/5f54e4ef65e81f48a04d1968/dashboard?sid=5f5c6d981106877aba5e5d90)

<br/>

## 팀원
- 김유진 [@dailyco](https://github.com/dailyco)
- 김석진 [@Alinew](https://github.com/SukJinKim)
