import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
