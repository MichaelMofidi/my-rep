import CalculatorView from "./calculatorView";

const onLoad = () => {
  console.log("onLoad");
  const calculatorObject = new CalculatorView();
  window.calculatorObject = calculatorObject;
};
