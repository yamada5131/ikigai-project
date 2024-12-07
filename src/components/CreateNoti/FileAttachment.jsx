import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileBar from "./FileBar";
import FileUploadProgress from "./FileUploadProgress";
import PropTypes from "prop-types";
import ClearIcon from "@mui/icons-material/Clear";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
const FileAttachment = ({
  isOpen,
  onClose,
  handleCancelUploading,
  progress,
  handleDeleteFile,
  files,
  handleUploadClick,
  isLoading,
  handleSubmitFile,
  handleCancelFileAttachForm,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <p className="text-center text-2xl font-bold">新しい通知の作成</p>
        <ClearIcon
          fontSize="large"
          onClick={handleCancelFileAttachForm}
          className="cursor-pointer"
        />
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-y-8 items-center">
          <div className="border-2 px-6 py-6 w-full rounded-md">
            <div
              className="border-dashed border-2 py-5 border-blue-500 flex flex-col justify-center items-center gap-y-2 cursor-pointer"
              onClick={handleUploadClick}
            >
              <CloudUploadIcon color="primary" sx={{ fontSize: 70 }} />
              <p className="text-xl font-semibold">
                ファイルをアップロードする
              </p>
              <p>JPEG, PNG, EXCEL, PDF, WORD</p>
            </div>

            {isLoading && (
              <div className="">
                <h3 className="text-xl my-3">アップロード中</h3>
                <FileUploadProgress
                  handleCancelUploading={handleCancelUploading}
                  progress={progress}
                />
              </div>
            )}
            <h4 className="text-lg my-2">正常にダウンロードされました</h4>
            <div className="flex flex-col gap-y-4">
              {files.map((file) => (
                <FileBar
                  key={file.id}
                  title={file.title}
                  handleDeleteFile={() => handleDeleteFile(file.id)}
                />
              ))}
            </div>
            <button
              onClick={handleSubmitFile}
              className="w-full bg-blue-500 p-2 text-white font-semibold rounded-full text-xl mt-10"
            >
              作成
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
FileAttachment.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleCancelUploading: PropTypes.func,
  progress: PropTypes.number,
  handleDeleteFile: PropTypes.func,
  title: PropTypes.string,
  files: PropTypes.array,
  handleUploadClick: PropTypes.func,
  isLoading: PropTypes.bool,
  handleSubmitFile: PropTypes.func,
  handleCancelFileAttachForm: PropTypes.func,
};
export default FileAttachment;
