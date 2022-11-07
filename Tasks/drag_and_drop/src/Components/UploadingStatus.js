import CheckIcon from "./CheckIcon";
import DocIcon from "./DocIcon";

const UploadingStatus = (props) => {
  const displayUploadFiles = props.data.map((images) => {
    const imageTextCheck = images.slice(0, 25);
    return (
      <div className="uploading-status" key={images.id}>
        <DocIcon />
        <span className="upload-text">
          {imageTextCheck.length === 25 ? `${imageTextCheck}...` : images}
        </span>
        <CheckIcon />
      </div>
    );
  });

  return <span>{displayUploadFiles}</span>;
};

export default UploadingStatus;
