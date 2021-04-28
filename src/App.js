import "./App.css";
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
function App() {
  return (
    <div className="App container">
      <div>
        <SideBar />
      </div>
      <div className="dashboard">
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
