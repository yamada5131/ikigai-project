import  { useState } from "react";
import Logo from "../../assets/logo.avif";
import Google from "../../assets/google.png";

const Register = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handlePasswordToggle = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="min-h-screen flex">
            <div className="w-3/5 bg-gradient-to-t from-red-300 to-green-300 relative">
                <div className="flex items-center justify-center h-full">
                    <img src={Logo} alt="Logo" className="logo-contain w-72 h-72 rounded-full border-4 border-white shadow-lg" />
                </div>
            </div>
            <div className="w-2/5 bg-white flex items-center justify-center">
                <div className="w-3/4">
                    <h2 className="text-2xl font-semibold mb-6 text-center">登録</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-1">
                            名前
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="名前を入力してください"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="studentId" className="block text-gray-700 mb-1">
                            学籍番号
                        </label>
                        <input
                            id="studentId"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="学籍番号を入力してください"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-1">
                            メールアドレス
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="メールアドレスを入力してください"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700 mb-1">
                            パスワード
                        </label>
                        <input
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="パスワードを入力してください"
                        />
                        <button
                            type="button"
                            onClick={handlePasswordToggle}
                            className="absolute right-3 top-10 text-gray-500"
                            aria-label="Toggle password visibility"
                        >
                            {isPasswordVisible ? "🙈" : "👁️"}
                        </button>
                    </div>
                    <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition">
                        登録
                    </button>
                    <div style={{ display: "flex", alignItems: "center", margin: "20px 0" }}>
                        <hr style={{ flex: 1, borderColor: "black", marginRight: "10px" }} />
                        <span style={{ fontSize: "15px"  }}>または</span>
                        <hr style={{ flex: 1, borderColor: "black", marginLeft: "10px" }} />
                    </div>
                    <button
                        className="w-full border border-gray-300 mt-4 p-3 rounded flex items-center justify-center hover:bg-gray-100 transition"
                    >
                        <img
                            src={Google}
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Googleで登録
                    </button>
                    <div className="text-center mt-6 text-sm">
                        <p>
                            すでにアカウントをお持ちですか？{" "}
                            <a href="#" className="text-blue-500 hover:underline">
                                ログイン
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
