import axios from "axios";
import { useEffect, useState } from "react";
// import { GetData } from "./services/data"

function App() {
  const [urlData, setUrlData] = useState([]);
  // console.log(urlData[6].title);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data[3].title)
        // console.log(res.data[3].body)
        const allData = res.data.map((allArrayData, id) => allArrayData);
        // console.log(allData);
        setUrlData(allData);
      })
      .catch((error) => console.log(error));
  };
  const displayData =
    urlData &&
    urlData.map((item) => {
      return (
        <div key={item.id}>
          <div>
            <strong>Titles {item.id}</strong> - {item.title}
          </div>
          <div>
            <strong>Body</strong> - {item.body}
          </div>
        </div>
      );
    });

  return (
    <>
      <h1>Titles & Body</h1>
      <div>{displayData}</div>
      <div></div>
    </>
  );
}

export default App;
