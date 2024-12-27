import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";

export default function MainContent() {
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/notifications")
			.then(response => response.json())
			.then(data => setNotifications(data))
			.catch(error => console.error("Error fetching users:", error));
	}, []);

	const [openNotiModal, setOpenNotiModal] = useState(true);

	return (
		<AppLayout>
			<div className="flex flex-col">
				{/* Header Section */}
				<header className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">火2</h2>
					<div className="flex gap-4">
						<input
							type="text"
							placeholder="Search"
							className="border border-gray-300 rounded px-4 py-2"
						/>
						<select className="border border-gray-300 rounded px-4 py-2">
							<option value="応答しました">応答しました</option>
						</select>
					</div>
				</header>

				{/* Lesson List */}
				{notifications.map((notification, index) => (
					<div
						className="bg-white rounded-lg shadow p-4"
						onClick={() => setOpenNotiModal(true)}
					>
						<div
							key={index}
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
									07:00 10/09/2024 - 24:00 10/11/2024
								</span>
							</div>
							<div className="flex flex-col items-end">
								<span className="text-sm text-gray-700 mb-2">
									回答者数: 23/40
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
				<Modal.Header>Terms of Service</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European Union enacts new
							consumer privacy laws for its citizens, companies around the world
							are updating their terms of service agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection Regulation (G.D.P.R.)
							goes into effect on May 25 and is meant to ensure a common set of
							data rights in the European Union. It requires organizations to
							notify users as soon as possible of high-risk data breaches that
							could personally affect them.
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>I accept</Button>
					<Button color="gray" onClick={() => setOpenModal(false)}>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</AppLayout>
	);
}
