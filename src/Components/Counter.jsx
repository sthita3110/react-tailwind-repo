import { useState, useEffect } from "react";
import Button from "../Shared/Button";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counterState, setCounterState] = useState("");
  const [disable, setDisable] = useState("");
  const onClickAddHandler = () => {
    setCounter(counter + 1);
  };
  const onClickSubHandler = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    console.log("useeffect", counter);
    if (counter % 2 === 0) {
      setCounterState("Even");
    } else {
      setCounterState("Odd");
    }
    if (counter === 0) {
      setDisable("btn-disabled opacity-50");
    } else {
      setDisable("");
    }
  }, [counter]);
  return (
    <>
      <div className="flex flex-col justify-between text-center">
        <div className="mt-3 mb-2">
          <Button
            buttonname="ADD (+)"
            className=" bg-green-700 text-white font-bold tracking-wider"
            onClick={onClickAddHandler}
          />
        </div>
        <p className=" text-4xl font-semibold">{counter}</p>
        <span className=" text-3xl font-mono tracking-widest">
          {counterState}
        </span>
        <div className="mt-2">
          <Button
            buttonname="SUB (-)"
            className={`${disable} bg-rose-700 text-white font-bold tracking-wider`}
            onClick={onClickSubHandler}
          />
        </div>
      </div>
    </>
  );
};
export default Counter;
