# React : 3. COMPONENT

React의 화면단 구성을 나타내는 기본단위인 컴포넌트에 대해 알아봅니다.
<br>
<br>
<br>

## COMPONENT란?

### 리액트 어플리케이션의 View 부분을 나타내는 기본 요소

```javascript
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}
export default App;

// 화살표 함수 사용
const App = () => {
    return (
    <div>
      Hello <b>react</b>
    </div>
  );
}

export default App;
```

- 타 프론트엔드 프레임워크의 템플릿과 비슷하지만, 다양한 기능을 추가로 제공
- 예시와 같은 컴포넌트를 함수형 컴포넌트라고 하며, ES6부터는 화살표 함수 사용 가능

##### ※ function과 화살표함수는 서로 완전 보완관계는 아니다. 예를 들어, this를 사용할 경우, function은 자신이 종속된 객체를, 화살표함수는 종속된 인스턴스를 가리킨다.

##### ※ Reactjs Code Snippet을 사용할 경우 rsc(클래스형은 rcc)를 컴포넌트를 입력하여 빠르게 만들 수 있다.

<br>
<br>

## 클래스형 컴포넌트

```javascript
import { Component } from "react";

class App extends Component {
  render() {
    const name = "react";
    return (
      <div>
        Hello <b>react</b>
      </div>
    );
  }
}
```

- ES6의 클래스 문법을 통해 선언한 컴포넌트
- 본래 후술할 state와 라이프사이클 API 사용을 위해 클래스형 컴포넌트를 사용했으나,리액트 v16.8이후 Hooks의 도입 이후로 함수형 컴포넌트에서도 비슷한 작업을 수행할 수 있게 됨
  - React 공식 매뉴얼에서는 함수형 컴포넌트와 Hooks를 권장
- 함수형 컴포넌트가 선언이 용이하고 메모리나 용량이 더 적음

<br>
<br>

## props

### _properties의 줄임말로, 컴포넌트 속성을 설정할 때 사용하는 요소_

```javascript
// App.js
import MyComponent from "./MyComponent";

function App() {
  return (
    <MyComponent name="React" />
  );
}

export default App;


// MyComponent.js
function MyComponent(props) {
  return (
    <div>
      Hello <b>{props.name}</b>
    </div>
  );
}
export default MyComponent;
```

- props 값은 컴포넌트 함수의 파라미터로 받아와서 사용
- 부모태그에서 자식으로 attribute 형태로 전달

```javascript
// MyComponent.js
function MyComponent(props) {
  return (
    <div>
      Hello <b>{props.name}</b>
    </div>
  );
}

MyComponent.defaultProps = {
  name: "김제갈",
};

export default MyComponent;
```

- 컴포넌트 내부의 defaultProps 속성을 통해, props 값이 지정되지 않았을 때의 디폴트 값을 설정
