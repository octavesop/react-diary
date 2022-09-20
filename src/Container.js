//자식 컴포넌트 자체를 props에 삽입하는 것도 가능함
const Container = ({ children }) => {
  console.log(children);
  const style = {
    margin: 20,
    padding: 20,
    border: "1px solid gray",
  };
  return <div style={style}>{children}</div>;
};

export default Container;
