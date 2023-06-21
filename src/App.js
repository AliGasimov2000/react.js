import { useState } from "react";


function App() {
  const [b, setb] = useState(10)


  return (
    <div className="reactjs">
      <h2>{b}</h2>
      <button onClick={() => setb((p) => p+5)}>+</button>
      <button onClick={() => setb((p) => p-5)}>-</button>
    </div>
  );
}

export default App;
