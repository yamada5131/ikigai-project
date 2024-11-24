import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ClassDetails from "./pages/ClassDetails";
import Layout from "./components/layouts/Layout";

import CreateNotification from "./pages/CreateNoti";
import NotificationDetails from "./pages/NotiDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createNoti" element={<CreateNotification />} />
          <Route path="/notidetails" element={<NotificationDetails/>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/classdetails" element={<ClassDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

