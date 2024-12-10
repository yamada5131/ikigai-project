import { useState,useRef } from "react";
import AppLayout from "../../components/layouts/AppLayout";

const SetupProfile = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null); 
  const backgroundInputRef = useRef(null);
  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImage(URL.createObjectURL(file)); 
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file)); 
    }
  };

  const triggerBackgroundInput = () => {
    backgroundInputRef.current?.click();
  };

  return (
    <AppLayout>
      <div className="bg-orange-200 p-6 rounded-lg w-full max-w-md mx-auto shadow-md mt-9">
        <h2 className="text-lg font-bold text-gray-700 mb-4">ユーザー情報</h2>
        <div className="relative mb-6">
          <div className="w-full h-32 bg-orange-100 rounded-lg overflow-hidden">
            {backgroundImage && (
              <img
                src={backgroundImage}
                alt="Background"
                className="w-full h-full object-cover object-contain"
              />
            )}
            <input
                ref={backgroundInputRef}
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleBackgroundChange}
            />
            <button 
                type="button"
                className="absolute top-2 right-2 bg-gray-100 border border-gray-300 text-sm px-2 py-1 rounded-lg"
                onClick={triggerBackgroundInput}
                >
                編集
            </button>
          </div>
          <div className="absolute top-16 flex justify-center left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-orange-200 rounded-full border-4 border-white shadow-md overflow-hidden">
              {avatarImage && (
                <img
                  src={avatarImage}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleAvatarChange}
              />
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="名前"
              className="w-1/2 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              placeholder="姓"
              className="w-1/2 px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <select
              id="gender"
              placeholder="性別"
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
            >
              <option value="" disabled>
                性別を選択してください
              </option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">他の</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="連絡先"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="メール"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="住所"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-red-100 text-red-500 rounded-md hover:bg-red-200"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500"
            >
              確認
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default SetupProfile;
