import React, { useState } from "react";
import AppLayout from "../../components/layouts/AppLayout";

const NotificationDetails = () => {
    // States for Notification Details
    const [notificationTitle, setNotificationTitle] = useState("");
    const [sender, setSender] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Filter State (to filter by answer status: answered or not)
    const [filterStatus, setFilterStatus] = useState("all"); // "all", "answered", or "unanswered"

    return (
        <AppLayout>
            <div className="flex flex-col items-center bg-gray-100 p-10">
                <div className="w-8/12 bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-3xl text-center mb-6">通知詳細</h2>

                    {/* Notification Details */}
                    <div className="mb-6">
                        <div className="flex gap-x-4 mb-4">
                            <label className="w-20 text-xl font-extrabold">通知:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-400 rounded-md"
                                value={notificationTitle}
                                onChange={(e) => setNotificationTitle(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        <div className="flex gap-x-4 mb-4">
                            <label className="w-20 text-xl font-extrabold">差出人:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-400 rounded-md"
                                value={sender}
                                onChange={(e) => setSender(e.target.value)}
                                placeholder=""
                            />
                        </div>

                        {/* Start and End Date on Same Line */}
                        <div className="flex gap-x-4 mb-6">
                            <div className="flex flex-1 gap-x-4">
                                <div className="flex-1">
                                    <label className="w-full text-base font-bold">開始日:</label>
                                    <input
                                        type="date"
                                        className="w-full p-2 border border-gray-400 rounded-md"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="w-full text-base font-bold">終了日:</label>
                                    <input
                                        type="date"
                                        className="w-full p-2 border border-gray-400 rounded-md"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notification List Section */}
                    <div className="border-t border-gray-300 pt-6">
                        {/* Title and Filter Dropdown on Same Line */}
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">お知らせ一覧</h3>
                            {/* Filter Dropdown */}
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="p-2 border border-gray-400 rounded-md"
                            >
                                <option value="all">全て</option>
                                <option value="answered">答えた</option>
                                <option value="unanswered">答えない</option>
                            </select>
                        </div>

                        {/* Blank Lines for Notifications */}
                        <div>
                            {/* Print blank lines as placeholders */}
                            {Array(2) // For example, printing 5 blank lines
                                .fill("")
                                .map((_, index) => (
                                    <div key={index} className="mb-4 p-4 border border-gray-300 rounded-md">
                                        <p className="font-light">２０２４年2月20日</p>
                                        <br/>
                                        <br/>
                                        <p>..................................................................................................................................................................................... </p>
                                        <br/>
                                        <br/>
                                        <p>..................................................................................................................................................................................... </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default NotificationDetails;
