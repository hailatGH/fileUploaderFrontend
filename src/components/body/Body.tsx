import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import { Hero, UploadBtn, Table } from "../../components";
import "./body.scss";

interface Data {
  key: string;
  fileName: string;
  fileSize: number;
  updatedAt: string;
}

function Body() {
  const [data, setData] = useState<Data | []>([]);
  const [upload, setUpload] = useState(false);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<Data> = await axios.get<Data>(
        "http://127.0.0.1:3000/file"
      );

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="leftbody">
        <Hero />
        <UploadBtn />
      </div>

      <div className="rightBody">
        <Table data={data} total={data ? [0]?.length : 0} />
      </div>
    </div>
  );
}

export default Body;
