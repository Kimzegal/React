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
