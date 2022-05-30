import React, {ReactElement} from "react";

interface ButtonProps {
  onRandom: () => void;
}

const Button = ({onRandom}: ButtonProps): ReactElement => {
  return <button onClick={() => onRandom()}>Random Numbers</button>;
};

export default Button;
