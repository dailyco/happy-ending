# 🥀 HAPPY ENDING ![version](https://img.shields.io/badge/version-v1.0.0-blue)
스토리텔링 게임으로 죽음을 인식하여 삶을 고찰하는 서비스

## 소개
죽음은 누구에게나 찾아옴에도 불구하고 사람들은 이를 외면합니다. HAPPY ENDING 프로젝트는 죽음을 인식할 수 있는 경험을 제공하여 죽음불안을 낮춤으로써 스스로의 삶에 대해 생각하고 앞으로의 삶을 유의미하게 모낼 수 있게 삶의 마무리 과정을 체험하는 스토리텔링 게임 서비스를 제공합니다.

## 배포
[https://codingcodi.github.io/happy-ending/](https://codingcodi.github.io/happy-ending/)

## 프로젝트 구조
```plaintext
L github
    |-- workflows // github actions
|-- client
    |-- public
        |-- aseets // images
        index.html
    |-- src
        |-- apis
        |-- commons
            constants.ts
            svgs.tsx
        |-- components // UI Components
            |-- large
            |-- medium
            |-- small
        |-- contexts
            |-- user // user context
        |-- hooks // custom hooks
        |-- libs // libraries
        |-- pages // page components
        |-- styles // common & global styles
        |-- tyles // common types
        |-- utils // util functions..
	App.tsx
|-- scripts // deploy scripts
|-- server
    |-- bin // www
    |-- controllers
    |-- lib
    |-- middlewares // express middlewares
    |-- models // sequelize models
    |-- routes // routing
    |-- seeder // dummy data
    |-- utils // constants & utils functions
    app.js
 
```

## 설치 가이드
### 프로젝트 가져오기
```
git clone 
```


## 팀원
- 김유진 [@0pencoding](https://github.com/0pencoding)
- 김석진 [@Alinew](https://github.com/SukJinKim)

## Branching 기법: git-flow

### <branch 종류>

- develop: 다음 출시 버전 개발 브랜치 (default branch)
- feature: 기능 개발 브랜치
  - Ex) feature/[종류]/[기능개발내용]
    [종류]: develop, fix, etc...
