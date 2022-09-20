export const OddEvenResult = ({ count }) => {
  return <>{Number(count) % 2 == 0 ? "짝수" : "홀수"}</>;
};

OddEvenResult.defaultProps = {
  count: 1,
};

export default OddEvenResult;
