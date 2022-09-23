import { useEffect, useState } from "react";

function UseEffectPrac() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <>
      <h1>Hello UseEffect</h1>
      <p>You Clicked {count} times</p>
      <button onClick={()=> setCount(count+1)}>Click</button>
    </>
  );
}
export default UseEffectPrac;
