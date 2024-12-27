import { Button, Modal } from "flowbite-react";
import { useEffect, useState} from "react";
import AppLayout from "../components/layouts/AppLayout";
import { useParams } from "react-router-dom";

export default function MainContent() {
	const [notifications, setNotifications] = useState([]);
	const [filteredNotifications, setFilteredNotifications] = useState([]);
	const [openNotiModal, setOpenNotiModal] = useState(false);
	const [selectedNotification, setSelectedNotification] = useState(null);
	const [cls, setCls] = useState([])
	const [users, setUsers] = useState([])
	const [username, setUsername] = useState(null)
	const [searchTerm, setSearchTerm] = useState("");
	const {id} = useParams()
	useEffect(() => {
		fetch("http://localhost:3000/notifications")
			.then(response => response.json())
			.then(data => setNotifications(data.filter((notification) => notification.class_id === Number(id))))
			.catch(error => console.error("Error fetching users:", error));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:3000/classes/${id}`)
			.then(response => response.json())
			.then(data => setCls(data))
			.catch(error => console.error("Error fetching users:", error));
	}, []);

	useEffect(() => {
		fetch("http://localhost:3000/users")
			.then(response => response.json())
			.then(data => setUsers(data))
			.catch(error => console.error("Error fetching users:", error));
	}, []);

	const handleNotificationClick = (notification) => {
        setSelectedNotification(notification);
		const curUser = users.find((user) => Number(user.id) === notification.user_id)
		setUsername(curUser.name)
		console.log(cls)
        setOpenNotiModal(true);

    };

	const handleSearch = (term) => {
        if (term === "") {
			// Reset to show all notifications when the search box is empty
			setFilteredNotifications(notifications);
		} else {
			// Filter notifications dynamically based on the search term
			const filtered = notifications.filter((notification) =>
				notification.title.toLowerCase().includes(term.toLowerCase())
			);
			setFilteredNotifications(filtered);
		}
    };

	return (
		<AppLayout>
			<div className="flex flex-col">
				{/* Header Section */}
				<header className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">{cls.name}</h2>
					<div className="flex gap-4">
						<input
							type="text"
							placeholder="Search"
							className="border border-gray-300 rounded px-4 py-2"
							onChange={(e) => handleSearch(e.target.value)}
						/>
					</div>
				</header>

				{/* Lesson List */}
				{filteredNotifications.map((notification) => (
					<div
						className="bg-white rounded-lg shadow p-4"
						onClick={() => handleNotificationClick(notification)}
					>
						<div
							key={notification.id}
							className="flex justify-between items-center border-b border-gray-200 py-4 last:border-b-0"
						>
							<div>
								<h3 className="text-lg font-semibold text-gray-800">
									{notification.title}
								</h3>
								<p className="text-sm text-gray-600 truncate max-w-[200px] overflow-hidden whitespace-nowrap">
									{notification.content}
								</p>
								<span className="text-sm text-gray-500">
									{notification.start_date} - {notification.end_date}
								</span>
							</div>
							<div className="flex flex-col items-end">
								<span className="text-sm text-gray-700 mb-2">
									回答者数: {notification.number_of_reservations}/{cls.capacity}
								</span>
								<button className="text-gray-500 hover:underline">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M11 4H4a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-7M16.293 4.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-10 10a1 1 0 01-.586.293l-4 1a1 1 0 01-1.227-1.227l1-4a1 1 0 01.293-.586l10-10z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<Modal
    dismissible
    show={openNotiModal}
    onClose={() => setOpenNotiModal(false)}
>
    <Modal.Header>通知の詳細</Modal.Header>
    <Modal.Body>
        {selectedNotification ? (
            <div className="space-y-6">
                <h3 className="text-lg font-bold">{selectedNotification.title}</h3>
				<p className="text-sm text-gray-500">
				<span className="font-bold">差出人: </span>{username}
                </p>
                {/* Start Date and End Date on the same line */}
                <div className="flex justify-between text-sm text-gray-500">
                    <p><span className="font-bold">開始日: </span> {selectedNotification.start_date}</p>
                    <p><span className="font-bold">終了日: </span> {selectedNotification.end_date}</p>
                </div>
                {/* Reservations */}
                <p className="text-sm text-gray-500">
				<span className="font-bold">回答者数: </span> {selectedNotification.number_of_reservations}/{cls.capacity}
                </p>
                {/* Content at the bottom with a text box */}
                <div>
                    <label htmlFor="notificationContent" className="block text-sm font-medium text-gray-700">
					<span className="font-bold">内容:</span>
                    </label>
                    <textarea
                        id="notificationContent"
                        rows={4}
                        defaultValue={selectedNotification.content}
                        readOnly
						disabled
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-500 sm:text-sm"
                    />
                </div>
            </div>
        ) : (
            <p className="text-gray-500">選択された通知はありません。</p>
        )}
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={() => setOpenNotiModal(false)}> 閉じる</Button>
    </Modal.Footer>
</Modal>
		</AppLayout>
	);
}
