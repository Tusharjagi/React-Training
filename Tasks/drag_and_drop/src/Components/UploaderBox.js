import upload from "../assets/upload.png";
import "./uploader-box.css"

const FileUploader = ({onChange}) => {
  return (
    <form>
      <div className="file-uploader">
        <img className="upload-icon" src={upload} alt="upload_icon" />
        <span className="uploader-text">Browse file to upload</span>
        <input type="file" accept="image/*" name="file" onChange={onChange} multiple />
      </div>
    </form>
  );
};

export default FileUploader;
