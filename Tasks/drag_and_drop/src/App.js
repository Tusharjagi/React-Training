import { useState } from "react";
import "./App.css";
import UploaderBox from "./Components/UploaderBox";
import Header from "./Components/Header";
import UploadButton from "./Components/UploadButton";
import UploadingStatus from "./Components/UploadingStatus";

function App() {
  const [data, setData] = useState([]);
  console.log(data)
  const handleOnChange = (e) => {
    const fileData = [];
    for (const value of Object.values(e.target.files)) {
      fileData.push(value);
    }
    setData(fileData);
  };

  const emptyAllData = () => {
    setData([]);
  };

  const uploadStatus =
    data.length === 0 ? (
      <span className="no-file">No File Selected</span>
    ) : (
      <>
        <UploadingStatus data={data} />
        <UploadButton setData={emptyAllData} />
      </>
    );

  return (
    <div className="App">
      <Header />
      <UploaderBox onChange={handleOnChange} />
      {uploadStatus}
    </div>
  );
}

export default App;
