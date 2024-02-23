import { useEffect, useState } from "react";

export default function Products(props) {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    console.log("i'm rendering");
    console.log(count);
    return () => {
      console.log("i'm rendering");
    };
  }, []);

  //ki yetbadel lcount
  useEffect(() => {
    console.log("i'm rendering");
    console.log(count);
  }, [count]);

  //fi ay changement

  useEffect(() => {
    console.log("i'm rendering");
    console.log(count);
  });

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  console.log(props);
  console.log(count);

  return (
    <>
      <h1>Hello from Functional component</h1>
      <button>Changer nom</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {count}
    </>
  );
}
