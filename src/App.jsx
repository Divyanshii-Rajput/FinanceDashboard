import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
import Sidebar from "./components/Sidebar";
import RoleSwitcher from "./components/RoleSwitcher";
import DarkModeToggle from "./components/DarkModeToggle";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";

function App() {
  const { darkMode } = useContext(AppContext);
  const [current, setCurrent] = useState("Dashboard");

  const renderPage = () => {
    if (current === "Dashboard") return <Dashboard />;
    if (current === "Transactions") return <Transactions />;
    if (current === "Insights") return <Insights />;
  };

  return (
    <div
      className={`flex transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Sidebar current={current} setCurrent={setCurrent} />

      <div className="flex-1 p-6 space-y-6 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{current}</h1>

          <div className="flex gap-2">
            <DarkModeToggle />
            <RoleSwitcher />
          </div>
        </div>

        {renderPage()}
      </div>
    </div>
  );
}

export default App;