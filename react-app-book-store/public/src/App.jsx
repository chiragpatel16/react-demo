import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from"./components/NonFiction";

  
export default function App() {
   const [flag,setflag ] = useState(false)

  return (

    <div>
      <h1>Mini Book Store</h1>
  

      <button onClick={() => { setflag (!flag)}}  data-testid="toggle-btn"> {flag ? "Fictional Books" : " Non-Fiction Books"} </button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {!flag ? <Fiction/> : <NonFiction/>}
      </div>
    </div>
  );
}

