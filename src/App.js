import { useState } from "react";


function App() {
  const [a, demo] = useState()


  return (
    <div className="app">
      <h1>Salam, mən {a} </h1>
      <button type="button" onClick={() => demo("Ali")}>0</button>
      <button type="button" onClick={() => demo("əlaçıyam")}>1</button>
      <button type="button" onClick={() => demo("yaxşı oxuyanam")}>2</button>
      <button type="button" onClick={() => demo("orta oxuyanam")}>3</button>
    </div>
  );
}

export default App;
