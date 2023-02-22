import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TopFavorite from "../components/tabReport/TopFavorite";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="relative min-h-screen ml-[350px] pt-8 pl-8 pr-20 space-y-20 bg-slate-50">
        <TopFavorite />
        <Footer />
      </div>
    </div>
  );
}

export default App;
