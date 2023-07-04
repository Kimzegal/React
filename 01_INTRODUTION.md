# React : 1. introduction

React란 무엇인지, 그리고 React 프로젝트의 초기 설정에 대한 정보를 담습니다.
<br>
<br>
<br>

## VS Code Extension

- ESLint: JS 문법 및 코드 스타일을 검사해줌
- Prettier-Code formatter: 코드 스타일을 자동으로 정리해줌
- Reactjs Code Snippets: 리액트 컴포넌트 및 라이프사이클 함수를 작성할 때 코드를 자동 생성

<br>
<br>

## create-react-app

### _웹팩, 바벨 등을 포함한 리액트 프로젝트 작업 환경을 간편하게 구축해주는 라이브러리_

```bash
npx create-react-app 프로젝트명  // npm을 이용한 프로젝트 구축
npm start // npm 프로젝트 실행

yarn create react-app 프로젝트명 // yarn을 이용한 프로젝트 구축
yarn start // yarn 프로젝트 실행
```

##### ※ npx는 npm 5.2부터 제공하는 기능으로, global npm과 비슷한 기능을 가지는 패키지 실행기이다. 다만, 패키지를 전역적으로 설치하지 않아도, 해당 패키지를 최신버전으로 임시 실행할 수 있어 공간을 절약하고 버전 충돌 문제를 피할 수 있다.

<br>
<br>

## Webpack

### _브라우저 환경에서 모듈을 관리할 수 있는 번들러(bundler)_

- ES6부터 import 문을 통해 특정 JS코드(module)등을 불러올 수 있게 되었음
- React는 webpack을 사용하여, src/index.js를 시작으로 파일들을 번들링
- 웹팩의 로더(loader)는 다른 형식의 파일을 불러와서 사용 가능하게 함
  - css-loader: css 파일 번들링
  - file-loader: 웹 폰트나 미디어 파일 등을 번들링
  - babel-loader: 호환성을 위해 ES6 이상의 JS 코드를 ES5 문법으로 변환

##### ※ ES6 이전, 서버측의 JS 표준인 CommonJS에서는 import 대신 require 구문을 사용해서 모듈을 관리했다. require 구문은 현재도 동적 모듈로드에 이용된다. 다만, import 구문은 정적으로 모듈을 로드하며 구조 분해할당 등의 문법을 사용하여 성능 및 최적화가 쉽고 가독성이 뛰어나다.
