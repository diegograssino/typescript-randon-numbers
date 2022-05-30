import React, {ReactElement} from "react";

interface NumberProps {
  number: number;
}

enum Colors {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

const Number = ({number}: NumberProps): ReactElement => {
  const color = number === 0 ? Colors.RED : number === 1 ? Colors.GREEN : Colors.BLUE;

  return <h2 style={{color: `${color}`}}>{number}</h2>;
};

export default Number;
