import './upload-button.css';

const UploadButton = ({setData}) => {
  return <button onClick={setData} className="upload-button">Upload</button>;
};

export default UploadButton;
