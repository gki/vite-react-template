import { FC, useState } from 'react';

interface Props {
  start: number;
}

const CountButton: FC<Props> = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      count is {count}
    </button>
  );
};

export default CountButton;
