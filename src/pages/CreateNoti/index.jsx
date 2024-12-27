import { useState, useEffect } from "react";
import AppLayout from "../../components/layouts/AppLayout";
import FileAttachment from "../../components/CreateNoti/FileAttachment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNotification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([
    { id: 1, title: "file1.txt" },
    { id: 2, title: "hello.pdf" },
    { id: 3, title: "itss.txt" },
    { id: 4, title: "messi.png" },
    { id: 5, title: "goat.txt" },
  ]);

  const [formData, setFormData] = useState({
    class_id: "",
    title: "",
    content: "",
    start_date: "",
    end_date: "",
  });

  const classOptions = [
    { label: "火①", value: 1 },
    { label: "火②", value: 2 },
    { label: "水①", value: 3 },
    { label: "水②", value: 4 },
    { label: "木①", value: 5 },
    { label: "木②", value: 6 },
    { label: "金①", value: 7 },
    { label: "金②", value: 8 },
    { label: "土①", value: 9 },
    { label: "土②", value: 10 },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClassChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setFormData({ ...formData, class_id: selectedValue });
  };

  const handleUploadClick = () => {
    setIsLoading(true);
  };

  const handleCancelUploading = () => {
    setIsLoading(false);
  };

  const handleDeleteFile = (fileId) => {
    const newFiles = files.filter((file) => file.id !== fileId);
    setFiles(newFiles);
    toast("Delete Successfully!");
  };

  const handleSubmitFile = () => {
    toast("Submit successfully!");
    setIsModalOpen(false);
  };

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 10
        );
      }, 800);
    }

    return () => clearInterval(timer);
  }, [isLoading]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAttachClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitNotification = async (e) => {
    e.preventDefault(); // Prevent page reload

    const notificationData = {
      class_id: formData.class_id,
      user_id: 1, // Temporary user ID
      title: formData.title,
      start_date: formData.start_date,
      end_date: formData.end_date,
      content: formData.content,
      number_of_reservations: 0, // Default value
    };

    try {
      const response = await fetch("http://localhost:3000/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(notificationData),
      });

      if (response.ok) {
        toast("通知が正常に作成されました");
        
        // Reset form data after successful submission
        setFormData({
          class_id: "",
          title: "",
          content: "",
          start_date: "",
          end_date: "",
        });
      } else {
        toast.error("Failed to save notification");
      }
    } catch (error) {
      console.error("Error saving notification:", error);
      toast.error("Error saving notification");
    }
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-center bg-gray-100 min-h-screen py-10">
        <form
          className="flex flex-col w-11/12 sm:w-9/12 lg:w-7/12 bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmitNotification}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-blue-600">通知の作成</h2>
          </div>

          <div className="space-y-6">
            {/* Class Selection */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="w-32 text-lg text-gray-700">クラス:</label>
              <select
                className="rounded-lg border-2 border-gray-400 p-2 text-lg w-full"
                name="class_id"
                value={formData.class_id}
                onChange={handleClassChange}
              >
                <option value="">選択してください</option>
                {classOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="w-32 text-lg text-gray-700">通知:</label>
              <input
                className="rounded-lg border-2 border-gray-400 p-2 text-lg w-full"
                placeholder="通知のタイトル"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <label className="w-32 text-lg text-gray-700">説明:</label>
              <textarea
                rows={6}
                className="rounded-lg border-2 border-gray-400 p-2 text-lg w-full"
                placeholder="詳細情報"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
              />
            </div>

            {/* Dates */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-lg text-gray-700">開始日:</label>
                <input
                  type="date"
                  className="rounded-lg border-2 border-gray-400 p-2 text-lg w-full"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg text-gray-700">終了日:</label>
                <input
                  type="date"
                  className="rounded-lg border-2 border-gray-400 p-2 text-lg w-full"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleAttachClick}
                className="border-2 border-blue-600 text-blue-600 rounded-full py-2 px-4 text-lg"
              >
                添付
              </button>
              <button
                type="submit"
                className="bg-blue-700 text-white rounded-lg py-2 px-6 text-lg"
              >
                完了
              </button>
            </div>
          </div>
        </form>
        <ToastContainer autoClose={1500} pauseOnHover={false} />
      </div>

      {isModalOpen && (
        <FileAttachment
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          handleCancelUploading={handleCancelUploading}
          progress={progress}
          handleDeleteFile={handleDeleteFile}
          files={files}
          handleUploadClick={handleUploadClick}
          isLoading={isLoading}
          handleSubmitFile={handleSubmitFile}
        />
      )}
    </AppLayout>
  );
};

export default CreateNotification;
