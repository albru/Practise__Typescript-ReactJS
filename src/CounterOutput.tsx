import * as React from "react";

interface CounterOutputProps {
  counter: number;
}

const counterOutput = (props: CounterOutputProps) => {
  return <p>{props.counter}</p>;
};

export default counterOutput;
