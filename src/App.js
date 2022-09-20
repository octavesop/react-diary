import "./App.css";
import Counter from "./Counter";
import MyFooter from "./MyFooter";
import MyHeader from "./MyHeader";
import Container from "./Container";

function App() {
  const name = "World";
  const style = {
    h2: {
      color: "tomato",
    },
  };
  const counterProps = {
    initialValue: 5,
  };
  return (
    <Container>
      <div className="App">
        <MyHeader />
        <header className="App-header">
          <h2 style={style.h2}>Hello, {name}!</h2>
        </header>
        <Counter {...counterProps} />

        <MyFooter />
      </div>
    </Container>
  );
}

export default App;
