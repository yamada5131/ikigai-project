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

  const handleUploadClick = () => {
    setIsLoading(true);
  };

  const handleCancelUploading = () => {
    setIsLoading(false);
  };

  const handleCancelFileAttachForm = () => {
    setIsModalOpen(false);
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
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <AppLayout>
      <div className="flex items-center justify-center bg-gray-300">
        <form className="flex flex-col w-9/12 bg-white gap-y-20 my-20 rounded-md shadow-lg">
          <div className="flex items-center justify-center pt-20">
            <h2 className="border-2 px-40 py-2 text-4xl rounded-full border-blue-300">
              通知の作成
            </h2>
          </div>

          <div className="flex flex-col items-center gap-y-10">
            <div className="flex w-9/12 gap-x-10">
              <label className="text-2xl w-40">クラス:</label>
              <input
                className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
                placeholder="ITSS "
              />
            </div>
            <div className="flex w-9/12 gap-x-10">
              <label className="text-2xl w-40">通知:</label>
              <input
                className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
                placeholder="ITSS "
              />
            </div>
            <div className="flex w-9/12 gap-x-10">
              <label className="text-2xl w-40">説明する:</label>
              <textarea
                rows={6}
                className="rounded-md border-2 border-slate-400 w-full text-center text-xl"
                placeholder="ITSS "
              />
            </div>
            <div className="flex justify-between w-9/12 items-center mb-16">
              <div className="flex items-center gap-x-4">
                <p>開始日:</p>
                <input type="date"></input>
              </div>
              <div className="flex items-center gap-x-4">
                <p>終了日:</p>
                <input type="date" />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAttachClick} // Open the modal
              className="place-self-end w-1/6 -translate-x-28 border-blue-600 border-2 rounded-full text-xl"
            >
              添付
            </button>
            <button className="place-self-end w-1/6 -translate-x-28 bg-blue-700 text-white text-xl rounded-md p-2 mb-20">
              完了
            </button>
          </div>
        </form>
        <ToastContainer autoClose={1500} pauseOnHover={false} />
      </div>

      {/* File Attachment Modal */}
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
          handleCancelFileAttachForm={handleCancelFileAttachForm}
        />
      )}
    </AppLayout>
  );
};

export default CreateNotification;
