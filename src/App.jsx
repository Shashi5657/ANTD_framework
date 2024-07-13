import { Button, Input, Select, Table } from "antd";
import "./App.css";
import FormPage from "./components/FormPage";
import TableData from "./components/Table";
import DateTimePicker from "./components/DateTimePicker";
import Spinning from "./components/Spinning";
import Progressbar from "./components/Progressbar";

function App() {
  const fruits = ["apple", "banana", "orange", "grapes"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button type="primary">Submit</Button>
      <Button type="link" href="https://www.google.com">
        Redirect
      </Button>
      <Input placeholder="name" maxLength={10} allowClear></Input>
      {/* <Input.Search>Search</Input.Search> */}
      <Select
        mode="multiple"
        allowClear
        placeholder="select fruit"
        style={{ width: "50%" }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option key={index} value={fruit}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
      <FormPage />
      <TableData />
      <DateTimePicker />
      <Spinning />
      <Progressbar />
    </div>
  );
}

export default App;
