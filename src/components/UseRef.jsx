import { useEffect, useRef, useState } from "react";


const UseRef = () => {
    const [state,setState]=useState("Deepak");

    const count=useRef(0);

   useEffect(()=>{
    count.current=count.current+1;
   },[state]
  )
  return <div className="bg-blue-300 h-screen">
    <h2 className="text-4xl">Use Ref Demo</h2>
    <h2 className="text-3xl m-10 p-10">Hello {state}</h2>
    <input className="text-3xl" type="text" value={state} onChange={(e)=>{setState(e.target.value)}} ></input>
    <h2>Render Count: {count.current}</h2>
  </div>;
};

export default UseRef;
