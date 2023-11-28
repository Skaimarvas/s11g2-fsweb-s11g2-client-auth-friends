import "./App.css";

//layouts
import Header from "./layouts/Header";
import Login from "./pages/Login";
import PageComponent from "./pages/PageComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <PageComponent />
    </div>
  );
}

export default App;
