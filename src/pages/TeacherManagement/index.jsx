import React, { useState } from "react";
import AddTeacherModal from "./AddTeacherModal";

function TeacherManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl mb-4">管理者さん、こんにちは</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm">教師</p>
          </div>
          <div>
            <p className="text-sm">生徒/教室</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-4 flex justify-between">
          <div className="flex space-x-4">
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              教師を追加する
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              フィルターを追加
            </button>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="名前またはメールで検索"
              className="px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
        </div>

        {/* Teacher Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">名前</th>
                <th className="px-4 py-2 text-left">主題</th>
                <th className="px-4 py-2 text-left">クラス</th>
                <th className="px-4 py-2 text-left">電子メールアドレス</th>
                <th className="px-4 py-2 text-left">性別</th>
                <th className="px-4 py-2 text-left">ステータスクラス</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Teacher Rows */}
              <tr>
                <td className="px-4 py-2">田中 太郎</td>
                <td className="px-4 py-2">数学</td>
                <td className="px-4 py-2">高等学校</td>
                <td className="px-4 py-2">tanaka@example.com</td>
                <td className="px-4 py-2">男性</td>
                <td className="px-4 py-2">有効</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Teacher Modal */}
      {isModalOpen && <AddTeacherModal closeModal={closeModal} />}
    </div>
  );
}

export default TeacherManagement;
