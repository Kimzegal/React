# React : 2. JSX

React에서 사용하는 확장 문법인 JSX에 대해 알아봅니다.
<br>
<br>
<br>

## JSX란?

### _HTML(XML)과 비슷한 형식으로 작성할 수 있는 JS 확장 문법_

```javascript
function App() {
    return(
        <div>
            Hello <b>react</b>
        </div>
    );
}

// Babel에 의해 변환
function App() {
    return React.createElement("div",null,"Hello " React.createElement("b", null, "react"));
}
```

- React는 JSX 문법을 사용하여 각 컴포넌트의 템플릿 코드를 작성할 수 있음
- JSX는 브라우저에서 실행되기 전 번들링 과정에서 바벨에 의해 JS 코드로 변환
- HTML과 형식이 같아 가독성이 좋고, 각종 컴포넌트 명을 HTML 태그처럼 사용하여 작성할 수 있음

<br>
<br>

## JSX 문법

### 1. 감싸인 요소와 닫는 태그

```javascript
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      Hello <b>react</b>
    </Fragment>
  );
}
```

- 컴포넌트의 모든 하위 요소는 반드시 1개의 부모 요소로 감싸야 함
- React v16 이상부터는 Fragment 태그를 사용할 수 있음
  - &lt;Fragment&gt;&lt;/Fragment&gt; 태그는 **<></>** 와 같은 빈 태그로도 사용할 수 있음
- react의 모든 태그는 원본 HTML과 상관없이 무조건 닫는 태그가 필수
  - 내부 내용이 없는 태그(빈태그)의 경우, <태그명 /> 와 같이 self-closing 태그를 사용해도 무방

##### ※ VDOM은 컴포넌트 변화를 감지하기 위해, 각 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있다. 따라서 최상위 부모 태그가 필요한 것이다.

<br>

### 2. JS 표현식

```javascript
function App() {
  const name = "김제갈";
  return (
    <div>
      Hello <b>{name}</b>
    </div>
  );
}
```

- JSX 내부에서 {} 내부에 자바스크립트 표현식을 사용할 수 있음
- 태그의 attribute에도 사용가능: attribute 값이 String이 아닐경우엔, 속성명={값} 형태로 전달

<br>

### 3.JS 조건식

```javascript
function App() {
  const name = "김제갈";
  return <div>Hello {name === "김제갈" ? <b>김제갈</b> : null}</div>; // 논리연산자
  // return <div>Hello {name === "김제갈" && <b>김제갈</b>}</div>;
}
```

- {} 내부엔 표현식만 가능하므로, 조건식은 삼항연산자 혹은 논리연산자를 사용
- null 값을 비롯한 false 값은 react에서 아무것도 렌더링되지 않음
  - 숫자 0과 NaN값은 렌더링됨

##### ※ JS의 논리연산자는 단락 평가(short-circuit evaluation)방식을 사용하는데, 여타의 프로그래밍 언어와는 달리 각 값이 논리값(true, false)가 아니더라도 그 값을 반환한다. 예를들어 &&의 경우 첫번째 값이 참이라면 두번째 값을 반환하고, 거짓이면 첫번째 값을 그대로 반환한다.

<br>

### 3.인라인 스타일링과 클래스

```javascript
function App() {
  const name = "김제갈";
  const style = {
    backgroundColor: "black",
  };

  return (
    <div className={name} style={style}>
      Hello <b>{name}</b>
    </div>
  );
}
```

- HTML의 class, style 등의 attribute에도 {} 문법을 사용할 수 있음
- 요소에 스타일을 적용할 시에는 문자열이 아닌 객체를 사용
- background-color와 같이 - 가 들어가는 CSS 속성은 카멜 표기법(backgroundColor)로 바꿔줘야 함
- 클래스의 경우 className으로 치환해야 함

##### ※ JS에 class라는 예약어와 -라는 연산자가 존재하기 때문에 카멜 표기법을 사용하는 것이다. 참고로 react v16부터는 class로 써도 경고가 나타날 뿐, 정상적으로 처리해준다.

<br>

### 4.주석

```javascript
function App() {
  const name = "김제갈";

  return (
    <div
      className={name} // 이것도 태그다
    >
      {/* 이것이 태그다 */}
      Hello <b>{name}</b>
      // 얘는 그대로 나타남
    </div>
  );
}
```

- JSX 내부 주석은 {/_ ... _/} 형식을 사용
- 시작 태그를 여러줄로 사용하면 내부에서 // ... 형식을 사용할 수 있음
