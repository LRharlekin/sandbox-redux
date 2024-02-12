import "./App.css";

import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <h1>Redux Sandbox</h1>
      <div className="card">
        <Counter />
      </div>
    </>
  );
};

export default App;
