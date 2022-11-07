import { useState } from "react";
import "./App.css";
import FileUploader from "./Components/FileUploader";
import Header from "./Components/Header";
import SubmitButton from "./Components/SubmitButton";
import UploadingStatus from "./Components/UploadingStatus";

function App() {
  const [data, setData] = useState([]);
  
  const handleOnChange = (e) => {
    const image = e.target.files[0];
    if (image) {
      const imageName = image.name;
      const allImages = [...data, imageName];
      setData(allImages);
    }
  };

  const emptyAllData = () => {
    setData([])
  }

  const uploadStatus =
    data.length === 0 ? (
      <span className="no-file">No File Selected</span>
    ) : (
      <>
        <UploadingStatus data={data} />
        <SubmitButton setData={emptyAllData} />
      </>
    );

  return (
    <div className="App">
      <Header />
      <FileUploader onChange={handleOnChange} />
      {uploadStatus}
    </div>
  );
}

export default App;
