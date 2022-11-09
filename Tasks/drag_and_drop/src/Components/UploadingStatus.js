import check from '../assets/check.png'
import docs from "../assets/docs.png";
import './uploading-status.css'

const UploadingStatus = ({data}) => {
  const displayUploadFiles = data.map((images) => {
    const imageTextCheck = images.name.slice(0, 25);
    return (
      <div className="uploading-status" key={images.lastModifiedDate}>
        <img className="doc-icon" src={docs} alt="docs_png"  />
        <span className="upload-text">
          {imageTextCheck.length === 25 ? `${imageTextCheck}...` : images.name}
        </span>
        <img className="check-icon" src={check} alt="check_png" />
      </div>
    );
  });

  return <span>{displayUploadFiles}</span>;
};

export default UploadingStatus;
