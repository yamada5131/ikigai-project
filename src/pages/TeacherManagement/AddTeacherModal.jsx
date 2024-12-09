import React, { useState } from "react";

function AddTeacherModal({ closeModal }) {
  const [teacherData, setTeacherData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    subject: "",
    gender: "",
    classroom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., save teacher data)
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">教師を追加する</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">フルネーム</label>
            <input
              type="text"
              name="fullName"
              value={teacherData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">電子メール</label>
            <input
              type="email"
              name="email"
              value={teacherData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">パスワード</label>
            <input
              type="password"
              name="password"
              value={teacherData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">電話番号</label>
            <input
              type="text"
              name="phone"
              value={teacherData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">教室</label>
            <input
              type="text"
              name="classroom"
              value={teacherData.classroom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">性別</label>
            <select
              name="gender"
              value={teacherData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">選択してください</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">科目</label>
            <input
              type="text"
              name="subject"
              value={teacherData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              教師を追加
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacherModal;
