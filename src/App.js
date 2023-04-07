import React, { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState("");
//   useEffect(() => {
//     setTimeout(() => setData({}), 100);
//   });

//   const onClick = () => setToggle(!toggle);
//   return (
//     <div className="App">
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//       {data && <div style={{ color: "red" }}>data</div>}
//       <h1>Hello world</h1>
//       <button onClick={onClick} data-testid="toggle-btn">
//         Click me
//       </button>
//       <input
//         type="text"
//         placeholder="input value..."
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
