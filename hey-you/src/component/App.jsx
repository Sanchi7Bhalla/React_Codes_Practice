import React, { useState } from "react";

function App() {
  const [name, setName] = useState({firstName:"",lastName:""})

  return (
    <div className="container">
      <form>
          <input type="text"  value={name.firstName} 
          onChange={e => setName({...name,firstName:e.target.value})}></input>
          <input type="text" value={name.lastName}
          onChange={e => setName({...name,lastName:e.target.value})}></input>
          <h2>Hey {name.firstName} {name.lastName} !!</h2>
      </form>
    </div>
  );
}

export default App;