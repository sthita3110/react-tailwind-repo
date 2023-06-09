import "./App.css";
import RoutesModule from "./Routes/RoutesModule";
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <RoutesModule />
      </div>
    </>
  );
}

export default App;
