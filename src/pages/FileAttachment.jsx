import React, { useEffect, useState } from "react";
import AppLayout from "../components/layouts/AppLayout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileBar from "../components/layouts/FileBar";
import FileUploadProgress from "../components/layouts/FileUploadProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FileAttachment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = React.useState(0);
  const handleUploadClick = () => {
    setIsLoading(true);
  };
  const handleCancelUploading = () => {
    setIsLoading(false);
  };

  const handleDeleteFile = (fileId) => {
    const newFiles = files.filter((file) => file.id !== fileId);
    setFiles(newFiles);
    toast("Delete Successfully!")
  };

  const [files, setFiles] = useState([
    { id: 1, title: "file1.txt" },
    { id: 2, title: "hello.pdf" },
    { id: 3, title: "itss.txt" },
    { id: 4, title: "messi.png" },
    { id: 5, title: "goat.txt" },
  ]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    setIsLoading(false);
    const newFile = { id: Date.now(), title: "filename.txt" };
    // setFiles((prev) => [...prev, newFile]);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {}, [isLoading]);

  return (
    <AppLayout>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col w-1/2 gap-y-8 items-center">
          <h2 className="text-center border-4 flex w-fit text-3xl py-2 px-6 rounded-full">
            新しい通知の作成
          </h2>
          <div className="border-2 px-10 py-10 w-full rounded-md">
            <div
              className="border-dashed border-2 py-5 border-blue-500 flex flex-col justify-center items-center gap-y-2 cursor-pointer"
              onClick={handleUploadClick}
            >
              <CloudUploadIcon color="primary" sx={{ fontSize: 70 }} />
              <p className="text-xl font-semibold">
                ファイルをアップロードする
              </p>
              <p className="">JPEG, PNG, EXCEL, PDF, WORD</p>
            </div>
            <h3 className="text-xl my-6">アップロード中</h3>
            <div className="flex flex-col gap-y-6">
              {isLoading && (
                <FileUploadProgress
                  handleCancelUploading={handleCancelUploading}
                  progress={progress}
                />
              )}
              <h4 className="text-lg">正常にダウンロードされました</h4>
              <div className="flex flex-col gap-y-4">
                {files?.map((file) => (
                  <FileBar
                    key={file.id}
                    title={file.title}
                    handleDeleteFile={() => handleDeleteFile(file.id)}
                  />
                ))}
              </div>
              <button
                onClick={() => toast("Submit Successfully!")}
                className="w-full bg-blue-500 p-2 text-white font-semibold rounded-full text-xl"
              >
                作成
              </button>
              <ToastContainer autoClose={1500} pauseOnHover={false} />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FileAttachment;
