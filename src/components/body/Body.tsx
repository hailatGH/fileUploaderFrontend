import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { Hero, UploadBtn, Table } from "../../components";
import "./body.scss";

function Body() {
  const [data, setData] = useState([]);
  const [upload, setUpload] = useState(false);

  const onUpload = (): void => {
    setUpload((prevUpload) => !prevUpload);
  };

  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        "http://127.0.0.1:3000/file"
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [upload]);

  return (
    <div className="body">
      <div className="leftbody">
        <Hero />
        <UploadBtn onUpload={onUpload} />
      </div>

      <div className="rightBody">
        <Table data={data} total={data.length} onUpload={onUpload} />
      </div>
    </div>
  );
}

export default Body;
