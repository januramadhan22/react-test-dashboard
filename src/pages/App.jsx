import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
