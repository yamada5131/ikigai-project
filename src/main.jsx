import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import "./index.css";
import ClassDetails from "./pages/ClassDetails";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CreateNotification from "./pages/CreateNoti";
import Dashboard from "./pages/Dashboard";
import NotificationDetails from "./pages/NotiDetail";
import SetupProfile from "./pages/Profile/SetupProfile";
import TeacherManagement from "./pages/TeacherManagement";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="notifications">
						<Route path="create" element={<CreateNotification />} />
						<Route path=":id" element={<NotificationDetails />} />
					</Route>
					<Route path="profile/setup" element={<SetupProfile />} />
					<Route path="classes/:id" element={<ClassDetails />} />
					<Route path="teachers" element={<TeacherManagement />} />
				</Route>

				{/* Auth routes */}
				<Route path="auth">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
