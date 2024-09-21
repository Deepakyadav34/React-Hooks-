import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child Component Rendered");
  return <button onClick={onClick}>Click Me!</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="bg-blue-300 w-full h-screen">
      <h2 className="text-4xl">Use Callback Demo </h2>
      <p className="text-2xl">Count:{count}</p>
      <p className="text-3xl bg-blue-600"><ChildComponent onClick={handleClick}></ChildComponent></p>

      <p className="m-10">The React useCallback Hook returns a memoized callback function.
        In this example when we inspect the webpage to console then we get the the function is rendered only once and then it saves the function as a memo and then call back it again and again to update the value.
      </p>
    </div>
  );
};
export default UseCallback;
