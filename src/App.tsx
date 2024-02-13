import "./App.css";

// import Counter from "./components/Counter";
import UserView from "./components/UserView";

const App = () => {
  return (
    <>
      <h1>Redux Sandbox</h1>
      <div className="card">
        <UserView />
        {/* <Counter /> */}
      </div>
    </>
  );
};

export default App;
