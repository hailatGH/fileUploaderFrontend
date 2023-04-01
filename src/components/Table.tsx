import { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DataType {
  key: string;
  fileName: string;
  fileSize: number;
  updatedAt: string;
}

const notify = (type: string, msg: string) => {
  if (type === "success") toast.success(msg);
  if (type === "error") toast.error(msg);
};

function DataTable(props: any) {
  const [pageNumber, setPageNumber] = useState(1);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://127.0.0.1:3000/file/${id}`).then(() => {
        props.onUpload();
        notify("success", `Succeed deleting!`);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "File Size",
      dataIndex: "fileSize",
      key: "fileSize",
    },
    {
      title: "Uploaded Date",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <FaTrashAlt
          color="red"
          size={20}
          onClick={() => handleDelete(record.key)}
        />
      ),
    },
  ];

  return (
    <div className="tableWraper">
      <div className="table">
        <Table
          columns={columns}
          dataSource={props.data}
          pagination={{
            hideOnSinglePage: true,
            showSizeChanger: false,
            current: pageNumber,
            defaultCurrent: 1,
            defaultPageSize: 7,
            total: props.total,
            onChange: setPageNumber,
          }}
        />
      </div>
    </div>
  );
}

export default DataTable;
