import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/layouts/AppLayout";
export default function Dashboard() {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/classes")
			.then(response => response.json())
			.then(data => setClasses(data))
			.catch(error => console.error("Error fetching users:", error));
	}, []);

	return (
		<AppLayout>
			<Card className="">
				<p className="font-normal text-gray-500">いらしゃいませ、</p>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900">
					クラスコネクト
				</h5>
				<div>
					<h1>User List</h1>
					<ul></ul>
				</div>
			</Card>
			<div className="grid gap-4 grid-cols-3 mt-4">
				<Card className="col-span-2">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900">
						クラス
					</h2>
					<div className="grid grid-cols-3 gap-4 mt-4">
						{classes.map(cls => (
							<Link
								to={`/classes/${cls.id}`}
								key={cls.id}
								className="no-underline"
							>
								<Card className="p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg bg-white">
									<h1 className="text-2xl font-bold text-gray-800 mb-2">
										{cls.name}
									</h1>
									<div className="space-y-2">
										<p className="text-sm text-gray-600 flex items-center">
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
											{cls.date}
										</p>
										<p className="text-sm text-gray-600 flex items-center">
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											{cls.time}
										</p>
										<p className="text-sm font-medium text-gray-700 flex items-center">
											<svg
												className="w-4 h-4 mr-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
												/>
											</svg>
											クラスの人数: {cls.numberOfStudents}
										</p>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</Card>

				<Card>
					<h2 className="text-xl font-bold tracking-tight text-gray-900">
						今日
					</h2>
					<Card>
						<div>07:00 - ITSS水２</div>
						<div>何かを学ぶ</div>
					</Card>
					<Card>
						<div>07:00 - ITSS水２</div>
						<div>何かを学ぶ</div>
					</Card>
					<Card>
						<div>07:00 - ITSS水２</div>
						<div>何かを学ぶ</div>
					</Card>
					<Card>
						<div>07:00 - ITSS水２</div>
						<div>何かを学ぶ</div>
					</Card>
					<Card>
						<div>07:00 - ITSS水２</div>
						<div>何かを学ぶ</div>
					</Card>
				</Card>
			</div>
		</AppLayout>
	);
}
