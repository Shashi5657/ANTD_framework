import { Table } from "antd";

const TableData = () => {
  const data = [
    {
      name: "Vinay",
      age: 23,
      key: 1,
      Address: "GGN Colony",
    },
    {
      name: "Shashi",
      age: 22,
      key: 3,
      Address: "BRJ Colony",
    },
    {
      name: "Vishu",
      age: 21,
      key: 2,
      Address: "AIL Colony",
    },
  ];

  const columnData = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
    },
    {
      title: "Address",
      dataIndex: "Address",
      key: "key",
    },
    {
      title: "Graduated?",
      key: "key",
      render: (payload) => {
        return <p>{payload.age > 22 ? "TRUE" : "FALSE"}</p>;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={data} columns={columnData}></Table>
    </div>
  );
};

export default TableData;
