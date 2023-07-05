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

<br>

### 1. props
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
- 부모태그에서 자식으로 attribute 형태로 전달되며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용

<br>

### 2. children
```javascript
// App.js
import MyComponent from "./MyComponent";

function App() {
  return (
    <MyComponent name="React">리액트</MyComponent>
  );
}

export default App;
// MyComponent.js
function MyComponent(props) {
  return (
    <div>
      Hello <b>{props.name}</b>
      children is {props.children}
    </div>
  );
}

export default MyComponent;
```

- children : 컴포넌트 태그 사이의 내용을 표시

<br>

### 3. 비구조화 할당
```javascript
// MyComponent.js
function MyComponent({name, children}) {
  
  return (
    <div>
      Hello <b>{name}</b>
      children is {children}
    </div>
  );
}

export default MyComponent;
```
- 비구조화 할당을 이용하면 간편하게 표현
##### ※비구조화 할당(구조분해; destructing assignment)은, ES6부터 사용가능한 문법으로, 배열이나 객체의 프로퍼티를 해체하여 개별 변수에 담을 수 있게 해주는 표현식이다.

<br>

### 4. propTypes / defaultProps
```javascript
// MyComponent.js
import PropTypes from 'prop-types';

function MyComponent(props) {
  return (
    <div>
      Hello <b>{props.name}</b>
      children is {props.children}
    </div>
  );
}

MyComponent.defaultProps = {
  name: "김제갈",
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
}

export default MyComponent;
```

- defaultProps : 컴포넌트 내부의 defaultProps 속성을 통해, props 값이 지정되지 않았을 때의 디폴트 값을 설정
- propTypes : 컴포넌트의 필수 props를 지정하거나 자료형(type)을 설정할 때 사용
  - props명: PropTypes.자료형을 통해 자료형을 설정
  - .isRequired를 통해 필수 값으로 설정
  - 필수값을 전달하지 않거나 자료형을 맞추지 않을 경우, 값이 표시되긴 하지만 console에 오류가 나타남
- propTypes의 자료형은 다음과 같은 값이 있음
  - array: 배열
    - arrayOf(PropTypes.자료형) : 특정 자료형으로 이루어진 배열
    - oneOf(['a', 'b']): 주어진 배열 요소중 하나 
  - bool, number, object, string, symbol
    - oneOfType([PropTypes.number... ]) : 주어진 배열 종류 중 하나
  - func : 함수
  - instanceOf(클래스) : 특정 클래스의 인스턴스
  - node: 렌더링 할 수 있는 모든 것(숫자, 문자열, JSX 코드, children 등)
  - objectOf(PropTypes.number): 객체의 모든 키값이 인자로 주어진 PropTypes인 객체
  - shape({name: PropTypes.string, num: PropTypes.number}) : 주어진 스키마를 가진 객체
  - any : 아무종류
##### ※ react 15.5 이하에서는 import를 하지않고, React.PropTypes. ... 형태로 사용한다.

```javascript
import {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
  static defaultProps = {
    name: "김제갈"
  };
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    return (
      <div>
        this.props.name
      </div>
    );
  }
}
```
- 클래스형 컴포넌트는 this.props로 props를 불러올 수 있음
- 클래스형 컴포넌트는 defaultProps와 propTypes를 class 내부의 정적 멤버로 지정하여 사용할 수 있음

<br>
<br>

## state

### _컴포넌트 내부에서 바뀔 수 있는 변수_

<br>

### 1. 클래스형 컴포넌트
```javascript
import { Component } from 'react';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0,
      fixed: 0
    };
  }

  render(){
    const {number, fixed} = this.state;
    return(
      <div>
        <h1>{number}</h1>
        <h1>{fixed}</h1>
        <button
        onClick={()=>{
          this.setState({number: number+1});
        }}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
```
- 클래스형 컴포넌트에서 constructor를 작성할 때는 super(props)를 호출해줘야 함
- state는 객체 형식
- onClick등의 이벤트 함수는 화살표 함수를 사용
- setState 함수로 객체를 변경할 때, 전달된 프로퍼티의 값만 변경됨
```javascript
import { Component } from 'react';

class Counter extends Component{
  state = {
    number: 0,
    fixed: 0
  };

  render(){
    const {number, fixed} = this.state;
    return( ... );
  }
}

export default Counter;
```
- state 객체를 내부에서 선언하면 constructor 없이 state 설정가능

<br>

### 2. prevState
```javascript
//...
<button
        onClick={()=>{
          this.setState({number: number+1});
          this.setState({number: number+1});
        }}>
//...
```
- this.setState는 비동기이므로 바로 바뀌지 않음
```javaScript
this.setState((prevState, props) => {
  return{
    //  업데이트 내용
  }
})
// props 는 필요없으면 생략 가능
```
- prevState를 사용하면 동기적으로 사용 가능

<br>

### 3. 콜백함수
```javascript
this.setState({number: number+1},
() => {console.log(this.state);})
```
- 값이 업데이트 된 이후에 콜백함수가 실행