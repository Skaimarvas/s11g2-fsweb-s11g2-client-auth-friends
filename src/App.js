import "./App.css";
import { useEffect } from "react";

//layouts
import Header from "./layouts/Header";
import Login from "./pages/Login";
import PageComponent from "./pages/PageComponent";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  useEffect(() => {}, [localStorage.getItem("token")]);
  return (
    <div className="App">
      <Header />
      <PageComponent />
    </div>
  );
}

export default App;
