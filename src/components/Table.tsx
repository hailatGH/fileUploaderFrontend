import { useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FaTrashAlt } from "react-icons/fa";

interface DataType {
  key: string;
  fileName: string;
  fileSize: number;
  updatedAt: string;
}

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
      <FaTrashAlt color="red" size={20} onClick={() => console.log(record)} />
    ),
  },
];
function DataTable(props: any) {
  const [pageNumber, setPageNumber] = useState(1);

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
            total: props.length,
            onChange: setPageNumber,
          }}
        />
      </div>
    </div>
  );
}

export default DataTable;
