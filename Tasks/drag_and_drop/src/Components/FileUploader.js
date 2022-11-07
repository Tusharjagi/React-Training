const FileUploader = (props) => {
  return (
    <>
      <label htmlFor="draggable"  draggable="true">
        <div className="file-uploader">
          <img
            className="upload-icon"
            src={process.env.PUBLIC_URL + "/upload.png"}
            alt="upload_icon"
          />
          <span className="uploader-text">Browse file to upload</span>
        </div>
      </label>
      <input
        type="file"
        id="draggable"
        accept="image/*"
        onChange={(e) => props.onChange(e)}
        hidden
        multiple
      />
    </>
  );
};

export default FileUploader;
