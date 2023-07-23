import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import VariableTypes from "./variable-types";
import VariablesAndConstants from "./variables-and-constants";
import WorkingWithFunctions from "./working-with-functions";

function JavaScript() {
  console.log("Hello World!");
  return (
    <div>
      <br />
      <h2>JavaScript</h2>
      <br />
      <VariablesAndConstants />
      <br />
      <VariableTypes />
      <br />
      <BooleanVariables />
      <br />
      <IfElse />
      <br />
      <TernaryOperator />
      <br />
      <WorkingWithFunctions />
      <br />
    </div>
  );
}
export default JavaScript;
