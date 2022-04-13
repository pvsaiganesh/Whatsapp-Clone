import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
